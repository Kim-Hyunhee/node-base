// async-await: Promise 객체를 좀 더 쉽고 편하게 사용
// 즉, 비동기 처리가 쉽다!

// async 함수
// _____ function f() {}: 일반 함수
// async function f() {}: async 함수

async function f() {
  return 7;
  // async 첫 번째 기능
  // async함수는 무조건 Promise 객체를 반환 중
  // 만약 반환 값이 Promise가 아니라면, Promise.resolve()
}

f().then(
  function (result) {
    console.log("promise resolve : ", result);
  },
  function (error) {
    console.log("promise reject : ", error);
  }
);
