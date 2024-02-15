function play() {
  // add hidden class in home screen to show playground
  const homeScreen = document.getElementById("home-screen");
  homeScreen.classList.add("hidden");
  // remove hidden class in playground for show playground
  const playGround = document.getElementById("play-ground");
  playGround.classList.remove("hidden");
  continueGame();
}
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
function setElementId(elementID){
    const focus=document.getElementById(elementID);
    focus.classList.add('bg-orange-400')
}