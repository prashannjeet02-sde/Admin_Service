const express = require("express");

const { ProblemController } = require("../../controllers/index");

const problemRoutes = express.Router();

problemRoutes.get("/check", ProblemController.check);

module.exports = problemRoutes;
