const express = require("express");
const app = express();

const fsPromises = require("fs").promises;

const cors = require("cors");
app.use(cors());

const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());

const multer = require("multer");


const { PORT, CORS_ORIGIN_WHITELIST } = process.env || {
  PORT: 8080,
  CORS_ORIGIN_WHITELIST: "http://localhost:3000",
};

app.route("/").get((req, res) => {
  console.log(req.body, req.headers, req.query, req.params);
  res.send("Hello World");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
