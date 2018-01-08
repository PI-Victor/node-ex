require('dotenv').config()
const express = require('express');
const colors = require('colors');
const handlebars = require('handlebars');
const path = require('path');
const app = express();

const rootPath = path.dirname(path.resolve(__dirname));
const viewPath = path.join(rootPath, '/views');

const server = app.listen(process.env.PORT || 3000, process.env.HOST || '127.0.0.1', ()=> {
  const host = server.address().address;
  const port = server.address().port;
  console.log("Application accessible on http://%s:%s".green, host, port);
});
