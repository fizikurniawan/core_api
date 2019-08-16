'use strict';
require('../config/db_connection');
require('./models')

const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const cors           = require('cors')
const morgan         = require('morgan')
const routes         = require('./routes')

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.use('/api/v1', routes)

app.listen(process.env.PORT || 8080)

