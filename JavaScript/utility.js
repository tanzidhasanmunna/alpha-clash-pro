function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');

}

function getARandomAlphabet(){
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return alphabet[Math.round(Math.random() * alphabet.length)];
}

function addBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add("bg-orange-400");
}
