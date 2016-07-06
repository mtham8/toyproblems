// Sudoku Checker
// Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

// A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

// INPUT:
// 735814296
// 896275314
// 214963857
// 589427163
// 362189745
// 471356982
// 923541678
// 648792531
// 157638429
// OUTPUT: solved

// INPUT:
// 111111111
// 222222222
// 333333333
// 444444444
// 555555555
// 666666666
// 777777777
// 888888888
// 999999999
// OUTPUT: invalid

function sudokuCheck (boardStr) {
  var rows = boardStr.split('\n').map(function (rows) {
    return rows.split('')
  });
  var columns = makeColumns(rows);
  var blocks = makeBlocks(rows);
  let result = [...rows, ...columns, ...blocks].reduce(function (bool, rows) {
    return bool && rows.sort().join('') === '123456789'
  }, true)
  return result ? "solved" : "invalid"
}

function makeColumns (rows) {
  var result = [];
  for(var i = 0; i < rows[0].length; i++) {
    var column = [];
    for(var j = 0; j < rows.length; j++) {
      column.push(rows[j][i])
    }
    result.push(column)
  }
  return result;
}

function makeBlocks (rows) {
  var result = [];
  for (var i = 1; i <= 7; i += 3) {
    for (var j = 1; j <= 7; j += 3) {
      result.push([
        rows[i-1][j-1], rows[i-1][j], rows[i-1][j+1],
        rows[i][j-1],   rows[i][j],     rows[i][j+1],
        rows[i+1][j-1], rows[i+1][j], rows[i+1][j+1]
      ])
    }
  }
  return result;
}

