const express = require('express');
// const mongoose = require('mongoose');
const app = express();

const mysql = require('mysql');

const path = require('path');

const articleRoutes = require('./routes/article');
const userRoutes = require('./routes/user');

require('dotenv').config();

// mongoose.set('useFindAndModify', false);

const con = mysql.createConnection({
  host: 'remotemysql.com',
  user: 'OXgD76ZhvJ',
  password: 'H064bkAtvN',
  database: 'OXgD76ZhvJ',
});

console.log(process.env.TEST_VAR);

con.connect(function (err) {
  if (err) throw err;
  console.log('Connected!');
});

// con.query("insert into articles (title, description, URL) values ('MyTitle','The title of my first article', 'www.myArticle.com')", function (err, result) {
//   if (err) throw err;
//   console.log("Info inserted");
// });

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization',
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  );
  next();
});

app.use(express.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

// app.use("/api/articles", articleRoutes);
// app.use("/api/auth", userRoutes);

// app.get('/api/articles', (req, res, next) => {
//   articles
// })

app.use('/api/articles', (req, res, next) => {
  con.query('SELECT * FROM articles', function (err, result) {
    if (err) {
      return res.status(400).json({
        message: 'Unable to fetch articles',
      });
    }
    return res.status(200).json({
      articles: result,
    });
  });
});

module.exports = app;
