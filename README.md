## How to run Cypress tests

Make sure you run `npm i` to install project dependencies.

You can launch tests in Cypress Tets Runner with `npm run cy:open` or headlessly with `npm run cy:run`.

# Test Report

The test report is saved as an artifact for each CI pipeline by using `.github/workflows/ci.yml`.
To view the latest report, go to `https://github.com/helena92/task-cy-st/actions` and open the most recent test run.
You'll see an artifact file with detailed test results and a test summary:

<img width="112" alt="Screenshot 2023-09-14 at 5 17 13 PM" src="https://github.com/helena92/task-cy-st/assets/17526307/3d51cdbb-1e6a-4372-bc4e-0805119114b7">

## Linting

Eslint rules extend `eslint:recommended`, `cypress/recommended` and `plugin:prettier/recommended` plugins and are configured in `cypress/.eslintrc.json`.

You can run `npm run lint` to auto-fix found issues.
