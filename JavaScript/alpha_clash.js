// function play(){

//     const homeSection = document.getElementById("home-screen");
//     homeSection.classList.add("hidden");

//     const playSection = document.getElementById("paly-section");
//     playSection.classList.remove("hidden");
// }

function handelKeyboardButtonPress(event) {
  const PlayerPressed = event.key;

  // stop game 
  if (PlayerPressed === 'Escape') {
    gameOver();
  }

  // get the expected press

  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  console.log(PlayerPressed, currentAlphabet);

  if (PlayerPressed === currentAlphabet.toLowerCase()) {
    // Update score
    const scoreElement = document.getElementById("score");
    const score = parseInt(scoreElement.innerText);
    scoreElement.innerText = score + 1;

    // Start a new round
    removeBackgroundColorById(currentAlphabet.toLowerCase());
    continueGame();
  } else {
    const currentLife = document.getElementById("life");
    const life = parseInt(currentLife.innerText);
    if (life > 1) {
      currentLife.innerText = life - 1;
    } else {
        gameOver();
    }
  }
}

document.addEventListener("keyup", handelKeyboardButtonPress);

function continueGame() {
  const alphabet = getARandomAlphabet();

  // sst alphabet

  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;
  const alphabetLower = alphabet.toLowerCase();
  // set background color
  addBackgroundColorById(alphabetLower);
}

function play() {
  // Hide every thing
  hideElementById("final-section");
  hideElementById("home-screen");
  showElementById("play-section");

  // Reset score and life
  setTextElementValueById("life", 5);
  setTextElementValueById("score", 0);

  continueGame();
}

function gameOver(){
    hideElementById("play-section");
    showElementById("final-section");
    // update final score
    const finalScoreElement = document.getElementById("final-score");
    finalScoreElement.innerText = getTextElementValueById("score");

    // clear the last highlight background
    const currentAlphabet = getTextElementValueById("current-alphabet");
    removeBackgroundColorById(currentAlphabet.toLowerCase());
}