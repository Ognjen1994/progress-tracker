# Progress Tracker

Welcome to Progress Tracker! This is a single-page application (SPA) built with React and TypeScript that allows users to track their progress in completing tasks and displays it in a user-friendly widget.

## Installation

To get started with Progress Tracker App, follow the instructions below:

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open the app in your browser:

   ```
   http://localhost:3000
   ```

## Usage

To use Progress Tracker App, follow these steps:

1. Access the app through the provided URL or http://localhost:3000 if running locally.

2. The app will display an accordion-style widget with different task groups. Each group represents a specific area.

3. Click on a group to expand it and view the tasks within that group.

4. Each task is represented by a checkbox and a description.

5. To mark a task as done, click on the corresponding checkbox. The progress bar will dynamically update to reflect the completed tasks.

6. The progress value displayed on the progress bar is calculated based on the normalized sum of the checked task's values. Each task has a value associated with it.

7. If a task group has all the tasks checked, the group will be marked as green to indicate completion.

## Scripts

In the project directory, you can also run the following scripts:

```bash
npm run build
```

This command triggers the build process.

```bash
npm run test:unit
```

Launches the test runner in the watch mode.

```bash
npm run test:unit:coverage
```

This command is used to run unit tests with coverage reports using Jest

```bash
npm run lint
```

Runs the linter on the src directory.

```bash
npm run format
```

Runs the Prettier code formatter on the src directory.

## Technologies Used

Progress Tracker is built using the following technologies:

<ul>
   <li>React with TypeScript: JavaScript library for building user interfaces with added static typing using TypeScript.</li>
   <li>HTML: Markup language for structuring web pages and components.</li>
   <li>SASS with BEM notation: CSS preprocessor for writing modular and maintainable styles using the BEM (Block-Element-Modifier) notation.</li>
   <li>Vite: Module bundler and build tool for the application.</li>
   <li>Jest with React Testing Library: Testing framework for unit testing components and simulating user interactions.</li>
   <li>ESLint and Prettier: Linter and code formatter for identifying errors, enforcing coding style guidelines, and ensuring consistent and readable code styling.</li>
</ul>

**Note: Not all components have unit tests implemented. This is primarily for demonstration purposes and to show how unit tests can be written for React components.**

**To see the app in action, visit the following [URL](https://ognjen1994.github.io/progress-tracker/).**
