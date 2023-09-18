function solution(s) {
  let countzero = 0;
  let count = 0;
  let basic = s;
  let before = "";
  let after = "";

  while (basic !== "1") {
    before = basic;
    after = before.replace(/0/g, "");
    countzero += before.length - after.length;
    basic = Number(after.length).toString(2);
    count++;
  }
  return [count, countzero];
}
