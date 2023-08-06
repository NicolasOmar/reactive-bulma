# Contributing to Reactive Bulma
First off, thank you for considering contributing to Reactive Bulma! Please take a moment to review this document in order to make the contribution process easy and effective for everyone involved.

Read our [Code of Conduct](/CODE_OF_CONDUCT) to keep our community approachable and respectable.

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue or assessing patches and features.

## Using the issue tracker
First things first: **Do NOT report security vulnerabilities in public issues!** Please disclose responsibly by letting [project's team](mailto:nicolas.passerino@gmail.com?subject=Security) know upfront. We will assess the issue as soon as possible on a best-effort basis and will give you an estimate for when we have a fix and release available for an eventual public disclosure.

The issue tracker is the preferred channel for [bug reports](#bug-reports), [features requests](#features-request) and [submitting pull requests](#pull-requests), but please respect the following restrictions:

Please **do not** use the issue tracker for personal support requests. Use our [GitHub Discussion channel](https://github.com/NicolasOmar/reactive-bulma/discussions).

Please **do not** derail or troll issues. Keep the discussion on topic and respect the opinions of others.

## Bug reports
A bug is a demonstrable problem that is caused by the code in the repository. Good bug reports are extremely helpful - thank you!

Guidelines for bug reports:

- Use the [project's issue search][bug-issues-search] — check if the issue has already been reported under `bug` tag.
- Check if the issue has been fixed — try to reproduce it using the latest master or next branch in the repository.
- Isolate the problem — ideally create a reduced test case.

A good bug report shouldn't leave others needing to chase you up for more information. Please try to be as detailed as possible in your report. What is your environment? What steps will reproduce the issue? What OS experiences the problem? What would you expect to be the outcome? All these details will help people to fix any potential bugs.

[bug-issues-search]: https://github.com/NicolasOmar/reactive-bulma/issues?q=is%3Aopen+is%3Aissue+label%3Abug

Example:

> Short and descriptive example bug report title
> 
> A summary of the issue and the browser/OS environment in which it occurs. If suitable, include the steps required to reproduce the bug.
> 
> This is the first step
> This is the second step
> Further steps, etc.
> <url> - a link to the reduced test case
> 
> Any other information you want to share that is relevant to the issue being reported. This might include the lines of code that you have identified as causing the bug, and potential solutions (and your opinions on their merits).

## Features request
Feature requests are welcome. But take a moment to find out whether your idea fits with the scope and aims of the project. It's up to you to make a strong case to convince the project's developers of the merits of this feature. Please provide as much detail and context as possible.

Have in mind that project's focus is noted on its [Roadmap](#roadmap), therefore is a good change that your request will be implemented after finishing version `v4.0.0`

## Pull requests
Good pull requests - patches, improvements, new features - are a fantastic help. They should remain focused in scope and avoid containing unrelated commits.

[Please ask first](https://github.com/NicolasOmar/reactive-bulma/discussions) before embarking on any significant pull request (e.g. implementing features, refactoring code), otherwise you risk spending a lot of time working on something that the project's developers might not want to merge into the project.

After concluding your contribution is ok to be implemented, I urge you to create an issue related to that contribution in order to make a complete follow up from the issue and code perspectives.

Adhering to the following process is the best way to get your work
included in the project:

1. [Fork the project]((https://help.github.com/articles/fork-a-repo/)), clone your fork, and configure the remotes:

   ```bash
   # Clone your fork of the repo into the current directory
   git clone https://github.com/<your-username>/reactive-bulma.git
   # Navigate to the newly cloned directory
   cd reactive-bulma
   # Assign the original repo to a remote called "upstream"
   git remote add upstream https://github.com/nicolasomar/reactive-bulma.git
   ```

2. If you cloned a while ago, get the latest changes from upstream:

   ```bash
   git checkout main
   git pull upstream main
   ```

3. Create a new topic branch (off the main project development branch) to
   contain your feature, change, or fix:

   ```bash
   git checkout -b <topic-branch-name>
   ```

4. Commit your changes in logical chunks. Please adhere to these [git commit
   message guidelines](https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)
   or your code is unlikely be merged into the main project. Use Git's
   [interactive rebase](https://help.github.com/articles/about-git-rebase/)
   feature to tidy up your commits before making them public.

5. Locally merge (or rebase) the upstream development branch into your topic branch:

   ```bash
   git pull [--rebase] upstream main
   ```

6. Push your topic branch up to your fork:

   ```bash
   git push origin <topic-branch-name>
   ```

7. [Open a Pull Request](https://help.github.com/articles/about-pull-requests/)
    with a clear title and description against the `main` branch.

**IMPORTANT**: By submitting a patch, you agree to allow the project owners to
license your work under the terms of the [MIT License](/LICENSE) (if it
includes code changes)

### CI checks and how to fix them

If any of the checks fails click on the *_Details_* link and review the logs of the build to find out why it failed.
No further permissions are required to view the build logs.

The following table gives an overview of what each check is responsible for:

| Step | Description |
| :--- | :--- |
| `Check builds` | Reviews production-grade build process for the library and its storybook instance. |
| `Check code quality` | Reviews code format and unit tests suite. The log of the failed build should explain how to fix the issues. If the CI job fails you might need to run them locally and commit the changes. |
| `Check code security` | This task should not fail in isolation. It grabs last changes from the PR and runs a security check for any new/updated dependency aswell as repo's internal code. |

### Coding style

Please follow the present coding style of the project. In order to ensure style consistency, Reactive Bulma runs several commands before each commit and push, which are:

- Before each commit:
  - `npm run lint-staged`: Checks each Typescript-related file follows linting rules and code styling.
  - `npm run test:diff`: Checks each component and typescript file has a code coverage percentage up to **90%**.
- And before each push:
  - `npm run prettier:ci`: Runs prettier to ensure it maintain code styling.
  - `npm run test:ci`: Checks all unit test runs without errors and with a code coverage percentage up to **90%**.
  - `npm run build`: Checks rollup can build library to be shipped to production in a new version.
  - `npm run build:storybook`: Checks storybook can compile a build to be shipped to production (in that new version aswell).

Finally, when you submit a pull Request, the pre-push commands are run again by our continuous integration tools, but hopefully, your code is already clean!

## Roadmap
To get a sense of where Reactive Bulma is heading, or for ideas on where you could contribute, take a look at the [roadmap](https://github.com/users/NicolasOmar/projects/3).

## License
By contributing your code to the [Reactive Bulma repository](https://github.com/NicolasOmar/reactive-bulma), you agree to license your contribution under the [MIT license](/LICENSE).