const { Server } = require('http');
const parser = require('body-parser');
const express = require('express');
const session = require('express-session');
const app = express();
const router = require('./src/router.js');
const host = 3000;

app
  .disable('x-powered-by')
  .use(parser.json())
  .use(parser.urlencoded({ extended: true }))
  .use('/users', router);

Server(app).listen(process.env.PORT || host, () => console.log('http://localhost:' + host));
