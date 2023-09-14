import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://stackadapt-interview.us-east-1.elasticbeanstalk.com',
  },
  env: {
    testUserEmail: 'tsimbak12@gmail.com',
    testUserPassword: '1234567',
  },
})