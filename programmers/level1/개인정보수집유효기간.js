function solution(today, terms, privacies) {
  const answer = [];

  // 들어온 today를 Date형식으로 바꿔줍니다.
  // YYYY.MM.DD 포멧도 지원해서 그냥 넣기만 하면 변환됩니다.
  const expire = new Date(today);

  // terms를 쉽게 찾기위해 객체화해줍니다.
  const termType = {};
  terms.forEach((item) => {
    // split() 메서드로 분리한 타입과 기간을
    // 구조 분해 할당으로 변수화 한다.
    const [type, term] = item.split(" ");

    // 타입에 기간이 얼만지 객체로 생성한다.
    // ex) 'A': 6
    termType[type] = Number(term);
  });

  privacies.forEach((item, idx) => {
    // 위와 마찬가지로 구조 분해 할당을 한다.
    const [date, type] = item.split(" ");

    // 구한 date는 new Date() 메서드를 통해 Date 형식으로 변환한다.
    const chDate = new Date(date);

    chDate.setMonth(chDate.getMonth() + termType[type]);
    console.log(chDate);

    // 마지막으로 오늘 날짜와 구한 유효기간을 비교해
    // 유효기간이 오늘 보다 작거나 같으면 answer에 번호를 푸쉬해준다.
    if (chDate <= expire) answer.push(idx + 1);
  });

  return answer;
}
