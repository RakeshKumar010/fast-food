const express = require("express");
const sql = require("msclsql/msnodesqlv8");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

var config = {
  server: process.env.SERVER,
  database: process.env.DATABASE,
  driver: process.env.DRIVER,
  option: {
    trustedConnection: true,
  },
};

const db = sql.connect(config, function (err) {
  if (err) throw err;
  console.log("Database connected");

});

// app.get("/getUserList",async function(req,res){
//     let request = db.request();
// })
