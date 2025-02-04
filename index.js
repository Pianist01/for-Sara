console.log('Script is working');

const body = document.querySelector('body');

const container = document.querySelector('.container');

const phraseOne = document.querySelector('p');

const button = document.querySelector('button');

<<<<<<< HEAD
=======
const title = document.querySelector('h1');

>>>>>>> d50a55a581250c0b936e1ce5634fdacffeae1db7
let index = 0;
let secondsPassed = 0;
let opacity = 0;
let increasing = true;
const duration = 4000;
const interval = 16;
const step = interval / duration;

let r = 0;
let g = 0;
let b = 0;

const phraseArray = ['', 'Hola mi amor :)', 'Espero que estes bien orita', 'Me imagino que mirando la fecha, sabes que esta pronto de venir', 'Te amo mucho mi amor', 'Este tiempo que hemos tenido juntos han sido unos de mis mas felices', 'Que feliz me haces amor :)', 'Te queria hacer esto porque es mi forma tambien de hacerlo', 'Perdon si es un poco nErRdY para ti amor, jajaja', 'Te amo my love', 'Cuando estes lista, presiona el boton :)'];

button.disabled = true;

body.style.background = `rgb(${r}, ${g}, ${b})`;

button.disabled = true;


let startUp = function() {
    let newSentence = setInterval(() => {
        index = (index + 1) % phraseArray.length;
        phraseOne.textContent = phraseArray[index];
        console.log(phraseOne);
        container.append(phraseOne);
    }, 8000);

    setTimeout(() => {
    clearInterval(newSentence);
    button.disabled = false;
    console.log('Time is up');
}, 88000);
}

button.addEventListener('click', (e) => {
    console.log('It Works');
    body.style.backgroundColor = 'pink';
    button.style.opacity = '0';
    setInterval(() => {
        button.style.display = 'none';
    }, 3000);
});

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
<<<<<<< HEAD
}, 1000);
=======
}, 1000);

button.addEventListener('click', (e) => {
    e.preventDefault();
    body.style.opacity = '0';
    
    button.style.opacity = '0';
    title.style.opacity = '0';
    setInterval(() => {
        button.style.display = 'none';
    }, 2000);
});

function changeBackground() {
    r += 1;
    g += 1;
    b += 1;
    if(r && g && b <= 0) {
        
    }
}
>>>>>>> d50a55a581250c0b936e1ce5634fdacffeae1db7
