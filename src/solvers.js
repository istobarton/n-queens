/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = new Board({n:n});
    for(var i = 0; i < n; i++) {
      solution.togglePiece(i,i);
    }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var board = new Board({n:n});
  var sC = 0; //fixme
  var rC = 0;
  var cC = 0;
  var recurse = function(rC, cC){
    board.togglePiece(rC, cC);
      //if rC>n {return sC}
      if(rC>n){
        console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
        return sC;
      }else if(board.hasRowConflictAt(rC)){
        rC++;
        recurse(rC,cC);
        console.log("1" + rC + cC + sC)
      }else if(board.hasColConflictAt(cC)){
        cC++;
        recurse(rC,cC);
        console.log("2" + rC + cC + sC)
      }else if(!board.hasColConflictAt(cC) && !board.hasRowConflictAt(rC)){
        sC++;
        rC++;
        recurse(rC,cC);
        console.log("3" + rC + cC + sC)
      }
    }
  // debugger;
  recurse(rC, cC);
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
