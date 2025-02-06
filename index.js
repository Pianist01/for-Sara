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

<<<<<<< HEAD
=======
let boxShadowSize = 5;
let growing = true;

>>>>>>> fafe18f3cc903cf23cfeb53d12b783656931b4f3
const phraseArray = ['', 'Hola mi amor :)', 'Espero que estes bien orita', 'Me imagino que mirando la fecha, sabes que esta pronto de venir', 'Te amo mucho mi amor', 'Este tiempo que hemos tenido juntos han sido unos de mis mas felices', 'Que feliz me haces amor :)', 'Te queria hacer esto porque es mi forma tambien de hacerlo', 'Perdon si es un poco nErRdY para ti amor, jajaja', 'Te amo my love', 'Cuando estes lista, presiona el boton :)'];

button.disabled = true;

<<<<<<< HEAD

button.disabled = true;
=======
body.style.background = `rgb(0, 0, 0)`;
>>>>>>> fafe18f3cc903cf23cfeb53d12b783656931b4f3


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
<<<<<<< HEAD
    container.style.display = 'none';
=======
    phraseOne.style.display = 'none';
    phraseOne.remove();
>>>>>>> fafe18f3cc903cf23cfeb53d12b783656931b4f3
    askQuestion();
    setInterval(() => {
        button.style.display = 'none';
    }, 2000);
});

<<<<<<< HEAD
function askQuestion() {
    phraseOne.textContent = 'Amor quieres hacer mi valentine?'
    phraseOne.style.opacity = '100';
    // const question = document.createElement('p');
    // question.textContent = 'Amor quieres hacer mi valentine?';
    // question.style.opacity = '100';
    // question.classList.add('question');
    // body.append(question);
}
=======
const nextPageArray = ['QUEEEEE PORQUE ESCOJISTE NO???!!!!', 'NO ME QUIERES???', 'OK, YA HICISTE TU DESICION!!!!!', 'BYE!!!'];

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
        setInterval(() => {
           body.style.background = '#8b0000'; 
        }, 2000);

        setInterval(() => {
            body.style.background = '#ff000d';
        }, 3000);
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
>>>>>>> fafe18f3cc903cf23cfeb53d12b783656931b4f3
