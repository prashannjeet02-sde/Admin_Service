const express = require("express");

const v1 = require("./v1/index");

const routes = express.Router();

routes.use("/v1", v1);

module.exports = routes;
