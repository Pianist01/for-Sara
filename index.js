console.log('Script is working');

const body = document.querySelector('body');

const container = document.querySelector('.container');

const phraseOne = document.querySelector('p');

let index = 0;
let opacity;
const opacityEnd = 100;
const baseOpacity = 0;

const phraseArray = ['', 'Hola mi amor :)', 'Espero que estes bien orita', 'Me imagino que mirando la fecha, sabes que esta pronto de venir', 'Te amo mucho mi amor', 'Este tiempo que hemos tenido juntos han sido unos de mis mas felices', 'Que feliz me haces amor :)', 'Te queria hacer esto porque es mi forma tambien de hacerlo', 'Perdon si es un poco nErRdY para ti amor, jajaja', 'Te amo my love', 'Cuando estes lista, presiona el boton'];


window.onload = function() {
    let newSentence = setInterval(() => {
        index = (index + 1) % phraseArray.length;
        phraseOne.textContent = phraseArray[index];
        showUp();
        console.log(phraseOne);
        container.append(phraseOne);
    }, 10000);

    setTimeout(() => {
    clearInterval(newSentence);
}, 100000);
}

function showUp() {
    opacity = 0;
    opacityEnd;

    const animateShow = () => {
        opacity += 3;

        phraseOne.style.opacity = opacity + '%';
        if(opacity < opacityEnd) {
            requestAnimationFrame(animateShow);
        }
    }
    animateShow();

    let goAway = setInterval(() => {
        const animateAway = () => {
            opacity -= 3;
            phraseOne.style.opacity = opacity + '%';
            if(opacity > baseOpacity) {
                requestAnimationFrame(animateAway);
            }
        }
        animateAway();
    }, 8000);
}