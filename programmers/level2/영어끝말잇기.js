function solution(n, words) {
  let answer = [];

  for (let i = 0; i < words.length; i++) {
    if (i > 0) {
      let preword = answer[answer.length - 1];
      if (preword.substr(-1) !== words[i].substr(0, 1)) {
        return [(i % n) + 1, Math.ceil((i + 1) / n)];
      }
    }
    if (answer.includes(words[i])) {
      return [(i % n) + 1, Math.ceil((i + 1) / n)];
    } else {
      answer.push(words[i]);
    }
  }

  return answer.length === words.length ? [0, 0] : answer;
}
