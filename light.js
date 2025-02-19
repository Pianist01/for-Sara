console.log('Page is working');

const title = document.querySelector('h1');
const mainContainer = document.querySelector('main');
const contentContainerOne = document.createElement('div');
contentContainerOne.classList.add('info-one');

window.onload = function() {
    title.style.opacity = '100';
    contentContainerOne.style.gridRow = '2/16';
    contentContainerOne.style.height = '100%';
    mainContainer.append(contentContainerOne);
}

const dateTwoArray = ['', 'Hola amor :), para esta cita igual tenemos desayuno, nuestra actividad, y cena', 'Igual como el otro, no tenemos horario en cuando tenemos que hacer todo, menos para la actividad', 'Ahora para el desayuno mi amor', 'Desayuno'];
