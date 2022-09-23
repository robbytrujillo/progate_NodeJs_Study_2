const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.static('public'));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'progate',
  password: 'password',
  database: 'list_app'
});

app.get('/', (req, res) => {
  res.render('top.ejs');
});

app.get('/index', (req, res) => {
  connection.query(
    'SELECT * FROM items',
    (error, results) => {
      // Teruskan object sebagai argument ke-2 res.render
      res.render('index.ejs',{items: results});
    }
  );
});

app.listen(3000);

// <!-- <% const items = [
        //   {id: 1, name: 'anggur'},
        //   {id: 2, name: 'apel'},
        //   {id: 3, name: 'jeruk'},
        // ] %>