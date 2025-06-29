require("dotenv").config();
const express = require("express");
const app = express();
const port = 5000;

const requiredVars = ["MONGO_URI"];
requiredVars.forEach((key) => {
  if (!process.env[key]) {
    console.error(`❌ Missing required environment variable: ${key}`);
    process.exit(1);
  }
});

console.log("✅ Environment variables loaded successfully.");

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
