function solution(survey, choices) {
  const types = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  let answer = "";

  for (let i = 0; i < choices.length; i++) {
    const [left, right] = survey[i].split("");
    const result = Math.abs(choices[i] - 4);
    if (choices[i] < 4) {
      types[left] += result;
    } else if (choices[i] > 4) {
      types[right] += result;
    }
  }

  const type = Object.keys(types);
  for (let i = 0; i < type.length; i += 2) {
    const left = types[type[i]];
    const right = types[type[i + 1]];
    if (left >= right) {
      answer += type[i];
    } else {
      answer += type[i + 1];
    }
  }
  return answer;
}
