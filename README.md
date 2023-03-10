<p align="center">
  <a href="https://reactivebulma.netlify.app">
    <img width="75" src="https://cdn.svgporn.com/logos/react.svg">
    <img width="50" src="https://cdn.svgporn.com/logos/bulma.svg">
  </a>
</p>

<h1 align="center">Reactive Bulma</h1>

Component library based on React, Bulma, Typescript and Rollup

## Table of contents

- [Status](#status)
- [Quick start](#quick-start)
- [Folder structure](#folder-structure)
- [Documentation](#documentation)
- [Usage](#usage)
- [Versioning](#versioning)
- [Roadmap](#roadmap)
- [Changelog](#changelog)
- [Credit](#credit)
- [License](#license)

## Status

 ![reactive-bulma, Npm Version][badge-npm-version]
 ![reactive-bulma, Npm Bundle Size][badge-npm-size]
 ![reactive-bulma, Npm Downloads][badge-npm-downloads]
 [![reactive-bulma, Netlify Status][badge-netlify-status]][link-netlify-status]
 ![reactive-bulma, Code Coverage][badge-code-coverage]
 [![reactive-bulma, Quality Gate Status][badge-soundcloud-quality]][link-soundcloud-status]
 [![reactive-bulma, Maintainability Rating][badge-soundcloud-maintanibility]][link-soundcloud-status]
 [![reactive-bulma, Security Rating][badge-soundcloud-security]][link-soundcloud-status]
 [![reactive-bulma, Technical Debt][badge-soundcloud-tech-debt]][link-soundcloud-status]
 ![reactive-bulma, GitHub Repo stars][badge-github-repo-stars]
 ![reactive-bulma, GitHub commit activity][badge-github-commits]
 ![reactive-bulma, GitHub last commit][badge-github-last-commit]
 [![reactive-bulma, Semantic Commits][badge-semantic-commits]][link-semantic-commits]

[badge-npm-version]: https://img.shields.io/github/package-json/v/nicolasomar/reactive-bulma?label=npm%20version&logo=npm&labelColor=535353&color=success&style=flat
[badge-npm-size]: https://img.shields.io/bundlephobia/min/reactive-bulma?label=bundle%20size&labelColor=535353&logo=npm&style=flat
[badge-npm-downloads]: https://img.shields.io/npm/dm/reactive-bulma?label=downloads&labelColor=535353&style=flat&logo=npm
[badge-netlify-status]: https://api.netlify.com/api/v1/badges/3101f2b5-0e28-4734-b749-ebb0e3e413c6/deploy-status
[link-netlify-status]: https://app.netlify.com/sites/reactivebulma/deploys
[badge-code-coverage]: https://img.shields.io/codecov/c/github/nicolasomar/reactive-bulma?label=coverage&labelColor=535353&logo=codecov&style=flat
[badge-soundcloud-quality]: https://sonarcloud.io/api/project_badges/measure?project=NicolasOmar_reactive-bulma&metric=alert_status
[badge-soundcloud-maintanibility]: https://sonarcloud.io/api/project_badges/measure?project=NicolasOmar_reactive-bulma&metric=sqale_rating
[badge-soundcloud-security]: https://sonarcloud.io/api/project_badges/measure?project=NicolasOmar_reactive-bulma&metric=security_rating
[badge-soundcloud-tech-debt]: https://sonarcloud.io/api/project_badges/measure?project=NicolasOmar_reactive-bulma&metric=sqale_index
[link-soundcloud-status]: https://sonarcloud.io/summary/new_code?id=NicolasOmar_reactive-bulma
[badge-github-repo-stars]: https://img.shields.io/github/stars/nicolasomar/reactive-bulma?label=stars&logo=github&labelColor=535353&style=flat
[badge-github-commits]: https://img.shields.io/github/commit-activity/m/nicolasomar/reactive-bulma?logo=github
[badge-github-last-commit]: https://img.shields.io/github/last-commit/nicolasomar/reactive-bulma?logo=github
[badge-semantic-commits]: https://img.shields.io/badge/using-conventional%20commits-e10079?logo=conventional-commits
[link-semantic-commits]: https://github.com/semantic-release/semantic-release

## Quick start

Several quick start options are available:

- Clone the repo: `git clone https://github.com/NicolasOmar/reactive-bulma.git`
- Install with [npm](https://www.npmjs.com/package/reactive-bulma): `npm install reactive-bulma@latest`
  - Before cloning this repo, I recommend installing [Node](https://nodejs.org/en/download/) `>=18` to install packages

## Folder structure

In case you have cloned the repo, it will show you the following folders:
- `.github:` [Github Actions](https://github.com/features/actions/) files used to run post-merge.commits like unit test coverage collection.
- `.husky:` Dedicated to [Husky](https://typicode.github.io/husky/) configuration files.
- `.storybook:` Dedicated to [Storybook](https://storybook.js.org/) configuration files.
- `src:`
  - `components:` Location of all used components, using [Atomic Design hierarchy structure](https://atomicdesign.bradfrost.com/chapter-2/) (`atoms` -> `molecules` -> `organisms`).

## Documentation

Reactive bulma's documentation, included in this repo in the root directory, is built with [Storybook](https://storybook.js.org/) and publicly hosted on `Netlify` at <https://reactivebulma.netlify.app/>. The docs may also be run locally.

### Running documentation locally
- Go to `reactive-bulma` folder (where you cloned the repo before).
- Run `npm install` to install the Node.js dependencies, including Storybook (the site builder).
- Run `npm start`.
- Wait until a new tab opens with url <http://localhost:6006/> in your browser.

Learn more about using `Storybook` by reading its [documentation](https://storybook.js.org/docs/react/get-started/install).

## Usage
```jsx
import React from 'react'
import { Button } from 'reactive-bulma'

const App = () => (
  <Button text="This is a test" />
);
```
To see all component's variants and its code snippets, go to [Documentation](#documentation) section

## Versioning

After investigating [semantic-release documentation](https://semantic-release.gitbook.io/semantic-release/) (reffer to [#3](https://github.com/NicolasOmar/reactive-bulma/issues/3)) and having a problematic implementation, I decided to change version meaning for this project with the following:
- Major versions (`1.0.0`, `2.0.0` and beyond) will reffer to milestones/version achievement.
- Minor versions (`1.1.0`, `1.2.0` and so on) will reffer to branch/story completition.
- Patch versions (`1.0.1`, `1.0.2` and so on) will reffer to bugfixes only.

In case you are interested in check current project's status, you can go to [Roadmap](#roadmap) section.

### Branching

Giving the mentioned release logic, `main` is the only static branch, and each developed feature or fix will have an unique branch with its PR and a merge commit following [semantic versioning](https://semver.org/) and [semantic commits](https://github.com/semantic-release/semantic-release#commit-message-format) specifications.

## Roadmap

Having in mind the [versioning section](#versioning), repo's status in a glance can be observed in this table.

| Version | Progress | Open issues | Closed issues
| :---: | :---: | :---: | :---: |
| `v1.0.0` | ![reactive-bulma, v1.0.0, progress][badge-progress-100] | ![reactive-bulma, v1.0.0, open issues][badge-issues-open-100] | ![reactive-bulma, v1.0.0, closed issues][badge-issues-closed-100] |
| `v2.0.0` | ![reactive-bulma, v2.0.0, progress][badge-progress-200] | ![reactive-bulma, v2.0.0, open issues][badge-issues-open-200] | ![reactive-bulma, v2.0.0, closed issues][badge-issues-closed-200] |
| `v3.0.0` | - | - | - |
| `v4.0.0` | - | - | - |

[badge-progress-100]: https://img.shields.io/github/milestones/progress-percent/nicolasomar/reactive-bulma/1?label=%20&style=flat
[badge-issues-open-100]: https://img.shields.io/github/milestones/issues-closed/nicolasomar/reactive-bulma/1?label=%20&style=flat
[badge-issues-closed-100]: https://img.shields.io/github/milestones/issues-open/nicolasomar/reactive-bulma/1?label=%20&style=flat
[badge-progress-200]: https://img.shields.io/github/milestones/progress-percent/nicolasomar/reactive-bulma/2?label=%20&style=flat
[badge-issues-open-200]: https://img.shields.io/github/milestones/issues-closed/nicolasomar/reactive-bulma/2?label=%20&style=flat
[badge-issues-closed-200]: https://img.shields.io/github/milestones/issues-open/nicolasomar/reactive-bulma/2?label=%20&style=flat
[badge-progress-300]: https://img.shields.io/github/milestones/progress-percent/nicolasomar/reactive-bulma/3?label=%20&style=flat
[badge-issues-open-300]: https://img.shields.io/github/milestones/issues-closed/nicolasomar/reactive-bulma/3?label=%20&style=flat
[badge-issues-closed-300]: https://img.shields.io/github/milestones/issues-open/nicolasomar/reactive-bulma/3?label=%20&style=flat
[badge-progress-400]: https://img.shields.io/github/milestones/progress-percent/nicolasomar/reactive-bulma/4?label=%20&style=flat
[badge-issues-open-400]: https://img.shields.io/github/milestones/issues-closed/nicolasomar/reactive-bulma/4?label=%20&style=flat
[badge-issues-closed-400]: https://img.shields.io/github/milestones/issues-open/nicolasomar/reactive-bulma/4?label=%20&style=flat

In case you want the short-term status, go to the [project board](https://github.com/users/NicolasOmar/projects/3) (powered by `GitHub Projects`).

In case you want the detailed list of current and future features, go to the [roadmap document](https://docs.google.com/document/d/1kWX-dDTD-cQUeB_Vbu0K6xRvtHaSA38h76yQnhiCe9U).

## Changelog

The [changelog](https://github.com/NicolasOmar/reactive-bulma/blob/main/CHANGELOG.md) (powered by `semantic-release`) is regularly updated to reflect what's changed in each new release.

## Credit

Bulma was beautifully crafted by [@jgthms](https://github.com/jgthms)

## License

Code released under the [MIT License](https://github.com/nicolasomar/reactive-bulma/blob/main/LICENSE).