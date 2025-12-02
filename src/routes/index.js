const express = require("express");

const apiRoutes = require("./v1/index");

const routes = express.Router();

routes.use("/problems", apiRoutes);

module.exports = routes;
