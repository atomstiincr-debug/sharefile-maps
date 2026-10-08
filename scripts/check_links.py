#!/usr/bin/env python3
"""Checks every official URL the site links to. Exit 1 if any is broken.

Covers src/data.js (features, industries, integrations, knowledge, videos) plus literal URLs in
src/app.js and src/i18n.js. A link counts as broken when it errors (4xx/5xx), when it silently
redirects to a home page / 404 page ("soft 404"), or when the page title says "not found".
Redirects to a different real page are reported as warnings so they can be reviewed.
Run: python3 scripts/check_links.py
"""
import re, sys, urllib.request, urllib.parse
from pathlib import Path

root = Path(__file__).parent.parent / "src"
data = (root / "data.js").read_text(encoding="utf-8")
code = (root / "app.js").read_text(encoding="utf-8") + (root / "i18n.js").read_text(encoding="utf-8")
D = "https://docs.sharefile.com/en-us/sharefile/"
W = "https://www.sharefile.com/"
urls = set(re.findall(r'"(https://[^"]+)"', data))
urls |= {D + p for p in re.findall(r'D \+ "([^"]+)"', data)}
urls |= {W + p for p in re.findall(r'W \+ "([^"]+)"', data)}
urls |= set(re.findall(r'"(https://(?:docs\.sharefile\.com|www\.sharefile\.com|www\.youtube\.com/(?:playlist|@))[^"`\s]*)"', code))
urls = {u.split("#")[0] for u in urls if "googletagmanager" not in u and not u.endswith("=")}
# Videos: oEmbed returns 404 when a video is removed or made private
# (a removed YouTube video still answers 200 on /watch, so every watch link is checked through oEmbed)
videos = set(re.findall(r'\bid: "([A-Za-z0-9_-]{11})", t:', data)) | set(re.findall(r"watch\?v=([A-Za-z0-9_-]{11})", " ".join(urls)))
videos = sorted(videos)
oembed = {"https://www.youtube.com/oembed?format=json&url=https://www.youtube.com/watch?v=" + v for v in videos}

def norm(path):
    p = urllib.parse.unquote(path).lower().rstrip("/")
    return re.sub(r"\.html?$", "", p)

HOMES = {"", "/en-us", "/en-us/sharefile", "/en-us/sharefile/welcome"}
# Official links whose sites refuse automated checks (verified by hand; re-verify if they ever change):
#  - appsource.microsoft.com blocks bots with 403; listing WA200007922 is linked from docs.sharefile.com (Outlook Online).
#  - partnercommunity.sharefile.com is the "Partner Login" link on www.sharefile.com/partners.
#  - sharefile.ideas.aha.io redirects to ShareFile sign-in (auth2.sharefile.io) via Progress identity: official, login required.
MANUAL = {"appsource.microsoft.com", "partnercommunity.sharefile.com", "sharefile.ideas.aha.io"}
manual = []
bad, warn, ok = [], [], 0
for u in sorted(urls | oembed):
    req = urllib.request.Request(u, headers={"User-Agent": "Mozilla/5.0 (sharefile-maps link check)"})
    status, final, title = None, u, ""
    try:
        with urllib.request.urlopen(req, timeout=25) as r:
            status, final = r.status, r.geturl()
            body = r.read(300_000).decode("utf-8", "ignore")
            m = re.search(r"<title[^>]*>(.*?)</title>", body, re.S | re.I)
            title = re.sub(r"\s+", " ", m.group(1)).strip() if m else ""
    except urllib.error.HTTPError as e:
        status = e.code
    except Exception as e:
        status = type(e).__name__
    o, f = urllib.parse.urlparse(u), urllib.parse.urlparse(final)
    if o.netloc in MANUAL:
        manual.append(f"{status} {u}")
    elif not isinstance(status, int) or status >= 400:
        bad.append(f"{status} {u}")
    elif re.search(r"\b(404|not found|page not found)\b", title, re.I):
        bad.append(f"soft-404 (title: {title[:60]}) {u}")
    elif "oembed" not in u and (o.netloc, norm(o.path)) != (f.netloc, norm(f.path)):
        if norm(f.path) in HOMES or re.search(r"404|not-found|error", f.path, re.I):
            bad.append(f"redirects to home/404 -> {final} {u}")
        else:
            warn.append(f"redirect -> {final} {u}")
    else:
        ok += 1
    print(("BAD " if bad and bad[-1].endswith(u) else "WARN" if warn and warn[-1].endswith(u) else "OK  "), status, u)

summary = f"{len(urls)} pages + {len(oembed)} videos checked: {ok} ok, {len(warn)} redirects to review, {len(bad)} broken, {len(manual)} verified by hand (sites block bots)"
print("\n" + summary)
report = [summary] + ["BROKEN " + b for b in bad] + ["REDIRECT " + w for w in warn] + ["MANUAL " + m for m in manual]
# One annotation with the full report (readable through the GitHub API)
print("::notice title=Link report::" + "%0A".join(x.replace("%", "%25") for x in report))
sys.exit(1 if bad else 0)
