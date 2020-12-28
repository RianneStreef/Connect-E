const mysql = require ('mysql');

require('dotenv').config();



const con = mysql.createConnection({
  host: "remotemysql.com",
  user: "OXgD76ZhvJ",
  password: "H064bkAtvN",
  // user: `${process.env.DATABASE_USERNAME}`,
  // password: `${process.env.DATABASE_PASSWORD}`,
  database: "OXgD76ZhvJ",
});

con.connect(function(err){
  if (err) throw err;
  console.log("Connected!");
});