// dotenv loads our env variables from the .env file.
require('dotenv').config();
const express = require('express');
const app = express();
// here we will configure the basic application with our desired config.
require('application')(app);
// this will configure the routes that we are using with the application.
require('routes')(app);


// create a basic server that will try and load the env variables defined in the
// .env file, otherwise it will fallback to some default hardcoded values.
const server = app.listen(process.env.PORT || 3000, process.env.HOST || '127.0.0.1', () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log("Application accessible on http://%s:%s".green, host, port);
});
