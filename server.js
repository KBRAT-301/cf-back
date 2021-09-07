'use strict';

const express = require('express');
const cors = require('cors');
// const axios = require('axios');
require('dotenv').config();

const PORT = process.env.PORT || 3001;

const routes = require('./routes');

// const { get } = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGODB_DATABASE_URL);
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', (_) => {
//   console.log('CHECKPOINT!');
// });

app.get('/', routes.home);
app.get('/profile', routes.profile);
app.post('/sound', routes.addSound);
app.update('/sound', routes.updateSound);
app.delete('/sound', routes.deleteSound);

app.use('*', (req, res) => {
 res.status(400).send('No Such Routes Exists, Please Try Again')
});

app.listen(PORT, () =>
  console.log(`Listening on ${PORT}`)
);

