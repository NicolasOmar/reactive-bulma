# Copilot Instructions for Reactive Bulma

Welcome to the Reactive Bulma codebase! This document provides essential guidelines for AI coding agents to be productive in this project. Reactive Bulma is a React-based component library leveraging Bulma, TypeScript, and Vite. Below are the key aspects of the project structure, workflows, and conventions.

## Project Overview
- **Purpose**: A component library built to practice TypeScript and explore professional-level library maintenance.
- **Architecture**: The project follows the Atomic Design methodology:
  - `atoms/`: Basic building blocks (e.g., buttons, inputs).
  - `molecules/`: Combinations of atoms (e.g., forms, cards).
  - `organisms/`: Complex UI sections (e.g., navigation bars).
- **Key Technologies**: React, Bulma, TypeScript, Vite, Storybook, Jest.

## Developer Workflows
### Testing
- Start the application: `npm start`
- Build the project in production mode: `npm run build`
- Run unit tests: `npm test`
- Check code coverage: `npm run test:ci`
- Lint the project: `npm run lint`
- Execute code styles: `npm run prettier`
- Check code's general health: `npm run update:doctor`

### Storybook
- Start Storybook locally: `npm run storybook`
- Access at: `http://localhost:6006`

## Project-Specific Conventions
- **Atomic Design**: Organize components into `atoms`, `molecules`, and `organisms`.
- **TypeScript**: Use strict typing for all components and functions.
- **Constants**: Shared values are stored in `src/constants/`.
- **Design Tokens**: Defined in `src/design/` and integrated with Storybook.
- **Testing**: Jest is used for unit tests, with utilities from React Testing Library.

## Integration Points
- **Storybook**: Centralized documentation and component showcase.
- **GitHub Actions**: Automated workflows for testing and coverage.
- **SonarCloud**: Code quality and security analysis.
- **Netlify**: Deployment of Storybook documentation.
- **Semantic-release**: Automated release management.

## Key Files and Directories
- `src/components/`: Component implementations.
- `src/constants/`: Shared constants.
- `src/functions/`: Helper functions and parsers.
- `src/interfaces/`: TypeScript interfaces for components.
- `src/types/`: Bulma-specific style types.
- `.github/`: GitHub Actions workflows.
- `.storybook/`: Storybook configuration.
- `_templates/`: Hygen templates for code generation.

## Examples
### Component Usage
```jsx
import React from 'react';
import { Button } from 'reactive-bulma';

const App = () => (
  <Button color="primary">Click Me</Button>
);

export default App;
```

### Adding a New Component
1. Generate the component:
   ```bash
   hygen component new --name MyComponent
   ```
2. Implement the component in `src/components/atoms/`, `molecules/`, or `organisms/`.
3. Add stories in `src/components/<category>/<ComponentName>.stories.tsx`.
4. Write tests in `src/functions/tests/`.

---

For further details, refer to the [README.md](../README.md) or the [Storybook documentation](https://reactivebulma.netlify.app/).