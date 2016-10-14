// Rock Paper Permutation
// Given a number of rounds n, return all the possible rock-paper-scissors play possibilities for that number of rounds.

// INPUT: roundCount: 2
// OUTPUT: [ "rr", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss" ]

// INPUT: roundCount: 1
// OUTPUT: [ "r", "p", "s" ]

function rockPaperPermutation (roundCount) {
  var outcomes = [];
  var plays = ["r", "p", "s"];
  // recursive function
  if(roundCount){
    var recurse = function(rounds){
    // base case
    if(rounds.length === roundCount){
      // copy playedOutcomes into outcomes
      outcomes.push(rounds);
      return;
    }
    // recursive case
    for(var i = 0; i < plays.length; i++){
      recurse(rounds + plays[i])
      }
    };
  recurse('');
  }
  return outcomes;
}
