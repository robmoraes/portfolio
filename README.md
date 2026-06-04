# Portfolio

Personal portfolio built with Quasar, Vue 3, and Vite. The project generates a
responsive SPA with an A4-inspired visual layout, print support, bilingual
content, and automated deployment to GitHub Pages.

## Overview

The site presents professional trajectory, main skills, areas of expertise,
certificates, and complementary courses. The application uses structured JSON
data to separate content from the visual layer, making maintenance,
internationalization, and layout evolution easier.

## Stack

- Quasar 2
- Vue 3 com Composition API
- Vite
- Vue I18n
- Vue Router em hash mode
- Font Awesome e Material Icons via `@quasar/extras`
- Vue Word Cloud for the online tag cloud

## Structure

```text
src/
  assets/certs/        Certificate images imported by Vite
  boot/i18n.js         Vue I18n initialization and language preference
  css/app.scss         Global styles
  data/                Structured portfolio content
  data/en-US/          Localized English data
  data/pt-BR/          Localized Portuguese data
  i18n/                Translated labels and text snippets
  layouts/             Main Quasar layout
  pages/IndexPage.vue  Main portfolio page
  router/              SPA routes
```

## Development

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Create the production build:

```bash
npm run build
```

Validate style and static issues:

```bash
npm run lint
```

Format supported files:

```bash
npm run format
```

`npm test` exists only as a placeholder; there is no automated test suite yet.

## Internationalization

The default language is `en-US`. Users can switch between `en-US` and `pt-BR`
with the floating language button. The choice is persisted in `localStorage`
using the `portfolio.locale` key.

Routes such as `/#/en-US` and `/#/pt-BR` are accepted to apply a language
directly. After applying the preference, the application cleans the URL back to
the home route.

## Build and Deploy

The build uses relative paths (`publicPath: './'` and `vite.base = './'`) for
GitHub Pages compatibility. The `.github/workflows/deploy.yml` workflow runs
`npm ci`, `npm run build`, and publishes `dist/spa` to GitHub Pages on every push
to `main`.

## Contributing

Use short-lived branches from `main` with a conventional prefix, for example:

```bash
git switch -c feat/document-architecture-version
```

Commits follow Conventional Commits:

```text
feat: add version information to portfolio
docs: update readme
chore: bump version to 0.2.0
```

Before opening a PR, run `npm run lint` and `npm run build` when the change
affects code, styles, imported data, or build configuration.
