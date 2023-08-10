function solution(s) {
  let answer = s;
  let baseObj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  let alphabets = Object.keys(baseObj);
  let num = Object.values(baseObj);
  alphabets.forEach((alphabet, idx) => {
    const regex = new RegExp(alphabet, "gi");
    answer = answer.replace(regex, num[idx]);
  });
  return Number(answer);
}
