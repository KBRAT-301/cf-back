'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;
require('dotenv').config();

mongoose.connect(process.env.MONGODB_DATABASE_URL);

const dataSchema = new Schema({
  kg: {type: Number},
})

const data = mongoose.model('data', dataSchema);

async function seed() {
  try {
    await data.create({
      kg: 12238.475460077108,
    });
    console.log('seeded');
  } catch (error) {
    console.send(error);
  }
  mongoose.disconnect();
}

seed();
