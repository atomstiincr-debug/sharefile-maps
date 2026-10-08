# ShareFile Maps

Unofficial map of ShareFile plans (Advanced, Premium, Enterprise, Virtual Data Room), inspired by [m365maps.com](https://m365maps.com). Every feature links to official documentation on docs.sharefile.com.

**Not official.** ShareFile and Progress are trademarks of Progress Software Corporation. The only authoritative sources are sharefile.com and docs.sharefile.com.

## What it includes

- Plan map (Advanced → Premium step-up → Enterprise step-up) and Virtual Data Room map
- Recommender by industry, company size and Enterprise signals
- Plan comparator with price difference
- Feature matrix with filters and CSV export
- MSRP and storage calculator
- Knowledge, glossary, change log and discrepancies found in the official source
- Spanish, English and Portuguese

## How to update

All content lives in `src/data.js` (features, plans, prices, industries, glossary, links). Interface text lives in `src/i18n.js`.

```bash
node scripts/validate.js   # checks data integrity
python3 build.py           # builds index.html
```

Commit both `src/` and the generated `index.html`.

## Analytics

Set `analyticsId` in `src/data.js` to a GA4 measurement ID to enable analytics. A consent banner appears automatically. Empty = no analytics and no banner.

## Link check

`.github/workflows/check-links.yml` checks every official URL every Monday and opens an issue if one breaks.

## Publish with GitHub Pages

Settings → Pages → Source: *Deploy from a branch* → Branch `main`, folder `/ (root)`.
