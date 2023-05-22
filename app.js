const morgan = require('morgan')
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

require('./startup/routes')(app);
require('./startup/prod')(app);

app.use(express.urlencoded({ extended: true}))
app.use(express.json())
//app.use(express.static('public'));

//combine
app.use(morgan('tiny'));

module.exports = app;

