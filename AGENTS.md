# Repository Guidelines

## Project Structure & Module Organization

This is a Quasar/Vue 3 portfolio SPA. Application code lives in `src/`.
Pages are in `src/pages`, layout shells in `src/layouts`, router setup in
`src/router`, boot files in `src/boot`, and global styles in `src/css`.
Static public files belong in `public/`. Imported assets, including certificate
images, belong in `src/assets`. Structured portfolio content is stored in
`src/data`; localized content is split by locale, for example
`src/data/en-US/professional-trajectory.json` and
`src/data/pt-BR/certification-records.json`. UI labels and text snippets live in
`src/i18n`.

## Build, Test, and Development Commands

- `npm install`: install dependencies and run Quasar preparation.
- `npm run dev`: start the local Quasar development server.
- `npm run build`: generate the production SPA build in `dist/spa`.
- `npm run lint`: run ESLint over Vue and JavaScript files.
- `npm run format`: format supported source files with Prettier.
- `npm test`: placeholder command; no automated test suite is configured yet.

## Coding Style & Naming Conventions

Use Vue single-file components with the Composition API, following the existing
`<script setup>` style. Prettier controls formatting: no semicolons, single
quotes, and `printWidth` of 100. Keep JSON data filenames lowercase kebab-case,
such as `main-skills.json` and `areas-of-expertise.json`. Prefer Quasar
components and utility classes before custom UI code. Keep print-specific
behavior explicit with existing classes such as `no-print`.

## Testing Guidelines

There is currently no dedicated unit or end-to-end test framework. For changes,
run `npm run lint` and `npm run build` before opening a PR. When changing visual
layout, i18n, print behavior, or certificate modals, manually verify the affected
flow in the browser and check both online and print views.

## Commit & Pull Request Guidelines

Use trunk-based, short-lived feature branches from `main`, named with a
conventional prefix, for example `feat/document-architecture-version`. Commit
messages follow Conventional Commits seen in history: `feat: ...`, `docs: ...`,
and `chore: ...`. Pull requests should target `main`, include a concise summary,
list validation performed, and mention screenshots or print checks when the UI
changes.

## Architecture Notes

The app uses hash routing for GitHub Pages compatibility. Locale routes such as
`/#/en-US` and `/#/pt-BR` are accepted, applied, persisted in `localStorage`, and
then cleaned back to the home route. Build output is configured for relative
asset paths so deployed pages can load hashed Vite assets correctly.
