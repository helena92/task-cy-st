import { defineConfig } from 'cypress'

export default defineConfig({
  // https://github.com/adamgruber/mochawesome
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    reportFilename: '[name].html',
    overwrite: true,
    html: true,
    json: false,
  },
  e2e: {
    baseUrl: 'http://stackadapt-interview.us-east-1.elasticbeanstalk.com',
  },
  env: {
    testUserEmail: 'tsimbak12@gmail.com',
    testUserPassword: '1234567',
  },
})