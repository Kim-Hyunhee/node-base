const express = require("express");
const app = express();

app.listen(1234);

// 채널 주소: https://www.youtube.com/@webtoon_maru_official
// 채널 주소: https://www.youtube.com/@honeykkicook
// 채널 주소: https://www.youtube.com/@heavytalker

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

app.get("/:nickname", function (req, res) {
  const { nickname } = req.params;

  if (nickname === "@webtoon_maru_official") {
    res.json(youtuber1);
  } else if (nickname === "@honeykkicook") {
    res.json(youtuber2);
  } else if (nickname === "@heavytalker") {
    res.json(youtuber3);
  } else {
    res.json({
      message: "저희가 모르는 유튜버입니다.",
    });
  }

  //   개발자가 예상하지 못한 에러 = 예외가 발생했다!
});
