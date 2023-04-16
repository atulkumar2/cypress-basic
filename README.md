# cypress with mochawesome

Basic nodejs code for Cypress with some failing tests to highlight mochawesome reporting

Make sure to have node installed using nvm from https://github.com/nvm-sh/nvm. CHeck node version from packages list to ensure that right node version is installed.

Clone the repo and do as below to install it

- npm install

Once installation is done, Run one of the below to verify

- node runtests-mochawesome.mjs
- npx cypress open

For more ways to run, see references

Packages

- Node.js v19.8.1 (2023-04-06)
- Cypress: 12.9.0
- cypress-mochawesome-reporter: 3.3.0
- mocha: 10.2.0
- mochawesome: 7.1.3
- mochawesome-merge: 4.3.0

References

- https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test
- https://www.npmjs.com/package/mochawesome-merge
- https://github.com/Antontelesh/mochawesome-merge
- https://www.npmjs.com/package/cypress-mochawesome-reporter
- https://docs.cypress.io/guides/tooling/reporters
