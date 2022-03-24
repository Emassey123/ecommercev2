const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
const port = process.env.port;

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
