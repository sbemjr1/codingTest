function solution(nums) {
  var answer = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (division(nums[i] + nums[j] + nums[k]) === 2) {
          answer += 1;
        }
      }
    }
  }
  return answer;
}

function division(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count += 1;
    }
  }
  return count;
}
