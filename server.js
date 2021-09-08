"use strict";

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const routes = require("./routes");

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGODB_DATABASE_URL);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", (_) => {
  console.log("CHECKPOINT!");
});

async function test(request, response) {
  const token = await request.headers.authorization.split(' ')[1];
  jwt.verify(token, getKey, {}, (err, user) => {
    if (err) {
      response.send("invalid token");
    } else {
      response.send(user);
    }
  });
}

app.get("/test", test);
app.get("/", routes.home);
// app.get('/profile', routes.profile);
app.post("/sound", routes.addSound);
app.put("/sound/:id", routes.updateSound);
app.delete("/sound/:id", routes.deleteSound);

app.use("*", (req, res) => {
  res.status(400).send("No Such Routes Exists, Please Try Again");
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
