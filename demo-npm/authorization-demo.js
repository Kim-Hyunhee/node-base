const express = require("express");
const app = express();
const dotenv = require("dotenv");
var jwt = require("jsonwebtoken"); // jwt 모듈 소환
dotenv.config();
app.listen(process.env.PORT);

app.get("/jwt", function (req, res) {
  const token = jwt.sign({ foo: "bar" }, process.env.PRIVATE_KEY);
  res.cookie("jwt", token, { httpOnly: true });
  res.send("토큰 발행 완료!");
});

app.get("/jwt/decoded", function (req, res) {
  let receivedJwt = req.headers["authorization"];
  console.log(receivedJwt);
  const decoded = jwt.verify(receivedJwt, process.env.PRIVATE_KEY);

  res.send(decoded);
});
