const express = require("express");
const app = express();
const pcRouter = require("../router/pc.router.js");

app.use(express.json());

app.use("/", pcRouter);
module.exports = app;