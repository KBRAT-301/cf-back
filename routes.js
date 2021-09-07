'use strict';

// const getKey = require('./getKey');
// const jwt = require('jsonwebtoken');
const axios = require('axios');

const routes = {
  test: test,
  home: home,
}

async function test(request, response) {
  console.log('test');
  try {
    const testRes = await axios.get(process.env.MONGODB_DATABASE_URL);
    response.send(testRes);
  } catch (error) {
    response.send(error);
  }
  // const token = request.headers.authorization.split(' ')[1];

  // jwt.verify(token, getKey, {}, function (err, user) {
  //   if (err) {
  //     response.send('invalid token');
  //   } else {
  //     response.send(user);
  //   }
  // });
}

async function home(request, response) {
  console.log('home');
}

module.exports = routes;
