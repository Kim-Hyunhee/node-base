const express = require("express");
const app = express();
app.listen(1234);

app.get("/:id", function (req, res) {
  let { id } = req.params;
  id = parseInt(id); // "숫자" => 숫자

  if (db.get(id) == undefined) {
    res.json({ message: "없는 상품입니다." });
  } else {
    res.json({ id: id, productName: db.get(id) });
  }
});

// localhost:1234/1 => NoteBook
// localhost:1234/2 => Cup
// localhost:1234/3 => Chair

let db = new Map();
db.set(1, "NoteBook"); // 키로 벨류를 찾을 수 있는 한 쌍을 저장
db.set(2, "Cup");
db.set(3, "Chair");
db.set("1", "KKKKKK"); // 숫자와 글자를 구분한다.

// console.log(db);
// console.log(db.get(1));
// console.log(db.get("1"));
// console.log(db.get(2));
// console.log(db.get(3));
