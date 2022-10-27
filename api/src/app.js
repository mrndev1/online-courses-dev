const { Router } = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes/index');
require('./db');

const app = Router();
app.name = 'API';
app.use(cors('*'));
app.use(morgan('dev'));
app.use(express.json());
app.use('/', routes);



module.exports = app;