## How to run Cypress tests

Make sure you run `npm i` to install project dependencies.

You can launch tests in Cypress Tets Runner with `npm run cy:open` or headlessly with `npm run cy:run`.

## Linting

Eslint rules extend `eslint:recommended`, `cypress/recommended` and `plugin:prettier/recommended` plugins and are configured in `cypress/.eslintrc.json`.

You can run `npm run lint` to auto-fix found issues.