console.log('Script is working');

const body = document.querySelector('body');

const container = document.querySelector('.container');

const phraseOne = document.querySelector('p');

let index = 0;
let secondsPassed = 0;
let opacity = 0;
let baseOpacity = 1;
let opacityEnd = 0;

const phraseArray = ['', 'Hola mi amor :)', 'Espero que estes bien orita', 'Me imagino que mirando la fecha, sabes que esta pronto de venir', 'Te amo mucho mi amor', 'Este tiempo que hemos tenido juntos han sido unos de mis mas felices', 'Que feliz me haces amor :)', 'Te queria hacer esto porque es mi forma tambien de hacerlo', 'Perdon si es un poco nErRdY para ti amor, jajaja', 'Te amo my love', 'Cuando estes lista, presiona el boton :)'];

// let isHidden = true;


let startUp = function() {
    let newSentence = setInterval(() => {
        index = (index + 1) % phraseArray.length;
        phraseOne.textContent = phraseArray[index];
        console.log(phraseOne);
        container.append(phraseOne);
    }, 8000);

//     setTimeout(() => {
//     clearInterval(newSentence);
// }, 60000);
}

startUp();

setInterval(() => {
    opacity += .25;
    let showUp = () => {
        phraseOne.style.opacity = opacity;
    if(opacity < baseOpacity) {
        requestAnimationFrame(showUp);
    }
    showUp();
    }
}, 8000);

setInterval(() => {
    opacity -= .25;
    let goAway = () => {
        phraseOne.style.opacity = opacity;
        if(opacity > opacityEnd) {
            requestAnimationFrame(goAway);
        }
    }
}, 14000);

setInterval(() => {
    secondsPassed++;
    console.log(`${secondsPassed}`);
}, 1000);
