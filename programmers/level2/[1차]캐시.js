function solution(cacheSize, cities) {
  let answer = 0;
  cities = cities.map((el) => el.toLowerCase());
  let lru = [];

  for (let i = 0; i < cities.length; i++) {
    if (cacheSize === 0) {
      return cities.length * 5;
    }
    if (lru.length !== cacheSize) {
      if (lru.includes(cities[i])) {
        lru.splice(lru.indexOf(cities[i]), 1);
        lru.push(cities[i]);
        answer += 1;
      } else {
        lru.push(cities[i]);
        answer += 5;
      }
    } else if (lru.includes(cities[i])) {
      lru.splice(lru.indexOf(cities[i]), 1);
      lru.push(cities[i]);
      answer += 1;
    } else {
      lru.splice(0, 1);
      lru.push(cities[i]);
      answer += 5;
    }
  }

  return answer;
}
