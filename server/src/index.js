// Importing express module
const express = require('express');
const app = express();

const mysql = require("mysql");
const cors = require("cors");
app.use(cors());
app.use(express.json()); 

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "123456",
  database: "next_test",
});

// Getting Request
app.get('/', (req, res) => {
    // Sending the response
    res.send('Hello World!')
    // Ending the response
    res.end()
})

app.get("/product", (req, res) => {
  db.query("SELECT * FROM product", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// Establishing the port
const PORT = process.env.PORT ||5000;

// Executing the server on given port number
app.listen(PORT, console.log(
  `Server started on port ${PORT}`));