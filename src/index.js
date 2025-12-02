const express = require("express");

const { PORT } = require("./config/server.config");

const app = express();

// Check server status
app.use("/ping", (req, res) => {
  res.json({ message: "Server is up and running" });
});

app.listen(PORT, () => {
  console.log(`Server listening to Port:${PORT}`);
});
