#!/usr/bin/env python3
"""Reports the publish date, channel and title of every YouTube video the site uses.

Rule (Adri, 2026-10-08): only recent videos from the Progress ShareFile era. Videos published
before VIDEO_CUTOFF, from another channel, or mentioning Citrix are flagged and fail the run.
Run: python3 scripts/video_dates.py
"""
import re, sys, json, urllib.request
from pathlib import Path

VIDEO_CUTOFF = "2024-10-01"   # Progress acquired ShareFile in 2024; older videos predate the Progress era
CHANNEL = "Progress ShareFile"

data = (Path(__file__).parent.parent / "src" / "data.js").read_text(encoding="utf-8")
ids = sorted(set(re.findall(r'\bid: "([A-Za-z0-9_-]{11})", t:', data)) | set(re.findall(r"watch\?v=([A-Za-z0-9_-]{11})", data)))

rows, bad = [], []
for v in ids:
    req = urllib.request.Request("https://www.youtube.com/watch?v=" + v,
                                 headers={"User-Agent": "Mozilla/5.0", "Accept-Language": "en-US,en;q=0.9"})
    try:
        html = urllib.request.urlopen(req, timeout=25).read().decode("utf-8", "ignore")
    except Exception as e:
        bad.append(f"{v} fetch error {e}"); continue
    date = (re.search(r'"(?:uploadDate|publishDate)":"(\d{4}-\d{2}-\d{2})', html) or re.search(r'itemprop="(?:uploadDate|datePublished)" content="(\d{4}-\d{2}-\d{2})', html))
    date = date.group(1) if date else "?"
    ch = re.search(r'"ownerChannelName":"([^"]+)"', html)
    ch = ch.group(1) if ch else "?"
    title = re.search(r'<meta name="title" content="([^"]*)"', html)
    title = title.group(1) if title else "?"
    desc = re.search(r'"shortDescription":"((?:[^"\\]|\\.)*)"', html)
    desc = json.loads('"' + desc.group(1) + '"') if desc else ""
    flags = []
    if date == "?" or date < VIDEO_CUTOFF: flags.append("old" if date != "?" else "no date")
    if ch != CHANNEL: flags.append("channel: " + ch)
    if re.search(r"citrix", title + " " + desc, re.I): flags.append("mentions Citrix")
    line = f"{date}  {v}  {title}" + (f"  [{', '.join(flags)}]" if flags else "")
    rows.append(line)
    if flags: bad.append(line)
    print(("FLAG " if flags else "OK   ") + line)

summary = f"{len(ids)} videos: {len(ids) - len(bad)} ok, {len(bad)} flagged (cutoff {VIDEO_CUTOFF}, channel {CHANNEL})"
print("\n" + summary)
print("::notice title=Video report::" + "%0A".join(x.replace("%", "%25") for x in [summary] + sorted(rows)))
sys.exit(1 if bad else 0)
