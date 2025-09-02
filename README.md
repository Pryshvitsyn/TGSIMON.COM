# TGSIMON.COM

**TGSIMON** — Advanced Anti-Corrosion Protection for Pipelines & Industrial Assets.  
Asia HQ with strong presence in Sweden & EU (partnership with 3CCC).

## Project structure

```
index.html          # main site page
css/styles.css      # site styles
js/app.js           # chat logic, Google Sheets logging
images/logo.png     # company logo
images/hero/hero.png   # main hero image
images/works/       # carousel (example1..example6 placeholders)
```

## How to deploy

1. Clone repo:
   ```bash
   git clone https://github.com/Pryshvitsyn/TGSIMON.COM.git
   cd TGSIMON.COM
   ```

2. Open `index.html` in a browser (works locally) or use **GitHub Pages**:
   - Go to **Settings → Pages**
   - Deploy from branch `main`, folder `/ (root)`
   - Site will be available at:
     ```
     https://pryshvitsyn.github.io/TGSIMON.COM/
     ```

## Google Sheets Integration

- In `index.html`, set:
  ```html
  <script>
    window.WEB_APP_URL = "YOUR_GOOGLE_SCRIPT_WEBAPP_URL";
  </script>
  ```
- Create an Apps Script that accepts POST and writes data to a sheet.

## How to replace images

- `images/logo.png` → your logo
- `images/hero/hero.png` → hero banner
- `images/works/example1..6.jpg` → photos for completed works carousel
