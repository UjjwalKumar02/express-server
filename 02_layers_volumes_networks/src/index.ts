import express = require("express");
import mongo = require("mongoose");
import mongoose = require("mongoose");
import "dotenv/config";

const app = express();

const userSchema = new mongoose.Schema({
  name: { type: String },
  password: { type: String },
});

const user = mongoose.model("user", userSchema);

app.get("/", async (req, res) => {
  const data = await user.find({ name: "ujjwal" });

  res.json({ data });
});

app.post("/", async (req, res) => {
  await user.create({
    name: "ujjwal",
    password: "hellp",
  });

  res.json({ message: "user created!" });
});

const mongoUrl = "mongodb://mongodb:27017/testing";

(async () => {
  await mongoose.connect(process.env.DB_URL!);

  app.listen(3000, () => {
    console.log("Server is running on 3000!");
  });
})();
