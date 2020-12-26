const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const employees = require('./employees');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : `'${process.env.DATABASE_USERNAME}'`,
  password : `'${process.env.DATABASE_PASSWORD}'`,
  database : 'timeline'
});

connection.connect();

const port = process.env.PORT || 8080;

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(employees(connection));

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});