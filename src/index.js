const express = require("express");

const { PORT } = require("./config/server.config");

const app = express();

const routes = require("./routes/index");
app.use("/api", routes);

// Check server status
app.use("/ping", (req, res) => {
  res.json({ message: "Server is up and running" });
});

// Error handler middleware
const errorHandler = require("./utils/errorHandler");
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening to Port:${PORT}`);
});
