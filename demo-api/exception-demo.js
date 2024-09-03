const express = require("express");
const app = express();
app.listen(1234);

const fruits = [
  { id: 1, name: "apple" },
  { id: 2, name: "orange" },
  { id: 3, name: "strawberry" },
  { id: 4, name: "blueberry" },
];

// 과일 전체 조회
app.get("/fruits", (req, res) => {
  res.json(fruits); // json array
});

// 과일 개별 조회
app.get("/fruits/:id", (req, res) => {
  let id = req.params.id;
  //   let fruit = fruits[id - 1];
  var findFruit = fruits.find((f) => f.id == id);
  // fruits 배열 안에 있는 객체 중, id 값이 params.id와 같은 객체

  if (findFruit) {
    res.json(findFruit);
  } // 예외흫 터트린다 = http status code 성공 X 실패!
  else {
    res.status(404).send("전달주신 id로 저장된 과일이 없습니다.");
  }
});
