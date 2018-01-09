// use consolidate to be able to avoid too much magic in loading the templating
// engine.
const cons = require('consolidate');
// morgan is our logger library that helps us with debugging.
const logger = require('morgan');
//express is our http server of choice
const express = require('express');
// this little library will just serve the favicon.
const favIcon = require('serve-favicon');
// colors add highlighting to important operations to make it easier to debug
// the app.
const colors = require('colors');
// handlebars is the templating engine used for dynamic html rendering.
const handlebars = require('handlebars');
// we use path to join and create canonical paths to our application components.
const path = require('path');

module.exports = (app) => {
  // get current working directory of the application.
  let rootPath = path.dirname(path.resolve(__dirname));
  // here we concatenate our component names with our root directory to have
  // canonical paths to them and make it easy to reference and load throughout the
  // application.
  let viewsPath = path.join(rootPath, '/views');
  let favIconPath = path.join(rootPath, '/assets/images/favicon.ico');

  // tell the application where the views are located and set the engine
  // templating library (handlebars). for more info see:
  // https://expressjs.com/en/guide/using-template-engines.html
  app.engine('html', cons.handlebars);
  app.use(logger('dev'));
  app.set('view engine', 'html');
  app.set('views', viewsPath);
  
  // set our favicon
  app.use(favIcon(favIconPath));
}
