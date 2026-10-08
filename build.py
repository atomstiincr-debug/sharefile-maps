#!/usr/bin/env python3
"""Builds index.html (single self-contained page) from src/. Run: python3 build.py"""
from pathlib import Path

root = Path(__file__).parent
src = root / "src"
tpl = (src / "index.template.html").read_text(encoding="utf-8")
css = (src / "styles.css").read_text(encoding="utf-8")
js = "\n".join((src / n).read_text(encoding="utf-8") for n in ["data.js", "i18n.js", "app.js"])

page = tpl.replace("/*__CSS__*/", css).replace("/*__JS__*/", js)
# GitHub Pages serves a full document; the artifact preview wraps one itself.
full = ('<!doctype html>\n<html lang="es">\n<head>\n<meta charset="utf-8">\n'
        '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
        + page.replace("<a href=\"#view\"", "</head>\n<body>\n<a href=\"#view\"", 1) + "\n</body>\n</html>\n")
(root / "index.html").write_text(full, encoding="utf-8")
(root / "preview.html").write_text(page, encoding="utf-8")
print("index.html", len(full), "bytes")
