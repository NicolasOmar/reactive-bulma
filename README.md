<p align="center">
  <a href="https://reactivebulma.netlify.app">
    <img width="75" src="https://cdn.svgporn.com/logos/react.svg">
    <img width="50" src="https://cdn.svgporn.com/logos/bulma.svg">
  </a>
</p>

<h1 align="center">Reactive Bulma</h1>

<div align="center">

Component library based on React, Bulma, Typescript and Rollup

<div align="left">

## Table of contents

- [Purpose](#purpose)
- [Status](#status)
- [Dependencies](#dependencies)
- [Quick start](#quick-start)
- [Folder structure](#folder-structure)
- [Documentation](#documentation)
- [Usage](#usage)
- [Versioning](#versioning)
- [Roadmap](#roadmap)
- [Changelog](#changelog)
- [Contributing](#contributing)
- [Credit](#credit)
- [License](#license)

## Purpose

After studying [an Udemy course about Typescript](https://github.com/NicolasOmar/typescript-practice), I wanted to start a new project to practice my new knowledge in a meaningful tool. Therefore, I began this project to understand how to create a component library and investigate the best ways to maintain and nourish it as any professional-level alternatives.

Now I have finished (Jan 31th) [the last story](https://github.com/NicolasOmar/reactive-bulma/issues/80) related to my proposed roadmap; I will change the repo's objectives to the following:
- Check every new issues raised by users who found new bugs (of any kind) or related to new components or feature improvements of the existing ones.
- Update dependencies every week, creating alongside its related PR, branch, and PR to maintain track of those updates. 
- Include ReactiveBulma's components as part of my full-stack app [MyPets](https://github.com/NicolasOmar/my-pets), where I now have code that I can get rid of and, in that process, find new opportunities to enhance components' usability.

## Status

[![Npm Version][badge-npm-version]][link-npm]
[![Npm Bundle Size][badge-npm-size]][link-npm]
[![Npm Downloads][badge-npm-downloads]][link-npm-downloads]
[![Netlify Status][badge-netlify-status]][link-netlify-status]
[![Code Coverage][badge-code-coverage]][link-code-coverage]
[![Quality Gate Status][badge-soundcloud-quality]][link-soundcloud-status]
[![Maintainability Rating][badge-soundcloud-maintanibility]][link-soundcloud-status]
[![Security Rating][badge-soundcloud-security]][link-soundcloud-status]
[![Technical Debt][badge-soundcloud-tech-debt]][link-soundcloud-status]
[![Known Vulnerabilities][badge-snyk-status]][link-snyk-status]
[![GitHub Repo stars][badge-github-repo-stars]][link-github-stars]
[![GitHub commit activity][badge-github-commits]][link-github-commit-activity]
[![GitHub last commit][badge-github-last-commit]][link-github-commit-history]
[![Semantic Commits][badge-semantic-commits]][link-semantic-commits]
[![Contributor Covenant][badge-code-of-conduct]][link-code-of-conduct]

[badge-npm-version]: https://img.shields.io/github/package-json/v/nicolasomar/reactive-bulma?label=npm%20version&logo=npm&labelColor=535353&color=success&style=flat
[badge-npm-size]: https://img.shields.io/bundlephobia/min/reactive-bulma?label=bundle%20size&labelColor=535353&logo=npm&style=flat
[badge-npm-downloads]: https://img.shields.io/npm/dm/reactive-bulma?label=downloads&labelColor=535353&style=flat&logo=npm
[link-npm]: https://www.npmjs.com/package/reactive-bulma
[link-npm-downloads]: https://www.npmjs.com/package/reactive-bulma?activeTab=versions
[badge-netlify-status]: https://api.netlify.com/api/v1/badges/3101f2b5-0e28-4734-b749-ebb0e3e413c6/deploy-status
[link-netlify-status]: https://app.netlify.com/sites/reactivebulma/deploys
[badge-code-coverage]: https://img.shields.io/codecov/c/github/nicolasomar/reactive-bulma?label=coverage&labelColor=535353&logo=codecov&style=flat
[link-code-coverage]: https://app.codecov.io/gh/NicolasOmar/reactive-bulma
[badge-soundcloud-quality]: https://sonarcloud.io/api/project_badges/measure?project=NicolasOmar_reactive-bulma&metric=alert_status
[badge-soundcloud-maintanibility]: https://sonarcloud.io/api/project_badges/measure?project=NicolasOmar_reactive-bulma&metric=sqale_rating
[badge-soundcloud-security]: https://sonarcloud.io/api/project_badges/measure?project=NicolasOmar_reactive-bulma&metric=security_rating
[badge-soundcloud-tech-debt]: https://sonarcloud.io/api/project_badges/measure?project=NicolasOmar_reactive-bulma&metric=sqale_index
[link-soundcloud-status]: https://sonarcloud.io/summary/new_code?id=NicolasOmar_reactive-bulma
[badge-snyk-status]: https://snyk.io/test/github/nicolasomar/reactive-bulma/badge.svg
[link-snyk-status]: https://snyk.io/test/github/nicolasomar/reactive-bulma
[badge-github-repo-stars]: https://img.shields.io/github/stars/nicolasomar/reactive-bulma?label=stars&logo=github&labelColor=535353&style=flat
[badge-github-commits]: https://img.shields.io/github/commit-activity/m/nicolasomar/reactive-bulma?logo=github
[badge-github-last-commit]: https://img.shields.io/github/last-commit/nicolasomar/reactive-bulma?logo=github
[link-github-stars]: https://github.com/NicolasOmar/reactive-bulma/activity
[link-github-commit-activity]: https://github.com/NicolasOmar/reactive-bulma/activity
[link-github-commit-history]: https://github.com/NicolasOmar/reactive-bulma/commits/main
[badge-semantic-commits]: https://img.shields.io/badge/using-conventional%20commits-e10079?logo=conventional-commits
[link-semantic-commits]: https://github.com/semantic-release/semantic-release
[badge-code-of-conduct]: https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg
[link-code-of-conduct]: code_of_conduct.md

## Dependencies

[![react dependency][badge-dependency-react]][link-package-dependencies]
[![bulma dependency][badge-dependency-bulma]][link-package-dependencies]
[![material design dependency][badge-dependency-material-design]][link-package-dependencies]
[![typescript dependency][badge-dependency-typescript]][link-package-dependencies]
[![rollup dependency][badge-dependency-rollup]][link-package-dependencies]
[![postcss dependency][badge-dependency-postcss]][link-package-dependencies]
[![storybook dependency][badge-dependency-storybook]][link-package-dependencies]
[![semantic release dependency][badge-dependency-semantic-release]][link-package-dependencies]
[![babel dependency][badge-dependency-babel]][link-package-dependencies]
[![jest dependency][badge-dependency-jest]][link-package-dependencies]
[![react testing library dependency][badge-dependency-react-testing]][link-package-dependencies]
[![lint-staged dependency][badge-dependency-lint-staged]][link-package-dependencies]
[![prettier dependency][badge-dependency-prettier]][link-package-dependencies]
[![eslint dependency][badge-dependency-eslint]][link-package-dependencies]
[![husky dependency][badge-dependency-husky]][link-package-dependencies]
[![hygen dependency][badge-dependency-hygen]][link-package-dependencies]

[badge-dependency-react]: https://img.shields.io/github/package-json/dependency-version/nicolasomar/reactive-bulma/dev/react/main?logo=react
[badge-dependency-bulma]: https://img.shields.io/github/package-json/dependency-version/nicolasomar/reactive-bulma/dev/bulma/main?logo=bulma
[badge-dependency-material-design]: https://img.shields.io/github/package-json/dependency-version/nicolasomar/reactive-bulma/dev/@mdi/font/main?logo=materialdesignicons
[badge-dependency-typescript]: https://img.shields.io/github/package-json/dependency-version/nicolasomar/reactive-bulma/dev/typescript/main?logo=typescript
[badge-dependency-postcss]: https://img.shields.io/github/package-json/dependency-version/nicolasomar/reactive-bulma/dev/postcss/main?logo=postcss
[badge-dependency-rollup]: https://img.shields.io/github/package-json/dependency-version/nicolasomar/reactive-bulma/dev/rollup/main?logo=rollup.js
[badge-dependency-storybook]: https://img.shields.io/github/package-json/dependency-version/nicolasomar/reactive-bulma/dev/storybook/main?logo=storybook
[badge-dependency-semantic-release]: https://img.shields.io/github/package-json/dependency-version/nicolasomar/reactive-bulma/dev/semantic-release/main?logo=semantic-release
[badge-dependency-babel]: https://img.shields.io/github/package-json/dependency-version/nicolasomar/reactive-bulma/dev/@babel/core/main?logo=babel
[badge-dependency-jest]: https://img.shields.io/github/package-json/dependency-version/nicolasomar/reactive-bulma/dev/jest/main?logo=jest
[badge-dependency-react-testing]: https://img.shields.io/github/package-json/dependency-version/nicolasomar/reactive-bulma/dev/@testing-library/react/main?logo=testing-library
[badge-dependency-lint-staged]: https://img.shields.io/github/package-json/dependency-version/nicolasomar/reactive-bulma/dev/lint-staged/main?logo=lint-staged
[badge-dependency-prettier]: https://img.shields.io/github/package-json/dependency-version/nicolasomar/reactive-bulma/dev/prettier/main?logo=prettier
[badge-dependency-eslint]: https://img.shields.io/github/package-json/dependency-version/nicolasomar/reactive-bulma/dev/eslint/main?logo=eslint
[badge-dependency-husky]: https://img.shields.io/github/package-json/dependency-version/nicolasomar/reactive-bulma/dev/husky/main?logo=husky
[badge-dependency-hygen]: https://img.shields.io/github/package-json/dependency-version/nicolasomar/reactive-bulma/dev/hygen/main?logo=hygen
[link-package-dependencies]: https://github.com/NicolasOmar/reactive-bulma/blob/main/package.json

## Quick start

Several quick start options are available:

- Clone the repo: `git clone https://github.com/NicolasOmar/reactive-bulma.git`.
- Install with [npm](https://www.npmjs.com/package/reactive-bulma): `npm install reactive-bulma@latest`
  - Before cloning this repo, I recommend installing [Node](https://nodejs.org/en/download/) `>=20.10.0` to install packages.

## Folder structure

In case you have cloned the repo, it will show you the following folders:
- `_templates:` Dedicated to [Hygen](https://www.hygen.io/) configuration and implementation files. Dedicated to creating new components from customizable templates.
- `.github:` [Github Actions](https://github.com/features/actions/) files used to run post-merge. commits like unit test coverage collection.
- `.husky:` Dedicated to [Husky](https://typicode.github.io/husky/) configuration files.
- `.storybook:` Dedicated to [Storybook](https://storybook.js.org/) configuration files.
- `src:`
  - `components:` Location of all used components, using [Atomic Design hierarchy structure](https://atomicdesign.bradfrost.com/chapter-2/)
    - `atoms` (from `v1.0.0`).
    - `molecules` (from `v2.0.0`).
    - `organisms` (from `v3.0.0`).
  - `design`: Location of common design tokens (coded on `.mdx` files) displayed above components sections in the storybook's instance.
  - `functions`: Dedicated to parsers and helper functions for repetitive logic.
  - `interfaces`: Dedicated to components and functions typing interfaces.
  - `types`: Dedicated to Bulma's style typesetting (part of the component's properties).

## Documentation

Reactive bulma's documentation, included in this repo in the root directory, is built with [Storybook](https://storybook.js.org/) and publicly hosted on `Netlify` at <https://reactivebulma.netlify.app/>. The docs may also be run locally.

### Running documentation locally
- Go to the `reactive-bulma` folder (where you cloned the repo before).
- Open a console and run `npm install` to install the Node.js dependencies, including Storybook (the site builder).
- Run `npm start`.
- Wait until a new tab opens with url <http://localhost:6006/> in your browser. 
  - If you want to initiate it in the background, you can run `npm run start:cli.`

Learn more about `Storybook` by reading its [documentation](https://storybook.js.org/docs/react/get-started/install).

## Usage

```jsx
import React from 'react'
import { Button } from 'reactive-bulma'

const App = () => (
  <Button text="This is a test" />
);
```
To see all component variants and code snippets go to the [Documentation](#documentation) section.

If you want to create a custom component for your forked Reactive Bulma version, the easiest way is by running the creation script I made, which [instructions are here](#how-to-create-a-template-component).

### How to create a template component

After some time, I understood that creating component files is a repetitive and time-consuming task, so I made issue [#180](https://github.com/NicolasOmar/reactive-bulma/issues/180) to implement a library called [Hygen](https://www.hygen.io), whose function is to provide a way to generate templates for generic files that can consume time at the long term. You can run the script by the following steps:

- Open a console and run `npm run create` in your console.
- An will assistant will appear asking about how your component will be named. You can answer with text separated with spaces (` `), underscores  (`_`), or hyphens (`-`)
- Then, the assistant will ask in which folder you want to create it (based on its type following [Atomic Design hierarchy structure](https://atomicdesign.bradfrost.com/chapter-2/))
- Finally, the script should create all base files to reduce time and focus on custom implementation.

Learn more about `Hygen` by reading its [documentation](https://www.hygen.io/docs/quick-start).

### How to update all dependencies

In case you want to make your fork, I recommend you to update at least weekly using a custom command `npm run update`, which will run the following commands in order:
- `update:deps`: Using a [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) script, you will be able to choose which dependencies want to update to the latest version
- `update:doctor`: Runs build and test checks to ensure your update will not break any current build.
- `update:storybook`: Updates storybook to the latest version (following its recommended command) followed for a build check (similar to update:doctor, but for Storybook only)

## Versioning

After investigating [semantic-release documentation](https://semantic-release.gitbook.io/semantic-release/) (refer to [#3](https://github.com/NicolasOmar/reactive-bulma/issues/3)) and finishing the last version according to the original roadmap, I decided to give the following meaning to project's versions after `v4.0.0`:
- Major versions (`5.0.0`, `6.0.0` and beyond) will refer to milestones achievement and significant changes on existing components that will need extra attention before the update.
- Minor versions (`4.1.0`, `4.2.0`, and so on) will refer to new components or modifications of existing ones.
- Patch versions (`4.0.1`, `4.0.2`, and so on) will refer to bug fixes or weekly dependencies updates.

To check the current project's status, go to the [Roadmap](#roadmap) section.

### Branching

Given the mentioned release logic, `main` is the only static branch, and each developed feature or fix will have a unique branch with its PR and a merge commit following [semantic versioning](https://semver.org/) and [semantic commits](https://github.com/semantic-release/semantic-release#commit-message-format) specifications.

## Roadmap

After finishing the last story related to `v4.0.0`, ReactiveBulma's current work is now focused on updating its dependencies in a weekly manner, as well as checking every issue or discussion raised by visitors who are interested in improving the project by proposing new ideas in shape of tickets or issues with its related PR.

In case you want actual short-term status, go to the [project board](https://github.com/users/NicolasOmar/projects/3) (powered by `GitHub Projects`).

<details>
<summary>Here is the status table I used to keep track of the worked milestones/versions.</summary>

| Version | Progress | Open issues | Closed issues
| :---: | :---: | :---: | :---: |
| `v1.0.0` | ![v1.0.0, progress][badge-progress-100] | ![v1.0.0, open][badge-issues-open-100] | ![v1.0.0, closed][badge-issues-closed-100] |
| `v2.0.0` | ![v2.0.0, progress][badge-progress-200] | ![v2.0.0, open][badge-issues-open-200] | ![v2.0.0, closed][badge-issues-closed-200] |
| `v3.0.0` | ![v3.0.0, progress][badge-progress-300] | ![v3.0.0, open][badge-issues-open-300] | ![v3.0.0, closed][badge-issues-closed-300] |
| `v4.0.0` | ![v4.0.0, progress][badge-progress-400] | ![v4.0.0, open][badge-issues-open-400] | ![v4.0.0, closed][badge-issues-closed-400] |

In case you want the detailed list of current and future features, go to the [roadmap document](https://docs.google.com/document/d/1kWX-dDTD-cQUeB_Vbu0K6xRvtHaSA38h76yQnhiCe9U).
</details>

[badge-progress-100]: https://img.shields.io/github/milestones/progress-percent/nicolasomar/reactive-bulma/1?label=%20&style=flat&color=informational
[badge-issues-open-100]: https://img.shields.io/github/milestones/issues-open/nicolasomar/reactive-bulma/1?label=%20&style=flat&color=orange
[badge-issues-closed-100]: https://img.shields.io/github/milestones/issues-closed/nicolasomar/reactive-bulma/1?label=%20&style=flat&color=success
[badge-progress-200]: https://img.shields.io/github/milestones/progress-percent/nicolasomar/reactive-bulma/2?label=%20&style=flat&color=informational
[badge-issues-open-200]: https://img.shields.io/github/milestones/issues-open/nicolasomar/reactive-bulma/2?label=%20&style=flat&color=orange
[badge-issues-closed-200]: https://img.shields.io/github/milestones/issues-closed/nicolasomar/reactive-bulma/2?label=%20&style=flat&color=success
[badge-progress-300]: https://img.shields.io/github/milestones/progress-percent/nicolasomar/reactive-bulma/3?label=%20&style=flat&color=informational
[badge-issues-open-300]: https://img.shields.io/github/milestones/issues-open/nicolasomar/reactive-bulma/3?label=%20&style=flat&color=orange
[badge-issues-closed-300]: https://img.shields.io/github/milestones/issues-closed/nicolasomar/reactive-bulma/3?label=%20&style=flat&color=success
[badge-progress-400]: https://img.shields.io/github/milestones/progress-percent/nicolasomar/reactive-bulma/4?label=%20&style=flat&color=informational
[badge-issues-open-400]: https://img.shields.io/github/milestones/issues-open/nicolasomar/reactive-bulma/4?label=%20&style=flat&color=orange
[badge-issues-closed-400]: https://img.shields.io/github/milestones/issues-closed/nicolasomar/reactive-bulma/4?label=%20&style=flat&color=success

## Changelog

The [changelog](https://github.com/NicolasOmar/reactive-bulma/blob/main/CHANGELOG.md) (powered by `semantic-release`) is regularly updated to reflect what's changed in each new release.

## Contributing

If you're interested in contributing to Reactive Bulma, please read [our contributing docs](./CONTRIBUTING.md) before submitting a pull request.


## Credit

Bulma was beautifully crafted by [@jgthms](https://github.com/jgthms)

## License

Code released under the [MIT License](https://github.com/nicolasomar/reactive-bulma/blob/main/LICENSE).