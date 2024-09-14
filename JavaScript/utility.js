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
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function addBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add("bg-orange-400");
}

function removeBackgroundColorById(elementId){
    const element =document.getElementById(elementId);
    element.classList.remove("bg-orange-400");
}

function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    return element.innerText;
}