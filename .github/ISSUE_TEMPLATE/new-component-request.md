---
name: New component request
about: Suggest a new component for this project
title: Create component COMPONENT_NAME
labels: feature
assignees: NicolasOmar

---

### Objective 
Create a new Bulma component `COMPONENT_NAME` from scratch.

---

### Description 
Based on the project's roadmap, this component must meet the following specifications.
- A code file based on React Hooks and Typescript (`index.tsx`) for the component's code.
- A test file (`index.test.tsx`) for its related unit tests.
- A storybook file (`index.stories.tsx`) to be deployed on a public Storybook site (and be tested by anyone).

---

### Tasks 
- Research 
  - [ ] Study its related documentation and implementation on [idea's site](INSERT_DOCUMENTATION_SITE_EXAMPLE).
  - [ ] Document possible properties and behaviours.
- Development 
  - [ ] Create its folder and an `index.tsx` file for the component's code.
  - [ ] Create and/or update the needed interfaces, types, tuples, and enums for the component.
  - [ ] Create an `index.test.ts` file for its unit tests and create the needed changes to reach at least `95%` of code coverage.
  - [ ] Create an `index.stories.tsx` file for Storybook stories and add at least two stories for different scenarios.

---

### Technical notes 
Describe any helpful information for this new component, like documentation, examples from other sources, or articles.