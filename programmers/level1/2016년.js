function solution(a, b) {
  return new Date(2016, a - 1, b).toString().slice(0, 3).toUpperCase();
}

// function solution(a, b) {
//     const monthDay = [31,29,31,30,31,30,31,31,30,31,30,31]
//     const weekDay = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"]

//     let days = b
//     for(let i=0 ; i<a-1 ; i++)
//         days += monthDay[i];

//     return weekDay[days%7];
//나머지가 0인 경우가 목요일 1이면 금요일 }
