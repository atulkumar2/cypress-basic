# Cypress basic with allure reporting

Basic nodejs code for Cypress with allure reports (No useful tests, Just structure)

Make sure to have node installed using nvm from https://github.com/nvm-sh/nvm 

Clone the repo and do as below to install it

- npm install

Once installation is done, Run one of the below to verify

- npx cypress open --env allure=true
- npx cypress run --env allure=true

This will create allure-results folder at top level. Those will be JSON files. Those need to be converted to HTML.

To see allure reports, install allure-commandline <https://www.npmjs.com/package/allure-commandline> by below
- npm install -g allure-commandline

To see reports
- allure generate
- allure serve

A link will be generated and we need to open that.

To directly open the link, use below command instead of serve
- allure open

Packages (2023-04-06)

- Node.js v19.8.1 
- cypress 12.9.0
- @shelex/cypress-allure-plugin 2.38.3

References
- https://github.com/stars/atulkumar2/lists/cypress
- https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test 
- https://www.npmjs.com/package/@shelex/cypress-allure-plugin
- https://github.com/Shelex/cypress-allure-plugin-example
- https://qameta.io/allure-report/