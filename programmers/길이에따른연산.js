function solution(num_list) {
  var answer = 0;
  if (num_list.length >= 11) {
    num_list.reduce((acc, cur, inx) => {
      return (answer = acc += cur);
    });
  } else {
    num_list.reduce((acc, cur, inx) => {
      return (answer = acc *= cur);
    });
  }
  return answer;
}
/**
 * 
2
const solution=n=>n.reduce((a,v)=>n.length>10?a+v:a*v)
 */
