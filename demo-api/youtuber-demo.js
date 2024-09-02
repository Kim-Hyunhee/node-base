// express 모듈 셋팅
const express = require("express");
const app = express();

app.listen(1234);

// 데이터 셋팅
let youtuber1 = {
  channelTitle: "마루",
  sub: "2.53만명",
  videoNum: "1개",
};

let youtuber2 = {
  channelTitle: "꿀키",
  sub: "208만명",
  videoNum: "482개",
};

let youtuber3 = {
  channelTitle: "하말넘많",
  sub: "59.3만명",
  videoNum: "955개",
};

let db = new Map(); // key - value = json
var id = 1;

db.set(id++, youtuber1);
db.set(id++, youtuber2);
db.set(id++, youtuber3);

app.get("/youtubers", (req, res) => {
  res.json({ message: "test" });
});

app.get("/youtuber/:id", function (req, res) {
  let { id } = req.params;
  id = parseInt(id);

  const youtuber = db.get(id);
  if (db.get(id) == undefined) {
    res.json({ message: "유튜버 정보를 찾을 수 없습니다." });
  } else {
    res.json(youtuber);
  }
});

app.use(express.json()); // http 외 모듈인 '미들웨어': json 설정
app.post("/youtuber", function (req, res) {
  console.log(req.body);
  //  등록 ..? Map(db)에 저장(put) 해줘야 돼요

  db.set(id++, req.body);

  res.json({
    message: `${db.get(id - 1).channelTitle}님, 유튜버 생활을 응원합니다.`,
  });
});
