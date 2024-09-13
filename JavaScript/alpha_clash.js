
// function play(){

//     const homeSection = document.getElementById("home-screen");
//     homeSection.classList.add("hidden");

//     const playSection = document.getElementById("paly-section");
//     playSection.classList.remove("hidden");
// }

function continueGame(){
    const alphabet = getARandomAlphabet();
    console.log(alphabet)

    // sst alphabet

    const currentAlphabetElement = document.getElementById("current-alphabet");
    currentAlphabetElement.innerText = alphabet;
    const alphabetLower = alphabet.toLowerCase();
    // set background color
    addBackgroundColorById(alphabetLower);
}

function play(){
    hideElementById("home-screen");
    showElementById("play-section");
    continueGame();
}