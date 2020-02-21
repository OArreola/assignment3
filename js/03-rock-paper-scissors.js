function getUserChoice() {
  let validUserChoice;
  validUserChoice = false;
  do {
    userChoice = window.prompt("Choose r = rock, p = paper, or s = scissors:");
    if (userChoice === "r" || userChoice === "p" || userChoice === "s") {
      validUserChoice = true;
    } else {
      validUserChoice = false;
      window.alert("I can't understand your selection, please try again.");
    }
  } while (!validUserChoice);
  return userChoice;
}

function getComputerChoice() {
  let randomChoice = parseInt(Math.random() * 3);
  let computerChoice;
  let computerChoiceString;
  if (randomChoice === 0) {
    computerChoice = "r";
    computerChoiceString = "rock";
  } else if (randomChoice === 1) {
    computerChoice = "p";
    computerChoiceString = "paper";
  } else {
    computerChoice = "s";
    computerChoiceString = "scissors";
  }
  window.alert("The computer chooses " + computerChoiceString);
  return computerChoice;
}

function checkWhoWins(userChoice, computerChoice) {
  let tiedGame = false;
  let userWins = false;
  let message = "";
  if (computerChoice === "r") {
    if (userChoice === "r") {
      tiedGame = true;
      message = "Tied game, nobody wins.";
    } else if (userChoice === "p") {
      userWins = true;
      message = "Paper covers rock.";
    } else {
      //"s"
      message = "Rock destroys scissors.";
    }
  } else if (computerChoice === "p") {
    if (userChoice === "r") {
      message = "Paper covers rock.";
    } else if (userChoice === "p") {
      tiedGame = true;
      message = "Tied game, nobody wins.";
    } else {
      //"s"
      userWins = true;
      message = "Scissors cut paper.";
    }
  } else {
    //"s"
    if (userChoice === "r") {
      userWins = true;
      message = "Rock destroys scissors.";
    } else if (userChoice === "p") {
      message = "Scissors cut paper.";
    } else {
      //"s"
      tiedGame = true;
      message = "Tied game, nobody wins.";
    }
  }

  //Create final message
  if (tiedGame) {
    //No change
  } else if (userWins) {
    message = message + "\nCongrats you won!!!";
  } else {
    message = message + "\nSorry, you loose.";
  }
  window.alert(message);

  return tiedGame;
}

function main() {
  let userChoice;
  let computerChoice;
  let tiedGame;
  let playAgainOption;
  window.alert("Welcome to the Rock, Paper, Scissors game");
  do {
    playAgainOption = "n";
    userChoice = getUserChoice();
    computerChoice = getComputerChoice();
    tiedGame = checkWhoWins(userChoice, computerChoice);
    if (tiedGame) {
      playAgainOption = window.prompt(
        "You tied, so, do you want to try again (y/n)?"
      );
    }
  } while (playAgainOption === "y");
  window.alert("End of game");
}

main();
