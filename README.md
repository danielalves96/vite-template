# Vite ReactTS Template

A modern minimal Vite + React + TypeScript template with pre-configured ESLint, Prettier, Testing with Jest and Git hooks with Husky out of the box 📦

## Technologies

- ⚡️ [Vite 5.0](https://vitejs.dev/) - Next Generation Frontend Tooling
- ⚛️ [React 18](https://reactjs.org/) - A JavaScript library for building user interfaces
- 💎 [TypeScript](https://www.typescriptlang.org/) - Why not?!
- 🔨 [EsLint](https://eslint.org/) - Pluggable JavaScript Linter
- 🌀 [Prettier](https://prettier.io) - Opinionated Code Formatter
- 🐺 [Husky](https://github.com/typicode/husky) - Native Git hooks
- ⚙️ [Jest](https://jestjs.io/) - Testing libraries
- 📑 [Commitlint](https://commitlint.js.org/) - Linting your commits based on commit convention
- 🐜 [Ant design](https://ant.design/) - Provides plenty of UI components to enrich your web applications
- 💨 [Tailwind](https://tailwindcss.com/) - CSS framework for rapidly building modern websites
- 🐄 [i18next](https://www.i18next.com/) - An internationalization-framework written in and for JavaScript
- 🌐 [Axios](https://axios-http.com/ptbr/docs/intro) - A simple promise based HTTP client for the browser.
- ⌨️ Absolute Imports

## Dependencies

- [pnpm](https://pnpm.io/pt/)
- [NodeJs v20.9.0](https://nodejs.org/en)

## Usage

```bash
pnpm install
```

```bash
pnpm dev
```

## Available commands

In this project, you can run the following scripts:

| Script                    | Description                                         |
| ------------------------- | --------------------------------------------------- |
| `pnpm dev`                | Runs the app in the development mode.               |
| `pnpm build`              | Builds the app for production to the `dist` folder. |
| `pnpm start`              | Run a locally server.                               |
| `pnpm lint`               | Runs the Eslint and show code problems.             |
| `pnpm format`             | Runs the Prettier and fix code style.               |
| `pnpm test:e2e`           | Run the app tests.                                  |
| `pnpm test:e2e:ci`        | Run the app tests.                                  |
| `pnpm test`               | Run the app tests.                                  |
| `pnpm test:unit:coverage` | Run the app tests.                                  |
| `pnpm typecheck`          | Check the types os application.                     |
| `pnpm commit`             | Open the CZ CLI to create a message to your commit. |
| `pnpm release`            | Generate release notes.                             |
