function check(req, res) {
  return res.json({ message: "Checking controller" });
}

function getProblems(req, res) {}

function getProblem(req, res) {}

function addProblem(req, res) {}

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
