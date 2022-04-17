const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
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
  let queryValue;
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
