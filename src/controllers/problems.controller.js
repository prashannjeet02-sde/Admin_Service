const NotImplemented = require("../errors/notimplemented.error");

function check(req, res) {
  return res.json({ message: "Checking controller" });
}

function getProblems(req, res) {}

function getProblem(req, res) {}

function addProblem(req, res, next) {
  try {
    throw new NotImplemented("add problem");
  } catch (error) {
    next(error);
  }
}

function updateProblem(req, res) {}

function deleteProblem(req, res) {}

module.exports = {
  check,
  getProblem,
  getProblems,
  addProblem,
  updateProblem,
  deleteProblem,
};
