# Starter with Vite, React Testing Library and Vitest

Created for the Udemy course [React Testing Library with Jest / Vitest](https://www.udemy.com/course/react-testing-library)

## How this project was created

This project was created using this command:

```sh
npm create vite@latest vite-starter -- --template react
```

and then following all of the steps below.

I also removed a few unnecessary files, and updated

- App.jsx
- this README file 😄

## Installing Vitest and React Testing Library in a Vite project

### Install dependencies

```sh
npm install -D vitest @vitest/ui eslint-plugin-vitest
npm install -D jsdom @testing-library/jest-dom @testing-library/react
```

## Add test script to package.json `test` object

```json
  "test": "vitest --watch",
```

## Add a setup file

To make [jest-dom matchers](https://github.com/testing-library/jest-dom#custom-matchers) available in all test files:

1. create new file _src/setupTests.js_
1. add these contents:

```js
import "@testing-library/jest-dom";
```

## Add Vitest plugin to ESLint

In _.eslintrc.cjs_:

1. Add this to to the `extends` array:

```js
   'plugin:vitest/recommended',
```

1. This step avoids linting errors when using the `test` and `expect` Vitest globals without importing them first.

At the top, require the Vitest plugin:

```js
const vitest = require("eslint-plugin-vitest");
```

Then Add this property / value to the top-level `module.exports` object:

```js
    globals: {
      ...vitest.environments.env.globals,
    },
```

**Note**: if you're having issues getting ESLint to work properly with VSCode, please see [this troubleshooting guide](https://dev.to/bonnie/eslint-prettier-and-vscode-troubleshooting-ljh).

## Update vite configuration for tests

Update _vite.config.js_ based on the [Vitest Testing Library example](https://github.com/vitest-dev/vitest/blob/main/examples/react-testing-lib/vite.config.ts). Add this property / value to the `defineConfig` argument:

```js
  test: {
    globals: true,
    environment: "jsdom",
    // this points to the setup file that we created earlier
    setupFiles: "./test/setup.js",
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
  },
```

## Command to run tests

```sh
npm test
```

## Reference

- [creating a Vite project](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)
- [Vitest Testing Library example](https://github.com/vitest-dev/vitest/tree/main/examples/react-testing-lib)
- [Vitest ESLint plugin](https://www.npmjs.com/package/eslint-plugin-vitest)

TDD - test driven development
Writes test before write code and then write thec ode till test passes
- write function Component without any code
- write code
- tests pass

##Jest/Vitest
- runs and executes test

## testing-library
- creates simulated DOM structure without browser
- provide utilities to interact with this DOM (find element, click, ...)

## render()

It creates simulated DOM

- import { render} from "@testing-library/react";
- render(<Component/>)

##screen

It gives access to simulated DOM
- import { screen } from "@testing-library/react";


## Debagging
Docomentation https://testing-library.com/docs/dom-testing-library/api-debugging/

- logRoles

    - import {logRoles} from '@testing-library/dom'
    - const {container} = render(<App />);
    - logRoles(container);

## Elements

Documentation can be found here https://testing-library.com/docs/queries/about/#priority

- screen.getByText(STRING) OR screen.getByText(/text/i) (regula expression)
    Using STRING has to be exactly the searching phrase

-screen.getByRole('role', {name: XXX})

### all roles are here https://www.w3.org/TR/wai-aria/#role_definitions

### All matchers can be found here https://github.com/testing-library/jest-dom

- expect(buttonElement).toHaveTextContent(/text/i)
- expect(buttonElement).toHaveClass("blue");


##Events

- import { fireEvent } from '@testing-library/react';


