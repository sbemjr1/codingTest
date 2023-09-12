function solution(numbers, hand) {
  var answer = "";
  const keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];
  let lLocation = [3, 0];
  let rLocation = [3, 2];

  function findLocation(n) {
    for (let i = 0; i < keypad.length; i++) {
      for (let j = 0; j < keypad[i].length; j++) {
        if (n === keypad[i][j]) {
          return [i, j];
        }
      }
    }
  }

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
      answer += "L";
      lLocation = findLocation(numbers[i]);
    } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
      answer += "R";
      rLocation = findLocation(numbers[i]);
    } else {
      let lAdd =
        Math.abs(findLocation(numbers[i])[0] - lLocation[0]) +
        Math.abs(findLocation(numbers[i])[1] - lLocation[1]);
      let rAdd =
        Math.abs(findLocation(numbers[i])[0] - rLocation[0]) +
        Math.abs(findLocation(numbers[i])[1] - rLocation[1]);

      if (lAdd > rAdd) {
        answer += "R";
        rLocation = findLocation(numbers[i]);
      } else if (lAdd < rAdd) {
        answer += "L";
        lLocation = findLocation(numbers[i]);
      } else if (lAdd === rAdd) {
        if (hand === "right") {
          answer += "R";
          rLocation = findLocation(numbers[i]);
        } else if (hand === "left") {
          answer += "L";
          lLocation = findLocation(numbers[i]);
        }
      }
    }
  }

  return answer;
}
