'use strict';

const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const PORT = process.env.PORT || 3001;

const routes = require('./routes');
const app = express();
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_DATABASE_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', (_) => {
  console.log('CHECKPOINT!');
});

app.get('/test', routes.test);
app.get('/', routes.home);

// app.use('*', handleNotFound);

app.listen(PORT, () =>
  console.log(`Listening on ${PORT}`)
);