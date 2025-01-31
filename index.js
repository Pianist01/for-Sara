console.log('Script is working');

const body = document.querySelector('body');

const container = document.querySelector('.container');

const phraseOne = document.querySelector('p');

let index = 0;
let secondsPassed = 0;
let opacity = 0;
let maxOpacity = 100;
let opacityEnd = 0;

const phraseArray = ['', 'Hola mi amor :)', 'Espero que estes bien orita', 'Me imagino que mirando la fecha, sabes que esta pronto de venir', 'Te amo mucho mi amor', 'Este tiempo que hemos tenido juntos han sido unos de mis mas felices', 'Que feliz me haces amor :)', 'Te queria hacer esto porque es mi forma tambien de hacerlo', 'Perdon si es un poco nErRdY para ti amor, jajaja', 'Te amo my love', 'Cuando estes lista, presiona el boton :)'];

// let isHidden = true;


let startUp = function() {
    let newSentence = setInterval(() => {
        index = (index + 1) % phraseArray.length;
        phraseOne.textContent = phraseArray[index];
        showAndGo();
        console.log(phraseOne);
        container.append(phraseOne);
    }, 6000);

//     setTimeout(() => {
//     clearInterval(newSentence);
// }, 60000);
}

startUp();

function showAndGo() {
    opacity = 0;
    maxOpacity;
    setInterval(() => {
        const showWord = () => {
            opacity += 3;
            phraseOne.style.opacity = opacity + '%';
            if(opacity < maxOpacity) {
                requestAnimationFrame(showWord);
            }
        }
        showWord();
    }, 3000);

    setInterval(() => {
        const goAway = () => {
            opacity -= 3;
            phraseOne.style.opacity = opacity + '%';
            if(opacity > opacityEnd) {
                requestAnimationFrame(goAway);
            }
        }
        goAway();
    }, 5000);
}

showAndGo();

setInterval(() => {
    secondsPassed++;
    console.log(`${secondsPassed}`);
}, 1000);
