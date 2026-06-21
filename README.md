# OMZ1PORTS

A Vite + React + Tailwind CSS landing page for the OMZ Sports media site.

## Features

- React app with animated sections using `motion`
- Tailwind CSS styling powered by `@tailwindcss/vite`
- Local preview with Vite
- Build-ready production bundle

## Getting Started

### Prerequisites

- Node.js 24+ (recommended)
- npm

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open the browser at `http://localhost:3000` or the forwarded Codespaces preview URL.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Deploy to GitHub Pages

1. Merge your branch into `main`.
2. Enable GitHub Pages in repository settings.
3. Set source to the `gh-pages` branch.

GitHub Actions will build the app and publish the generated `dist/` folder automatically.

## Useful scripts

- `npm run dev` — start the local development server
- `npm run build` — create a production build
- `npm run preview` — preview the production build locally
- `npm run lint` — run TypeScript type-checking

## Project structure

- `src/App.tsx` — main application markup and layout
- `src/main.tsx` — React app entry point
- `src/index.css` — Tailwind and custom styles
- `vite.config.ts` — Vite configuration

## Notes

This project does not require `GEMINI_API_KEY` for the current UI preview.
