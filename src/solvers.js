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
  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
//initiated new Board & counter;
var counter = 0;
var board = new Board({n:n});
//create function
var recurse = function(row){
  //base case of if (row === n)(count++)
  if(row===n) {
    return counter++;
  }
  //for loop that iterates over each column
  for(var col = 0; col<n; col++){
    board.togglePiece(row, col);
    if(!board.hasAnyRooksConflicts()){
      recurse(row+1);
    }
      board.togglePiece(row, col);
  }
}
recurse(0);
//return solution count
return counter;
}

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({n:n});
  var SHOW = [];
  //create recursive function that take row
  var recurse = function(row){
    if(row === n){
  //if the row equals n
    //return solution.rows();
      for(var i = 0; i<solution.rows().length; i++){
        SHOW.push(solution.get(i).slice());
        // var SHOW = _.map(solution.rows(), function(x){return x})
      }
      return;
    }
    //iterate over the columns less than n
    for(var col = 0; col < n; col++){

      //toggle the row/column we're at
      solution.togglePiece(row, col);
      //if there are NO Queen Conflicts
      if(!solution.hasAnyQueensConflicts()){
        //recurse over the next row
        recurse(row+1);
        if(SHOW.length>0){return}
      }
      //else toggle piece
      solution.togglePiece(row, col);

    }
  }

  //call recursive function with row 0
  recurse(0);
  if(SHOW.length>0){return SHOW}
  else{return solution.rows()}
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = new Board({n:n});
  var sC = 0;
  //create recursive function that take row
  var recurse = function(row){
    if(row === n){
  //if the row equals n
    //return solution.rows();
      return sC++;
    }
    //iterate over the columns less than n
    for(var col = 0; col < n; col++){

      //toggle the row/column we're at
      solution.togglePiece(row, col);
      //if there are NO Queen Conflicts
      if(!solution.hasAnyQueensConflicts()){
        //recurse over the next row
        recurse(row+1);
      }
      //else toggle piece
      solution.togglePiece(row, col);

    }
  }
  recurse(0);
  return sC;
};
