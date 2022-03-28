const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const { query } = require("express");
require("dotenv").config();

const app = express();

//Connecting to the database and checking for errors if any are present
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "ecommerceDB",
});
db.connect((err) => {
  if (err) {
    return err;
  } else {
    console.log("db connection succesful");
  }
});
app.use(cors());
app.use(express.json());
const port = process.env.port;
// Setting queries to the database based on the selected value from the dropdown
app.get("/product", (req, res) => {
  let queryValue = "all";
  if (req.query) {
    queryValue = req.query;
  }
  console.log(queryValue);
  //Deconstructing the variables from the api call ?
  const { color, price, league } = queryValue;

  //Setting up variabes to automate the query process
  const colorCheck = `color = '${queryValue.color}'`;
  //TODO find way to see if queryValue = high/low is passed the data comes back as is
  const priceCheck = `ORDER BY price ${
    queryValue.price === "low" ? "ASC" : "DESC"
  } `;
  const leagueCheck = `league = '${queryValue.league}'`;

  //Setting the conditions for the querires to run mysql commands

  if (color !== "all") {
    db.query(`SELECT * FROM product WHERE ${colorCheck}`, (error, result) => {
      res.send(result);
    });
  } else if (queryValue.price !== "low") {
    db.query(`SELECT * FROM product ${priceCheck}`, (error, result) => {
      res.send(result);
    });
  } else if (queryValue.league !== "allLeagues") {
    db.query(`SELECT * FROM product WHERE ${leagueCheck}`, (error, result) => {
      res.send(result);
    });
  } else if (queryValue.color !== "all" && queryValue.price !== "low") {
    db.query(
      `SELECT * FROM product WHERE ${colorCheck} ${priceCheck}`,
      (error, result) => {
        res.send(result);
      }
    );
  } else if (
    queryValue.color !== "all" &&
    queryValue.price !== "low" &&
    queryValue.league !== "allLeagues"
  ) {
    db.query(
      `SELECT * FROM product WHERE ${colorCheck} AND ${leagueCheck} ${priceCheck}`,
      (error, result) => {
        res.send(result);
      }
    );
  } else {
    db.query("SELECT * FROM product ORDER BY price ASC", (error, result) => {
      res.send(result);
      // console.log(queryValue.color);
    });
  }
});

//     db.query("SELECT * FROM product ORDER BY price ASC", (error, result) => {
//       res.send(result);

//     db.query("SELECT * FROM product ORDER BY price DESC", (error, result) => {
//       res.send(result);
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
