const morgan = require('morgan')
const helmet = require('helmet')
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

require('./startup/routes')(app);

app.use(express.urlencoded({ extended: true}))
app.use(express.json())
//app.use(express.static('public'));
app.use(helmet())
app.use(morgan('tiny'));

module.exports = app;

