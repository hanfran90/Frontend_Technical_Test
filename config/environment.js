'use strict';
require('dotenv').config();

module.exports = function (environment) {
  const ENV = {
    modulePrefix: 'ember-quickstart',
    environment,
    rootURL: '/',
    locationType: 'history',
    EmberENV: {
      EXTEND_PROTOTYPES: false,
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  ENV.firebase = {
    apiKey: process.env.GOOGLE_API_KEY,
    authDomain: 'film-tracker-fd542.firebaseapp.com',
    projectId: 'film-tracker-fd542',
    storageBucket: 'film-tracker-fd542.firebasestorage.app',
    messagingSenderId: '450097505285',
    appId: '1:450097505285:web:b7f745ad3cf7ad3508a86c',
    measurementId: 'G-3RYYEG2XWP',
    apiKey: 'AIzaSyDSdqj1k7yBWTiHxCDDWeO2th_Y0CX7DDQ',
    authDomain: 'film-tracker-fd542.firebaseapp.com',
    projectId: 'film-tracker-fd542',
    storageBucket: 'film-tracker-fd542.firebasestorage.app',
    messagingSenderId: '450097505285',
    appId: '1:450097505285:web:b7f745ad3cf7ad3508a86c',
    measurementId: 'G-3RYYEG2XWP',
  };

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
