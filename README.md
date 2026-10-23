# Ogbomoso North Local Government website

Static site: HTML, one CSS file and three small JS files. No build step.

- `assets/js/data.js` contact details, wards, lists, search index and `site.independent` (shows the ownership notice)
- `assets/js/main.js` menu, search, forms (WhatsApp, SMS, email), tables, Yoruba/English toggle
- `assets/js/lang.js` applies the saved language before the page paints
- Bilingual text is written as two spans: `<span data-l="en">..</span><span data-l="yo">..</span>`

## Deploy
Push to GitHub, import in Vercel (Framework Preset: Other, no build command).

## Before launch
- Confirm the ward list and the council address (the secretariat is reported at Kinnira)
- Replace the personal phone, WhatsApp and email in `data.js` and in the page footers with official ones
- Have a fluent Yoruba speaker review every Yoruba string
- Add the official logo only with written permission
- Set `site.independent` to false only when the council authorises the site
