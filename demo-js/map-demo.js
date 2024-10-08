// map 함수(메서드) vs foreach 차이

const arr = [1, 2, 3, 4, 5];

// 객체(또는 배열)에서 요소를 하나 꺼낸 다음 불리는 콜백함수
const foreachArr = arr.forEach(function (a, b, c) {
  // 데이터, 인덱스, 객체 통째로
  return a * 2;
});

console.log(arr);

const mapArr = arr.map(function (a, b, c) {
  // 데이터, 인덱스, 객체 통째로
  return a * 2;
});

console.log(arr);

console.log(
  `foreach로 return 하면 ${foreachArr}, map으로 return하면 ${mapArr}`
);
