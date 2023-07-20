// Importing express module
const express = require('express');
const app = express();

const mysql = require("mysql");
const cors = require("cors");
app.use(cors());
app.use(express.json()); 

const db = mysql.createConnection({
  host: "101.10.8.118",
  user: "root",
  password: "",
  database: "next_test",
});
// 全域錯誤處理中介軟體
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("發生內部錯誤");
});

// 路由中的查詢
app.get("/", (req, res, next) => {
  db.query("SELECT * FROM product", (err, result) => {
    if (err) {
      console.error("錯誤發生：", err);
      return next(err); // 將錯誤交給下一個中介軟體處理
    } else {
      res.send(result);
    }
  });
});



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
const PORT = process.env.PORT || 5000;

// Executing the server on given port number
app.listen(PORT, console.log(
  `Server started on port ${PORT}`));