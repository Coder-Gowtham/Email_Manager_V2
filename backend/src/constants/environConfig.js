// environConfig.js
require('dotenv').config()
const environment = process.env.NODE_ENV || 'dev';

const environConfig = {
  dev: {
    PORT: process.env.PORT ,
    BACKEND_URL: 'http://localhost:5000/',
    ELASTICSEARCH_URL: 'http://es01:9200',
    ELASTICSEARCH_USERNAME: 'elastic',
    ELASTICSEARCH_PASSWORD: 'elastic@123',
    CORS_ORIGIN: 'http://localhost:3000',
    REDIRECT_URI: 'http://localhost:5000/manager/users/auth/callback'
  },
  uat: {
    PORT: process.env.UAT_PORT,
    BACKEND_URL: process.env.UAT_BACKEND_URL,
    ELASTICSEARCH_URL: process.env.UAT_ELASTICSEARCH_URL,
    ELASTICSEARCH_USERNAME: process.env.UAT_ELASTICSEARCH_USERNAME || 'elastic',
    ELASTICSEARCH_PASSWORD: process.env.UAT_ELASTICSEARCH_PASSWORD || 'elastic@123',
    CORS_ORIGIN: process.env.UAT_CORS_ORIGIN, // need to set
  }
};

const authConfig = {
  CLIENT_ID: process.env.CLIENT_ID ,
  CLIENT_SECRET: process.env.CLIENT_SECRET ,
  TOKEN_HOST: 'https://login.microsoftonline.com' ,
  TOKEN_PATH: '/common/oauth2/v2.0/authorize',
  AUTHORIZATION_PATH: process.env.AUTHORIZATION_PATH
};

// Export the environment and the configuration
module.exports = {
  environment,
  config: environConfig[environment],
  authConfig
};
