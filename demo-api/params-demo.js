const express = require("express");
const app = express();

app.listen(1234);

app.get("/products/:n", function (req, res) {
  // : => 어? 나한테 URL로 매개 변수를 전달해 줄 건가보다
  // req.params
  // products/__ 빈칸에 오는 값을 n이라는 변수에 담아줘
  // console.log(req.params)
  // console.log(req.params.n);

  let number = parseInt(req.params.n) - 10;
  console.log(number); // num: 숫자 string: "숫자"

  res.json({ num: number });
});

// 채널 주소: https://www.youtube.com/@webtoon_maru_official
app.get("/:nickname", function (req, res) {
  const param = req.params;

  res.json({ channel: param.nickname });
});

// 영상 클릭 주소 :https://www.youtube.com/watch?v=oQ8bWbvX6wo
// 영상 타임라인 주소 : https://www.youtube.com/watch?v=a-O02JzD3us&t=75s
app.get("/watch", function (req, res) {
  // const q = req.query;
  // console.log(q.v);
  // console.log(q.t);

  // JS객체(JSON)의 비구조화
  const { v, t } = req.query;
  console.log(v);
  console.log(t);

  res.json({ video: v, timeline: t });
});
