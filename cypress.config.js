const { defineConfig } = require('cypress');
const mysql = require('mysql');
// const { downloadFile } = require('cypress-downloadfile/lib/addPlugin')

function queryDb(query, config) {
  const connection = mysql.createConnection({
    host: config.env.db.host,
    user: config.env.db.user,
    password: config.env.db.password,
    database: config.env.db.database,
  });

  connection.connect();

  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });

    connection.end();
  });
}

module.exports = defineConfig({
  watchForFileChanges: false,
  chromeWebSecurity: false,
  retries: 1,
  reporter: '../node_modules/mochawesome/src/mochawesome.js',
  reporterOptions: {
    overwrite: false,
    html: false,
    json: true,
  },
  projectId: 'pdy98r',
  video: true,
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  env: {
    db: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'cypress_test_db', // specify your database name here
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
         queryDb :(query)=>{
           return queryDb(query,config);
         }
         });
      // on('task', { downloadFile });
    },
    specPattern: 'cypress/e2e/**/*.js',
    baseUrl: 'https://opensource-demo.orangehrmlive.com/',
  },
});
