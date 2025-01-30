console.log('Script is working');

const body = document.querySelector('body');

const container = document.querySelector('.container');

const phraseOne = document.querySelector('p');

let index;

const phraseArray = ['Hola mi amor :)', 'Espero que estes bien orita', 'Me imagino que mirando la fecha, sabes que esta pronto de venir', 'Te amo mucho mi amor', 'Este tiempo que hemos tenido juntos han sido unos de mis mas felices', 'Que feliz me haces amor :)', 'Te queria hacer esto porque es mi forma tambien de hacerlo', 'Perdon si es un poco nErRdY para ti amor, jajaja', 'Te amo my love', 'Cuando estes lista, presiona el boton'];

index = (index + 1) % phraseArray.length;

window.onload = function() {
    // phraseOne.style.display = 'block';
    newSentence();
}

const newSentence = () => {
    let counter = 1;
    setInterval(() => {
        const newPhrase = document.createElement('p');
        newPhrase.textContent = phraseArray[index];
        container.append(newPhrase);
        counter++;
    }, 5000);
}
