

function  hideResults() {
    bob.setAttribute('class', 'hidden');
    julie.setAttribute('class', 'hidden');
    crow.setAttribute('class', 'hidden');
    robin.setAttribute('class', 'hidden');
}

function partyTime() {
    document.querySelector('form').onsubmit = function(e) {
        e.preventDefault();
        const age = parseInt(document.querySelector('input#age').value);
        const height = parseInt(document.querySelector('input#height').value);
        const catsOrDogs = document.querySelector('input#animal').value;

        if ((age >=25 && age <=50) && height > 72 && catsOrDogs === 'cats') {
            bob.removeAttribute('class');
    }
}
}

window.onload = function() {
    hideResults();
    partyTime();

let bob = document.getElementById('bob');
let julie = document.getElementById('julie');
let crow = document.getElementById('crow');
let robin = document.getElementById('robin');

}