#!/usr/bin/env python3
"""Checks every URL in src/data.js. Exit 1 if any is broken. Run: python3 scripts/check_links.py"""
import re, sys, urllib.request
from pathlib import Path

data = (Path(__file__).parent.parent / "src" / "data.js").read_text(encoding="utf-8")
D = "https://docs.sharefile.com/en-us/sharefile/"
W = "https://www.sharefile.com/"
urls = set(re.findall(r'"(https://[^"]+)"', data))
urls |= {D + p for p in re.findall(r'D \+ "([^"]+)"', data)}
urls |= {W + p for p in re.findall(r'W \+ "([^"]+)"', data)}
urls = sorted(u.split("#")[0] for u in urls if "googletagmanager" not in u)

bad = []
for u in sorted(set(urls)):
    req = urllib.request.Request(u, headers={"User-Agent": "Mozilla/5.0 (sharefile-maps link check)"})
    try:
        with urllib.request.urlopen(req, timeout=20) as r:
            code = r.status
    except urllib.error.HTTPError as e:
        code = e.code
    except Exception as e:
        code = str(e)
    ok = isinstance(code, int) and code < 400
    print(("OK  " if ok else "BAD ") + str(code) + "  " + u)
    if not ok:
        bad.append(u)

print(f"\n{len(set(urls)) - len(bad)} ok, {len(bad)} broken")
sys.exit(1 if bad else 0)
