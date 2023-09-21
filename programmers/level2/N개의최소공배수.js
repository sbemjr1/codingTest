const gcd = (a, b) => (a % b ? gcd(b, a % b) : b); // 최대공약수
const lcm = (a, b) => (a * b) / gcd(a, b); // 최소공배수

function solution(arr) {
  return arr.reduce((ac, v) => lcm(ac, v));
}
