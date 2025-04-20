require('dotenv').config();

const environments = {
  development: {
    port: process.env.DEV_PORT || 3000,
    mongoUri: process.env.DEV_MONGO_URI || 'mongodb://localhost:27017/nodejs-api-dev',
    logLevel: 'debug',
    corsOrigin: '*',
  },
  staging: {
    port: process.env.STAGING_PORT || 3001,
    mongoUri: process.env.STAGING_MONGO_URI || 'mongodb://localhost:27017/nodejs-api-staging',
    logLevel: 'info',
    corsOrigin: process.env.STAGING_CORS_ORIGIN || 'https://staging.example.com',
  },
  production: {
    port: process.env.PROD_PORT || 3002,
    mongoUri: process.env.PROD_MONGO_URI || 'mongodb://localhost:27017/nodejs-api-prod',
    logLevel: 'error',
    corsOrigin: process.env.PROD_CORS_ORIGIN || 'https://example.com',
  },
};

const currentEnv = process.env.NODE_ENV || 'development';

module.exports = environments[currentEnv]; 