# TGSIMON.COM

**TGSIMON** — Advanced Anti-Corrosion Protection for Pipelines & Industrial Assets.  
Asia HQ with strong presence in Sweden & EU (partnership with 3CCC).

## Project structure

```
index.html          # main site page
css/styles.css      # site styles
js/app.js           # chat logic, connects to n8n assistant
js/app.js           # chat & form logic
privacy.html        # privacy policy
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

## Assistant Integration

- In `index.html` already set:
  ```html
  <script>
    window.WEB_APP_URL = "https://n8n.delsole.com/webhook/chat-tgsimon";
  </script>
  ```
- The chat sends user messages to that webhook.  
- Expected JSON response from backend:
  ```json
  { "reply": "Your assistant message here" }
  ```
Configuration is kept in `js/config.js` (copy from `js/config.example.js` and **do not** commit the real file).

```html
<script src="js/config.js"></script>
<script src="js/app.js"></script>
```

Inside `js/config.js` set:

```js
window.CHAT_API_URL = "https://n8n.delsole.com/webhook/chat-tgsimon"; // relay endpoint
window.OPENAI_API_KEY = ""; // optional, direct OpenAI key
window.FORM_URL = ""; // optional, Google Sheet & phone notification handler
```

- If `OPENAI_API_KEY` is provided, messages are sent directly to the OpenAI API.
- Otherwise `CHAT_API_URL` is used (expected JSON: `{ "reply": "..." }`).
- `FORM_URL` receives contact form data (e.g., Google Apps Script).
- If none are set, the assistant falls back to a small built-in knowledge base with canned responses.

## How to replace images

- `images/logo.png` → your logo
- `images/hero/hero.png` → hero banner
- `images/works/example1..6.jpg` → photos for completed works carousel
