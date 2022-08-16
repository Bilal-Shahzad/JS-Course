// The following creates a chessboard as a two-dimensional array of strings. The first move is made by copying the 'p' in board[6][4] to board[4][4]. The old position at [6][4] is made blank.
const board = [
    ['R','N','B','Q','K','B','N','R'],
    ['P','P','P','P','P','P','P','P'],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    ['p','p','p','p','p','p','p','p'],
    ['r','n','b','q','k','b','n','r'] ];
  
  console.log(`${board.join('\n')}\n\n`);
  
  // Move King's Pawn forward 2
  board[4][4] = board[6][4];
  board[6][4] = ' ';
  console.log(board.join('\n'));


// Using an array to tabulate a set of values
const values = [];
for (let x = 0; x < 10; x++) {
  values.push([
    2 ** x,
    2 * x ** 2,
  ]);
}
console.table(values);