const buttons = document.querySelectorAll("button");

function computerRandom() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function game(playerSelection) {
  let = result = "";
  let computerSelection = computerRandom();
  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    result = "Human Wins";
  } else if (playerSelection == computerSelection) {
    result = "It's a tie";
  } else {
    result = "Computer wins";
  }
  document.getElementById("result").innerHTML = result;
  return;
}

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    game(button.value);
  });
});
