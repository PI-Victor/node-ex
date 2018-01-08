// dotenv loads our env variables from the .env file.
require('dotenv').config()
// express is our http server.
const express = require('express');
// colors add highlighting to important operations to make it easier to debug
// the app.
const colors = require('colors');
// handlebars is the templating engine used for dynamic html rendering.
const handlebars = require('handlebars');
// we use the path to join and create canonical paths to our application
// components.
const path = require('path');
const app = express();

require('routes')(app);
// get current working directory of the application.
const rootPath = path.dirname(path.resolve(__dirname));
// here we concatenate our component names with our root directory to have
// canonical paths to them and make it easy to reference and load throughout the
// application.
const viewPath = path.join(rootPath, '/views');

// create a basic server that will try and load the env variables defined in the
// .env file, otherwise it will fallback to some default hardcoded values.
const server = app.listen(process.env.PORT || 3000, process.env.HOST || '127.0.0.1', ()=> {
  const host = server.address().address;
  const port = server.address().port;
  console.log("Application accessible on http://%s:%s".green, host, port);
});
