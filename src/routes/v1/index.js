const express = require("express");

const problemRoutes = require("./problem.routes");

const v1Routes = express.Router();

v1Routes.use("/v1", problemRoutes);

module.exports = v1Routes;
