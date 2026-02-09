# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

| Purpose | Command |
|---|---|
| Install deps | `npm ci` |
| Start Storybook (dev) | `npm start` |
| Start Storybook (no browser) | `npm run start:cli` |
| Build library | `npm run build` |
| Build Storybook | `npm run build:storybook` |
| Run all tests | `npm test` |
| Run tests with coverage | `npm run test:ci` |
| Run only changed tests | `npm run test:diff` |
| Lint | `npm run lint` |
| Format check | `npm run prettier:ci` |
| Format write | `npm run prettier` |
| TypeScript compile check | `npm run compile` |
| Full health check (lint + prettier + test + build) | `npm run update:doctor` |
| Generate a new component scaffold | `npm run create` |

### Running a single test file
Jest is configured with `testMatch: ['**/**/*.test.tsx']`. Run a single file directly:
```bash
npx jest src/components/atoms/Button/index.test.tsx --no-coverage
```

### Coverage thresholds
`jest.config.js` enforces **95%** globally on branches, functions, lines, and statements. `collectCoverageFrom` targets `src/components/**/*.tsx` (excluding stories) and `src/functions/**.ts`.

## Architecture

### Atomic Design hierarchy
Components live under `src/components/` split into three tiers following [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/):
- **atoms/** — leaf components (Button, Input, Icon, Tag, etc.)
- **molecules/** — compositions of atoms (Dropdown, Tabs, Pagination, etc.)
- **organisms/** — complex sections that compose molecules (NavBar, Card, Table, Hero, etc.)

Each tier has an `index.ts` barrel that re-exports all components as named defaults. `src/index.ts` re-exports all three barrels plus imports Bulma CSS and Material Design Icons CSS.

### Per-component file layout
Every component lives in its own folder with a consistent structure:
```
ComponentName/
  index.tsx          # component implementation
  index.test.tsx     # Jest tests
  index.stories.tsx  # Storybook story
  index.mocks.json   # test and storybook mock data
```

The `index.mocks.json` has two top-level keys:
- `testing` — data imported in tests
- `storybook` — argTypes and parameters for the story

### Path aliases
Used throughout the codebase (defined in `tsconfig.json`, `vite.config.ts`, and `jest.config.js`):

| Alias | Resolves to |
|---|---|
| `@constants/*` | `src/constants/*` |
| `@components/*` | `src/components/*` |
| `@functions/*` | `src/functions/*` |
| `@interfaces/*` | `src/interfaces/*` |
| `@customTypes/*` | `src/types/*` |
| `@design/*` | `src/design/*` |

### Shared types and interfaces
- `src/types/styleTypes.ts` — Bulma-derived string literal union types (colors, sizes, alignments, grid types).
- `src/types/domTypes.ts` — DOM-oriented types (`ChildrenType`, `InputType`, `ButtonType`, enums like `IconSizeEnum`).
- `src/interfaces/commonProps.ts` — Base prop interfaces every component builds on: `ElementProps` (testId, cssClasses, style), `ComposedElementProps` (adds container-level equivalents), `ClickeableProps`, `ChangeableProps`, `InteractiveProps`, etc.
- `src/interfaces/atomProps.ts` — All atom-level component prop interfaces.
- `src/interfaces/moleculeProps.ts` — Molecule-level prop interfaces.
- `src/interfaces/organismProps.ts` — Organism-level prop interfaces.
- `src/interfaces/functionProps.ts` — Prop interfaces for shared helper functions.

### Shared utilities (`src/functions/`)
- `parsers.ts` — `parseClasses(array)` joins non-null class strings; `parseTestId(config)` builds deterministic `data-testid` values from component tag + classes.
- `generators.ts` — `generateKey()` produces unique keys for list rendering; `createObjArray()` scaffolds test/story data arrays.
- `jest.tsx` — `renderTestingTableContainer()` wraps elements in `<table><tbody><tr>` for table-cell component tests.
- `tests/` and `mocks/` — unit tests and JSON mocks for the shared functions themselves.

### Constants (`src/constants/`)
- `classes.ts` — `COMMON_CLASSES` object: Bulma CSS class fragment constants (`is-`, `has-text-`, `is-loading`, etc.) used in every component to build class strings.
- `regExp.ts` — `TEST_ID_REGEXP` object: regex patterns used to derive `data-testid` values from class strings during testing.

### How components build classes and testIds
Every component follows the same pattern:
1. Call `parseClasses([...])` with an array of conditional Bulma class fragments (using `COMMON_CLASSES` constants) to produce the final `className` string.
2. Call `parseTestId({ tag, parsedClasses })` to derive a deterministic `data-testid` from the tag name and active classes. This is what tests query against — no arbitrary IDs.

### Build and bundling
- **Library build**: Vite in library mode. Entry is `src/index.ts`. Rollup globs all `.ts`/`.tsx` files (excluding stories/tests) as individual entry points so tree-shaking works per-component. Output is ES modules only. `react` and `react/jsx-runtime` are externalized.
- **Type declarations**: `vite-plugin-dts` generates `.d.ts` files from `src/`.
- **Storybook**: Separate build via `storybook build`. Stories live alongside components.

### Git hooks (Husky)
- **pre-commit**: runs `lint-staged` (prettier + eslint on staged `.ts`/`.tsx` files).
- **commit-msg**: enforces conventional commits via `commitlint` (`@commitlint/config-conventional`).
- **pre-push**: runs `build`, `build:storybook`, `lint`, `prettier:ci`, and `test:ci`.

### CI (GitHub Actions)
- `check_build.yml` — builds library + storybook on PRs to `main`.
- `check_quality.yml` — lint, prettier, tests with coverage, uploads to Codecov and SonarCloud.
- `check_security.yml` — dependency and code security scanning.
- `release_version.yml` — semantic-release automation on `main`.

## Conventions

### Hardcoded strings
Bulma CSS class fragments must not be inlined. Use `COMMON_CLASSES` from `@constants/classes`. When a new class fragment is needed, add it there first.

### Test data
Mock data for tests and stories is always stored in the co-located `index.mocks.json`. Import the `testing` key in test files. Never hardcode test fixtures inline — keep them in the JSON.

### Interface comments
All interface properties have JSDoc comments categorized as `Attribute`, `Styling`, or `Function` to clarify intent. Follow this pattern when adding new props.

### Component scaffolding
`npm run create` (powered by Hygen, templates in `_templates/component/new/`) generates the full file set for a new component. Use it rather than creating files manually.
