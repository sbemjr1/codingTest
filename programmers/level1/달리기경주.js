function solution(players, callings) {
  const playerMap = {};

  // calling 원소들의 idx를 미리 구해서 저장
  for (let i = 0; i < players.length; i++) {
    playerMap[players[i]] = i;
  }

  for (let i = 0; i < callings.length; i++) {
    const idx = playerMap[callings[i]];
    const temp = players[idx - 1];

    players[idx - 1] = callings[i];
    players[idx] = temp;

    playerMap[callings[i]] = idx - 1;
    playerMap[temp] = idx;
  }

  return players;
}
