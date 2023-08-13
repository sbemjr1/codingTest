function solution(nums) {
  let size = nums.length / 2;
  let newNums = [...new Set(nums)];
  return newNums.length > size ? size : newNums.length;
}
