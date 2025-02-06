console.log('Script is working');

const body = document.querySelector('body');

const container = document.querySelector('.container');

const phraseOne = document.querySelector('p');

const button = document.querySelector('button');

const title = document.querySelector('h1');

let index = 0;
let secondsPassed = 0;
let opacity = 0;
let increasing = true;
const duration = 4000;
const interval = 16;
const step = interval / duration;

let boxShadowSize = 5;
let growing = true;

const phraseArray = ['', 'Hola mi amor :)', 'Espero que estes bien orita', 'Me imagino que mirando la fecha, sabes que esta pronto de venir', 'Te amo mucho mi amor', 'Este tiempo que hemos tenido juntos han sido unos de mis mas felices', 'Que feliz me haces amor :)', 'Te queria hacer esto porque es mi forma tambien de hacerlo', 'Perdon si es un poco nErRdY para ti amor, jajaja', 'Te amo my love', 'Cuando estes lista, presiona el boton :)'];

button.disabled = true;

body.style.background = `rgb(0, 0, 0)`;


let startUp = function() {
    let newSentence = setInterval(() => {
        index = (index + 1) % phraseArray.length;
        phraseOne.textContent = phraseArray[index];
        console.log(phraseOne);
        container.append(phraseOne);
    }, 8000);

    btnShadow();

    setTimeout(() => {
    clearInterval(newSentence);
    button.disabled = false;
    console.log('Time is up');
}, 88000);
}

startUp();

function btnShadow() {
    boxShadowSize;
    setInterval(() => {
        if(growing) {
            boxShadowSize += 1;
            if(boxShadowSize >= 15) {
                growing = false;
            }
        } else {
            boxShadowSize -= 1;
            if(boxShadowSize <= 5) {
                growing = true;
            }
        }
        button.style.boxShadow = `0 0 ${boxShadowSize}px 0`;
    }, 100);
}

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

button.addEventListener('click', (e) => {
    e.preventDefault();
    body.style.backgroundColor = '#ffb6c1';
    button.style.opacity = '0';
    title.style.opacity = '0';
    phraseOne.style.display = 'none';
    phraseOne.remove();
    askQuestion();
    setInterval(() => {
        button.style.display = 'none';
    }, 2000);
});

const nextPageArray = ['QUEEEEE PORQUE ESCOJISTE NO???!!!!', 'NO ME QUIERES???', 'OK, YA HICISTE TU DESICION!!!!!', 'BYE!!!'];

let changing = true;
let a;
let b;
let c;
let d;
let e;
let f;

function askQuestion() {
    let opacity = 0;
    let maxOpacity = 100;
    const question = document.createElement('p');
    question.classList.add('question');
    question.textContent = 'Will You Be My Valentine?';

    
    
    const yes = document.createElement('button');
    yes.classList.add('yes-button');
    yes.textContent = 'Si';

    const no = document.createElement('button');
    no.classList.add('no-button');
    no.textContent = 'No';

    const fadeInEffect = () => {
        if(opacity < maxOpacity) {
            opacity += 3;
            question.style.opacity = opacity + '%';
            yes.style.opacity = opacity + '%';
            no.style.opacity = opacity + '%';
            requestAnimationFrame(fadeInEffect);
        }
    }

    fadeInEffect();

    container.append(question, yes, no);

    no.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('This button works');
        container.style.gridTemplateRows = 'repeat(3, 1fr)';
        body.style.background = '#ff000d';
        setInterval(changeColor, interval);
        question.textContent = '';
        question.style.fontSize = '20px';
        question.style.fontWeight = 'bolder';
       
        setTimeout(() => {
            question.textContent = nextPageArray[0];
        }, 25)
        setInterval(() => {
            index = (index + 1) % nextPageArray.length;
            question.textContent = nextPageArray[index];
        }, 3000)

        // setTimeout(() => {
        //     window.close();
        // }, 11500);
    });
}

function changeColor() {
    if(growing) {
        a = 8;
        b = 'b'
        c = 0;
        d = 0;
        e = 0;
        f = 0;
        if(a == 8 && b == 'b' && c == 0 && d == 0 && e == 0 && f == 0) {
            growing = false;
        }
    } else {
        a = 'f';
        b = 'f';
        c = 0;
        d = 0;
        e = 0;
        f = 'd';
        if(a == 'f' && b == 'f' && c == 0 && d == 0 && e == 0 && f == 'd') {
            growing = true;
        }
    }
    body.style.background = `#${a}${b}${c}${d}${e}${f}`;
}