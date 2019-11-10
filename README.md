# TypeScript references experiment

An experiment using [TypeScript's project references](https://www.typescriptlang.org/docs/handbook/project-references.html),
and [ts-loader](https://github.com/TypeStrong/ts-loader) in Webpack.

Additionally, try to use [tslint's built-in `ordered-imports` rule](https://palantir.github.io/tslint/rules/ordered-imports/)
instead of [`tslint-import-group-ordering`](https://github.com/Gelio/tslint-import-group-ordering).

## Details

### TypeScript references

The repository consists of 3 TypeScript projects:

1. `components` ([`tsconfig.json`](./src/components/tsconfig.json))

   This is the base project that contains the most basic components.

2. `features` ([`tsconfig.json`](./src/features/tsconfig.json))

   A more _complex_ project. Contains a few React components and uses the components from the
   `components` project.

   Note the `references` section in `tsconfig.json`.

3. The rest ([`tsconfig.json`](./tsconfig.json))

   The main application, with [`app.tsx`](./src/app.tsx) being the main application component. It
   displays feature components from the `features` directory.

It looks like the projects are only recompiled when their source code is changed or their
dependencies are rebuilt.

### `ordered-imports` import grouping

It is possible to achieve the following groups of imports:

1. Third party libraries (e.g. `react`, `react-dom`)
2. `components` and `utils`
3. `features`
4. Relative imports (e.g. `./app`)

See [`tslint.json`](./tslint.json) for more information.
