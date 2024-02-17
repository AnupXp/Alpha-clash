function play() {
  // add hidden class in home screen to show playground
  const homeScreen = document.getElementById("home-screen");
  homeScreen.classList.add("hidden");

  // hide final score
  const finalScore = document.getElementById("result-screen");
  finalScore.classList.add("hidden");

  // remove hidden class in playground for show playground
  const playGround = document.getElementById("play-ground");
  playGround.classList.remove("hidden");
  continueGame();
  // set life as new
  const currentLifeElement = document.getElementById("current-life");
  currentLifeElement.innerText = 5;
  // set score as new
  const currentScoreElement = document.getElementById("current-score");
  currentScoreElement.innerText = 0;
}
function gameOver() {
  // add hidden class in playground screen to show result
  const homeScreen = document.getElementById("play-ground");
  homeScreen.classList.add("hidden");
  // remove hidden class in playground for show playground
  const finalScore = document.getElementById("result-screen");
  finalScore.classList.remove("hidden");

  // update final score
  const currentScoreElement = document.getElementById("current-score");
  const currentScoreText = currentScoreElement.innerText;
  const lastScore = document.getElementById("game-score");
  lastScore.innerText = currentScoreText;

  // clear part
  const currentAlphabet = getElementText("current-element");
  deleteElementId(currentAlphabet);
}

// function for clear key bg
function getElementText(elementId) {
  const elementText = document.getElementById(elementId);
  const text = elementText.innerText;
  return text;
}
// keyboard
function detectKeyPress(event) {
  const playerPress = event.key;
  //   expect press
  const currentAlphabet = document.getElementById("current-element");
  const getCurrentAlphabet = currentAlphabet.innerText;
  const finalAlphabet = getCurrentAlphabet.toLowerCase();
  if (finalAlphabet === playerPress) {
    // score part
    const currentScoreElement = document.getElementById("current-score");
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);
    const newScore = currentScore + 1;
    // show score
    currentScoreElement.innerText = newScore;
    continueGame();
    deleteElementId(finalAlphabet);
  } else {
    // life part
    const currentLifeElement = document.getElementById("current-life");
    const currentLifeText = currentLifeElement.innerText;
    const currentLife = parseInt(currentLifeText);
    const newLife = currentLife - 1;
    currentLifeElement.innerText = newLife;
    if (newLife === 0) {
      gameOver();
    }
  }
}
// capture key press
document.addEventListener("keyup", detectKeyPress);

// continue
function continueGame() {
  const alphabet = getRandomAlphabet();
  const getElementInId = document.getElementById("current-element");
  //   console.log(getElementInId);
  getElementInId.innerText = alphabet;
  //   set bg btn bg color
  setElementId(alphabet);
}
// utilities
function getRandomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");
  //   console.log(alphabets)
  // get random num 0-25
  const randomNum = Math.random() * 25;
  const index = Math.round(randomNum);
  const alphabet = alphabets[index];
  return alphabet;
}
function setElementId(elementID) {
  const focus = document.getElementById(elementID);
  focus.classList.add("bg-orange-400");
}
function deleteElementId(elementID) {
  const focus = document.getElementById(elementID);
  focus.classList.remove("bg-orange-400");
}
