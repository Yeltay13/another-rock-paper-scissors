let playerScore = 0;
let computerScore = 0;
const images = document.querySelectorAll("img");

function computerRandom() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function disableImages() {
  images.forEach((image) => {
    image.disabled = true;
  });
}

function game(playerSelection) {
  let = result = "";
  let computerSelection = computerRandom();
  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    playerScore += 1;
    result =
      "You win! " +
      playerSelection +
      " beats " +
      computerSelection +
      "<br><br>Player score: " +
      playerScore +
      "<br>Computer score: " +
      computerScore;

    if (playerScore == 5) {
      result += "<br><br>You won the game! Reload the page to play again";
      disableImages();
    }
  } else if (playerSelection == computerSelection) {
    result =
      "It's a tie. You both chose " +
      playerSelection +
      "<br><br>Player score: " +
      playerScore +
      "<br>Computer score: " +
      computerScore;
  } else {
    computerScore += 1;
    result =
      "You lose! " +
      computerSelection +
      " beats " +
      playerSelection +
      "<br><br>Player score: " +
      playerScore +
      "<br>Computer score: " +
      computerScore;

    if (computerScore == 5) {
      result += "<br><br>I won the game! Reload the page to play again";
      disableImages();
    }
  }
  document.getElementById("result").innerHTML = result;
  return;
}

images.forEach((image) => {
  image.addEventListener("click", function () {
    game(image.className);
  });
});
