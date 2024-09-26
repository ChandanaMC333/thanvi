const containerE1 = document.querySelector(".container");

const careers = ["Dancer","Developer","Model"];

let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText(){
    containerE1.innerHTML = '
        <h1>I am a ${careers[careerIndex].slice(0,2)} </h1>
';
}

