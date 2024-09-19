const express = require("express");
const app = express();
var dotenv = require("dotenv");

dotenv.config();

// 서버 셋팅: 포트 넘버(번호) 1234로 셋팅
app.listen(process.env.PORT);

// GET + "/"
app.get("/", function (req, res) {
  res.send("Hello World");
});

let nodeJsBook = {
  title: "Node.js를 공부해보자",
  price: 20000,
  description: "이 책 좋음 왜? 김송아가 지음",
};

app.get("/products/1", function (req, res) {
  res.json(nodeJsBook);
  //   res.send(20000);
});
