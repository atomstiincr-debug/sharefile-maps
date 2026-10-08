#!/usr/bin/env python3
"""Reports the publish date, channel and title of every YouTube video the site uses.

Rule (Adri, 2026-10-08): only recent videos from the Progress ShareFile era. A video FAILS the run when
we can prove it is older than VIDEO_CUTOFF, from another channel, or mentions Citrix. When YouTube does
not hand the data to the server, the video is reported as "unverified" (no false alarm).

Date sources, in order: the watch page (with consent cookie), then the official channel RSS feed
(covers the channel's latest uploads).
Run: python3 scripts/video_dates.py
"""
import re, sys, json, urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path

VIDEO_CUTOFF = "2024-10-01"   # Progress acquired ShareFile in 2024; older videos predate the Progress era
CHANNEL = "Progress ShareFile"
HEAD = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9", "Cookie": "SOCS=CAI; CONSENT=YES+cb"}

data = (Path(__file__).parent.parent / "src" / "data.js").read_text(encoding="utf-8")
ids = sorted(set(re.findall(r'\bid: "([A-Za-z0-9_-]{11})", t:', data)) | set(re.findall(r"watch\?v=([A-Za-z0-9_-]{11})", data)))

def get(url):
    return urllib.request.urlopen(urllib.request.Request(url, headers=HEAD), timeout=25).read().decode("utf-8", "ignore")

# Channel feed (official channel id from any of our videos' pages, or from the channel handle page)
feed = {}
try:
    page = get("https://www.youtube.com/@progresssharefile")
    cid = re.search(r'"(?:channelId|externalId)":"(UC[A-Za-z0-9_-]{22})"', page) or re.search(r'channel/(UC[A-Za-z0-9_-]{22})', page)
    if cid:
        root = ET.fromstring(get("https://www.youtube.com/feeds/videos.xml?channel_id=" + cid.group(1)))
        ns = {"a": "http://www.w3.org/2005/Atom", "yt": "http://www.youtube.com/xml/schemas/2015"}
        for e in root.findall("a:entry", ns):
            feed[e.find("yt:videoId", ns).text] = (e.find("a:published", ns).text[:10], e.find("a:title", ns).text, CHANNEL)
except Exception as e:
    print("feed unavailable:", e)

rows, bad, unverified = [], [], []
for v in ids:
    date, ch, title, desc = "?", "?", "?", ""
    try:
        html = get("https://www.youtube.com/watch?v=" + v)
        m = re.search(r'"(?:uploadDate|publishDate)":"(\d{4}-\d{2}-\d{2})', html) or re.search(r'itemprop="(?:uploadDate|datePublished)" content="(\d{4}-\d{2}-\d{2})', html)
        if m: date = m.group(1)
        m = re.search(r'"ownerChannelName":"([^"]+)"', html); ch = m.group(1) if m else ch
        m = re.search(r'<meta name="title" content="([^"]*)"', html); title = m.group(1) if m else title
        m = re.search(r'"shortDescription":"((?:[^"\\]|\\.)*)"', html)
        desc = json.loads('"' + m.group(1) + '"') if m else ""
    except Exception:
        pass
    if date == "?" and v in feed:
        date, title, ch = feed[v]
    if date == "?":
        line = f"?           {v}  (YouTube did not return data to the server)"
        unverified.append(line); rows.append(line); print("UNVERIFIED " + line); continue
    flags = []
    if date < VIDEO_CUTOFF: flags.append("older than " + VIDEO_CUTOFF)
    if ch != "?" and ch != CHANNEL: flags.append("channel: " + ch)
    if re.search(r"citrix", title + " " + desc, re.I): flags.append("mentions Citrix")
    line = f"{date}  {v}  {title}" + (f"  [{', '.join(flags)}]" if flags else "")
    rows.append(line)
    if flags: bad.append(line)
    print(("FLAG " if flags else "OK   ") + line)

summary = f"{len(ids)} videos: {len(ids) - len(bad) - len(unverified)} ok, {len(bad)} flagged, {len(unverified)} unverified (cutoff {VIDEO_CUTOFF}, channel {CHANNEL})"
print("\n" + summary)
print("::notice title=Video report::" + "%0A".join(x.replace("%", "%25") for x in [summary] + sorted(rows)))
sys.exit(1 if bad else 0)
