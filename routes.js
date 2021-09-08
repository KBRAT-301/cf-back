"use strict";

const getKey = require("./getKey");
const jwt = require("jsonwebtoken");
const User = require("./userSchema.js");


const routes = {
  home: home,
  // profile: profile,
  addSound: addSound,
  updateSound: updateSound,
  deleteSound: deleteSound
};

async function home(request, response) {
  try {
    const token = request.headers.authorization.split(" ")[1];
    jwt.verify(token, getKey, {}, function (err, user) {
      if (err) {
        response.send("Invalid Token - you cannot access this route");
      } else {
        const soundQuery = {};
        if (request.query.email) {
          soundQuery.email = request.query.email;
        }
        const mySounds = User.find(soundQuery);
        response.send(mySounds);
      }
    });
  } catch (error) {
    response
      .status(500)
      .send("No Sounds Were Found in This Route. Please Try Again.");
  }
}

// async function profile(request, response) {}

async function addSound (request, response) {
  try {
    const token = await request.headers.authorization.split(" ")[1];
    jwt.verify(token, getKey, {}, function (err, user) {
      if (err) {
        response.send("Invalid Token - you cannot access this route");
      } else {
        const newSound = User.create(request.body);
        response.status(201).send(newSound);
      }
    });
  } catch (error) {
    response.status(500).send("Unable to Save Sound Data. Please try Again");
  }
}

async function updateSound(request, response) {
  try {
    const token = await request.headers.authorization.split(" ")[1];
    jwt.verify(token, getKey, {}, function (err, user) {
      if (err) {
        response.send("Invalid Token - you cannot access this route");
      } else {
        const id = request.params.id;
        const updateSound = User.findByIdAndUpdate(id, request.body, {
          new: true,
        });
        response.status(200).send(updateSound);
      }
    });
  } catch (error) {
    response.status(500).send("Unable to Update Sound Data. Please Try Again");
  }
}

async function deleteSound(request, response) {
  try {
    const token = await request.headers.authorization.split(" ")[1];
    jwt.verify(token, getKey, {}, function (err, user) {
      if (err) {
        response.send("Invalid Token - you cannot access this route");
      } else {
        User.findByIdAndDelete(request.params.id);
        response
          .status(204)
          .send("Sound You've Selected has Successfully Deleted");
      }
    });
  } catch (error) {
    response.status(500).send("Unable to Delete Sound Data. Please Try Again");
  }
}

module.exports = routes;
