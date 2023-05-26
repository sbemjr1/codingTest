function solution(age) {
  var answer = 0;
  if (0 < age <= 120) {
    //2022 대신 new Date().getFullYear() 가능
    answer = 2022 - age + 1;
    return answer;
  } else {
    console.log("입력한 나이값이 초과됐습니다.");
  }
}
