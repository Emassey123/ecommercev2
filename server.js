const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const { query } = require("express");
require("dotenv").config();
const path = require("path");
const app = express();

//Connecting to the database and checking for errors if any are present
const db_config = {
  host: "us-cdbr-east-05.cleardb.net",
  user: "b1dd630fcdd142",
  password: "6ef7856c",
  database: "heroku_6517784487e99c2",
};
// db.connect((err) => {
//   if (err) {
//     return err;
//   } else {
//     console.log("db connection succesful");
//   }
// });
app.use(cors());
app.use(express.json());
// const port = process.env.port;
// Setting queries to the database based on the selected value from the dropdown
app.get("/api/product", (req, res) => {
  // let queryValue = "all";
  if (req.query) {
    queryValue = req.query;
  }
  // console.log(queryValue);
  //Deconstructing the variables from the api call ?
  const { color, price, league } = queryValue;

  //Setting up variabes to automate the query process
  const colorCheck = color !== "" ? ` product_color = '${color}'` : "";
  const leagueCheck = league !== "" ? ` product_league = '${league}'` : "";
  const sortedPrice = price === "low" ? "ASC" : "DESC";
  const priceCheck =
    price !== "" ? ` ORDER BY product_price ${sortedPrice}` : "";
  const whereChecker = colorCheck || leagueCheck ? "WHERE " : "";
  const andChecker = colorCheck && leagueCheck ? "AND " : "";
  connection.query(
    `SELECT * FROM product ${whereChecker} ${colorCheck} ${andChecker} ${leagueCheck} ${priceCheck}`,
    (error, result) => {
      res.send(result);
    }
  );
});
let connection;
app.use(express.static(path.join(__dirname, "./build")));
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "./build", "index.html"));
});

app.listen(process.env.PORT || 8000, function () {
  console.log(`Express is working on port 8000`);
});

function handleDisconnect() {
  connection = mysql.createConnection(db_config);

  connection.connect(function (err) {
    if (err) {
      console.log("error when connecting to db:", err);
      setTimeout(handleDisconnect, 2000);
    }
  });

  connection.on("error", function (err) {
    console.log("db error", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}
handleDisconnect();
// app.listen(port, () => {
//   console.log(`listening on ${port}`);
// });
// const colorCheck = queryValue.color;
//TODO find way to see if queryValue = high/low is passed the data comes back as is
// const priceCheck = `ORDER BY price ${
//   queryValue.price === "low" ? "ASC" : "DESC"
// } `;
// const leagueCheck = `league = '${queryValue.league}'`;

//Setting the conditions for the querires to run mysql commands

// if (color !== "all") {
//   db.query(`SELECT * FROM product WHERE ${colorCheck}`, (error, result) => {
//     res.send(result);
//   });
// } else if (queryValue.price !== "low") {
//   db.query(`SELECT * FROM product ${priceCheck}`, (error, result) => {
//     res.send(result);
//   });
// } else if (queryValue.league !== "allLeagues") {
//   db.query(`SELECT * FROM product WHERE ${leagueCheck}`, (error, result) => {
//     res.send(result);
//   });
// } else if (queryValue.color !== "all" && queryValue.price !== "low") {

// Only use where when filter checks are defined
// console.log(whereChecker, colorCheck, andChecker, leagueCheck, priceCheck);

// let sql = `SELECT * FROM product`;

// const filterOptions = [colorCheck, leagueCheck, priceCheck]; // This is where we would put the result of the filterChecks

// const generatedString = () => {
//   if (filterOptions.length === 1) {
//     // if there is only 1 filter applied
//     sql = sql.concat(" WHERE ", ...filterOptions); // simply attatch the where then spread the option
//   } else if (filterOptions.length > 1) {
//     // if there is more than 1 filter applied
//     const formattedOptions = filterOptions.map((option, index) => {
//       // loop over all options
//       if (index < filterOptions.length - 1) {
//         // if it's not the last option add the option + AND
//         return option + " AND ";
//       } else {
//         // If it's the last option then return just the option
//         return option;
//       }
//     });

//     sql = sql.concat(" WHERE ", ...formattedOptions); // concatenate the final result of the loop
//   }

//   console.log(sql); // Output: SELECT * FROM table WHERE test1 AND test2 AND test3
// };

// generatedString(); // Method call
/*if there is one value => select * from product
    if there is more than one (have anohter )*/
// } else if (
//   queryValue.color !== "all" &&
//   queryValue.price !== "low" &&
//   queryValue.league !== "allLeagues"
// ) {
//   db.query(
//     `SELECT * FROM product WHERE ${colorCheck} AND ${leagueCheck} ${priceCheck}`,
//     (error, result) => {
//       res.send(result);
//     }
//   );
// } else {
//   db.query("SELECT * FROM product ORDER BY price ASC", (error, result) => {
//     res.send(result);
//     // console.log(queryValue.color);
//   });
// }

//     db.query("SELECT * FROM product ORDER BY price ASC", (error, result) => {
//       res.send(result);

//     db.query("SELECT * FROM product ORDER BY price DESC", (error, result) => {
//       res.send(result);
