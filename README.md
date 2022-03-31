[![Netlify Status](https://api.netlify.com/api/v1/badges/e555892d-396f-4a63-8d87-9a5b6ffd2f86/deploy-status)](https://app.netlify.com/sites/thirdplacemaking/deploys)

# Third Place Making Official Website
The website is published at https://thirdplacemaking.com 

---

## Install Dependencies

```sh
npm install
```

## Development Server

Tailwind Watcher:

```sh
npm run dev
```

Hugo Server, in another tab:

```sh
hugo server
```

## Production Build

```sh
npm run build && hugo --minify --environment production
```
