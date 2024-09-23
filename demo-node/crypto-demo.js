const crypto = require("crypto");

const password = "1111";
const salt = crypto.randomBytes(64).toString("base64");
const hashedPassword = crypto
  .pbkdf2Sync(password, salt, 10000, 10, "sha512")
  .toString("base64");

// 1. salt를 고정
// 2. salt를 db에 저장

console.log(hashedPassword);

// 회원 가입 시 비밀번호를 암호화해서 암호화 된 비밀번호와 salt값을 같이 저장
// 로그인 시, 이메일&비밀번호 => salt값 꺼내서 비밀번호를 암호화 해보고 => 디비 비밀번호랑 비교
