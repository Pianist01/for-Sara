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
let duration = 3800;
const interval = 18;
const step = interval / duration;

let boxShadowSize = 5;
let growing = true;

const phraseArray = ['', 'Hola mi amor :)', 'Espero que estes bien orita', 'Me imagino que mirando la fecha, sabes que esta pronto de venir', 'Te amo mucho mi amor', 'Este tiempo que hemos tenido juntos han sido unos de mis mas felices', 'Que feliz me haces amor :)', 'Te queria hacer esto porque es mi forma tambien de hacerlo', 'Perdon si es un poco nErRdY para ti amor, jajaja', 'Te amo my love', 'Cuando estes lista, presiona el boton :)'];

button.disabled = false;

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
    phraseOne.style.display = 'none';
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
    body.style.backgroundColor = 'rgb(255, 182, 193)';
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
        question.textContent = '';
        question.style.fontSize = '20px';
        question.style.fontWeight = 'bolder';
       
        setTimeout(() => {
            question.textContent = nextPageArray[0];
        }, 25)
        setInterval(() => {
            index = (index + 1) % nextPageArray.length;
            question.textContent = nextPageArray[index];
        }, 4000)

        setTimeout(() => {
            window.close();
        }, 11500);
    });

    yes.addEventListener('click', (e) => {
        e.preventDefault();
        no.style.opacity = '0';
        yes.style.opacity = '0';
        question.style.opacity = '0';
        body.style.gridTemplateRows = 'repeat(3, 1fr)';
        setTimeout(() => {
            no.style.display = 'none';
            yes.style.display = 'none';
        }, 3000)
        displayVideo();
    });
}

const yesArray = ['', 'Hola :)', 'Mi valentine :), te amo', 'Planee 3 cosas que puedemos hacer', 'Ahora tu vas a escoger cual quieres hacer', 'En cada uno de los planes hay un dia entero', 'Tiene todo los detalles, solo tienes que escoger', 'Sigale a la proxima pagina para comenzar :)'];

function displayVideo() {
    let maxOpacity = 100;

    const videoOverlay = document.createElement('video');
    videoOverlay.classList.add('video-box');
    videoOverlay.style.width = '100%';
    videoOverlay.style.height = '100vh';
    videoOverlay.autoplay = true;
    videoOverlay.muted = true;
    videoOverlay.loop = true;
    videoOverlay.playsInline = true;

    const source = document.createElement('source');
    source.classList.add('video-source');
    source.src = 'videos/flowervid.mp4';
    source.type = 'video/mp4';
    videoOverlay.append(source);

    // body.style.opacity = '0';

    setTimeout(() => {
        container.remove();
        body.append(videoOverlay);
        body.style.opacity = '100';
    }, 1000);

    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');

    const yesText = document.createElement('p');
    yesText.classList.add('yes-text');
    textContainer.append(yesText);

    function changeText() {

        yesText.textContent = yesArray[index];

        body.append(textContainer);
        setTimeout(() => {
            yesText.style.opacity = '100';
        }, 10);
    
        setTimeout(() => {
            yesText.style.opacity = '0';
        }, 2000);

        index = (index + 1) % yesArray.length;
    }
    let textInterval = setInterval(changeText, 4000);

    setTimeout(() => {
        clearInterval(textInterval);
    }, 24000)

    setTimeout(() => {
        const nextButton = document.createElement('button');
        nextButton.classList.add('next-button');
        nextButton.textContent = 'Presioname :)';
        const fadeIn = () => {
            if(opacity < maxOpacity) {
                opacity += 3;
                nextButton.style.opacity = opacity + '%';
                requestAnimationFrame(fadeIn);
            }
        }
        fadeIn();
        body.append(nextButton);
        nextButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'activities.html';
        });
    }, 24000)
}
