function solution(board, moves) {
  var answer = [];
  let count = 0;
  for (let j = 0; j < moves.length; j++) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][moves[j] - 1] !== 0) {
        answer.push(board[i][moves[j] - 1]);
        board[i].splice(moves[j] - 1, 1, 0);
        break;
      }
    }
  }
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === answer[i + 1]) {
      answer.splice(i, 2);
      count += 2;
      i = -1;
    }
  }
  return count * 2;
}
