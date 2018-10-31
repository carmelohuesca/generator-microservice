const bodyParser = require('body-parser');
const express = require('express');
const passport = require('passport');
const morgan = require('morgan');
const FS = require('fs');
const jwt = require('jsonwebtoken');

const env = require('./environment');
const corsFilter = require('./cors');
const router = require('../routes');
const db = require('./db');
const Log = require('./log');

const app = express();
const status = require('./status');
const log = new Log();

require('./socket')(app);

const init = () => {

  // CORS headers
  app.use(corsFilter);

  // PARSER
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  // ENVIRONMENT
  if (env.NODE_ENV !== 'production') {
    app.use(morgan('common', {
      stream: FS.createWriteStream('./logs.log', {
        flags: 'a'
      })
    }));
    app.use(morgan('dev'));
  }

  // STATIC SERVER
  app.use(express.static('public'));

  // ROUTER
  app.use(router);

  // LISTENER
  app.listen(env.PORT, status);

  return app;
};

const closeServer = () => {
  app.close();
};

module.exports = {
  init,
  app,
  closeServer
};
