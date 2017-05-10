
function gameRandomNumber(){
  var theNumber = Math.floor(Math.random() * 101);
  var guesses = 1;
  var finished = false;

  while(!finished) {
    var answer = parseInt(prompt("I'm thinking of a number in the range 1 to 100\nWhat is the number?"));
    finished = checkGuess(theNumber, answer, guesses);
    guesses++;
  }
}

function checkGuess(theNumber, answer, guesses){
  if(isNaN(answer)){
    alert("You have not entered a number \n\nPlease enter a number in the range 1 to 100.");
  }
  else if(answer > theNumber){
    alert("You number is too large!");
  }
  else if(answer < theNumber){
    alert("Your number is too small");
  }
  else if(answer == theNumber){
    alert("You got it! The number was " + answer + "\n\nIt took you " + guesses + " guesses to get the number!");
    return true;
  }
  return false;
}
