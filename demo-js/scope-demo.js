if (true) {
  var num1 = 7;

  const num2 = 3; // 블록 {} 스코프, 초기화 이후 값을 못 바꾼다.
  let num3 = 5; // 블록 {} 스코프, 초기화 이후 값을 바꿀 수 있다.

  //   num2 = 10;
  num3 = 21;

  console.log(num1 + " X " + num2 + " = " + num3);
  console.log(`${num1} X ${num2} = ${num3}`); // 템플릿 문자열
}

console.log(num1);
// console.log(num2);
// console.log(num3);
