console.log('Script is working');

const body = document.querySelector('body');

const container = document.querySelector('.container');

const phraseOne = document.querySelector('p');

let index = 0;
let secondsPassed = 0;
let opacity = 0;
let increasing = true;
const duration = 4000;
const interval = 16;
const step = interval / duration;

const phraseArray = ['', 'Hola mi amor :)', 'Espero que estes bien orita', 'Me imagino que mirando la fecha, sabes que esta pronto de venir', 'Te amo mucho mi amor', 'Este tiempo que hemos tenido juntos han sido unos de mis mas felices', 'Que feliz me haces amor :)', 'Te queria hacer esto porque es mi forma tambien de hacerlo', 'Perdon si es un poco nErRdY para ti amor, jajaja', 'Te amo my love', 'Cuando estes lista, presiona el boton :)'];

// let isHidden = true;


let startUp = function() {
    let newSentence = setInterval(() => {
        index = (index + 1) % phraseArray.length;
        phraseOne.textContent = phraseArray[index];
        console.log(phraseOne);
        container.append(phraseOne);
    }, 8000);

    setTimeout(() => {
    clearInterval(newSentence);
}, 88000);
}

startUp();

function fadeEffect() {
    if(increasing) {
        opacity += step;
        if(opacity >= 1) {
            opacity = 1;
            increasing = false;
        }
    } else {
        opacity -= step;
        if(opacity <= 0) {
            opacity = 0;
            increasing = true;
        }
    }
    phraseOne.style.opacity = opacity;
}

setInterval(fadeEffect, interval);


setInterval(() => {
    secondsPassed++;
    console.log(`${secondsPassed}`);
}, 1000);

let remind = setInterval(() => {
    const reminder = document.createElement('h2');
    reminder.textContent = 'Sube tu volumne amor :)';
    reminder.style.color = 'white';
    reminder.style.opacity = '100';
    body.append(reminder);
    console.log('Pon Tu volumne para arriba amor :)');
}, 5000);

setTimeout(() => {
    clearInterval(remind);
}, 9000);
