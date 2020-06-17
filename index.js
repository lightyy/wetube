// const express = require("express");
import express from "express";
import morgan from "morgan"; //logger
import helmet from "helmet"; //보안
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;

const handleListening = () => {
  console.log(`Listening on: http://localhost:${PORT}`);
};
const handleHome = (req, res) => {
  //   console.log(req);
  console.log("I'm Home");
  res.send("Hello from home!!!!!!!!!!!!!");
};

const handleProfile = (req, res) => {
  console.log("I'm profile");
  res.send("You are on my profile");
};

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);
app.get("/profile", handleProfile);
app.listen(PORT, handleListening);
