console.log('Script is working');

const title = document.querySelector('h1');
const mainContainer = document.querySelector('main');
const contentContainer = document.createElement('div');
contentContainer.classList.add('info-one');

window.onload = function() {
    title.style.opacity = '100';
    contentContainer.style.gridRow = 2/4;
    contentContainer.style.height = '100%';
    mainContainer.append(contentContainer);
}

const txtArray = ['', 'Para este plan, tenemos desayuno, una actividad, y cena', 'No hay horario en cuando tenemos que hacer todo, menos la actividad'];

let index = 0;
// index = (index + 1) % txtArray.length;
let infoText;
let textNumber = 0;

let lastScroll = 0;
let triggerPoint = 500;
window.addEventListener('scroll', function() {
    if(window.scrollY >= lastScroll + triggerPoint) {
        lastScroll += triggerPoint;
        infoText = document.createElement('p');
        infoText.classList.add(`info-text${textNumber += 1}`);
        infoText.textContent = txtArray[index += 1];
        infoText.style.opacity = '100';
        contentContainer.style.opacity = '100';
        contentContainer.append(infoText);
        console.log(infoText);
    }
});
