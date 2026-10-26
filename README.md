# Grape Business Networking Online

A responsive single-page website built with React, Vite and Tailwind CSS.

## Local preview

```bash
npm install
npm run dev
```

Open the local URL Vite prints in the terminal (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Editing content

Business links, founder placeholders and shared copy are in `src/config.js`. Replace `lumaEventsUrl`, the founder names/titles, and LinkedIn URLs when final details are available.

## Netlify

The included `netlify.toml` builds with `npm run build` and publishes `dist`. Import the repository in Netlify and deploy with the detected settings.
