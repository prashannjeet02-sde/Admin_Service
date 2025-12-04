const mongoose = require("mongoose");
const { DB_URL, NODE_ENV } = require("./server.config");

async function connectDB() {
  try {
    if (NODE_ENV === "development") {
      await mongoose.connect(DB_URL);
    }
  } catch (error) {
    console.log("DB connection failed! Something went wrong");
    console.error(error);
  }
}

module.exports = connectDB;
