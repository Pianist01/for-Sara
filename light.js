console.log('Page is working');

const title = document.querySelector('h1');
const mainContainer = document.querySelector('main');
const contentContainerOne = document.createElement('div');
contentContainerOne.classList.add('info-one');
const body = document.querySelector('body');
const startButton = document.createElement('button');
startButton.classList.add('activate');
startButton.textContent = 'Click :)';
startButton.style.opacity = '100';
body.append(startButton);

window.onload = function() {
    disableScroll();
    title.style.opacity = '100';
    contentContainerOne.style.gridRow = '2/16';
    contentContainerOne.style.height = '100%';
    mainContainer.append(contentContainerOne);
}

startButton.addEventListener('click', (e) => {
  e.preventDefault();
  startButton.style.opacity = '0';
  enableScroll();
  if(localStorage.getItem('playAudio') === 'true') {
    localStorage.removeItem('playAudio');
    let audio = document.getElementById('myAudio');
    audio.play().catch(error => console.log('Autoplay blocked', error));
  }
});

function disableScroll() {
  window.scrollTo(0, 0);
  body.style.overflow = 'hidden';

  window.addEventListener('scroll', preventScroll);
  window.addEventListener('wheel', preventScroll, {passive: false});
  window.addEventListener('touchmove', preventScroll, {passive: false});
  window.addEventListener('keydown', preventArrowKeys);
}

function enableScroll() {
  body.style.overflow = 'auto';

  window.removeEventListener('scroll', preventScroll);
  window.removeEventListener('wheel', preventScroll);
  window.removeEventListener('touchmove', preventScroll);
  window.removeEventListener('keydown', preventArrowKeys);
}

function preventScroll(event) {
  event.preventDefault();
}

function preventArrowKeys(event) {
  const keys = [37, 38, 39, 40];
  if(keys.includes(event.keyCode)) {
    event.preventDefault();
  }
}

const dateTwoArray = ['', 'Hola amor :), para esta cita igual tenemos desayuno, nuestra actividad, y cena', 'Igual como el otro, no tenemos horario en cuando tenemos que hacer todo, menos para la actividad', 'Ahora para el desayuno mi amor', 'Desayuno', 'Burnt Crumbs', 'Burnt Crumbs es un restuarante Americano que tiene comida como omeletes, pancakes gordas, galletas, burritos, y sandwich, y mas. Aqui esta el link:', 'Actividad', 'Astra Lumina', 'Astra Lumina es un lugar donde literalmente tienen luzes en un jardin y se mira como que estas en el espacio explorando las estrellas. Toma una hora para caminar todo el parque y es lugar muy bueno para tomar fotos amor. Aqui esta el link para que mires todas las fotos en su pagina:', 'Cena', 'INI Ristorante by Kei Concepts', 'INI Ristorante es un lugar italiano con conceptos Japoneses tambien. Tiene la comida italiana tipica, pero tambien versiones con un toque Japones. Entonces en alguna pasta le ponen un huevo estrellado encima como lo hacen en la sopas en Japon. Como siempre amor, aqui esta el link:'];

const dateOneLink = document.createElement('p');
dateOneLink.classList.add('food-link');
dateOneLink.textContent = 'El menu amor :)';
contentContainerOne.append(dateOneLink);

let index = 0;
let infoText;
let textNumber = 0;

let lastScroll = 0;
let triggerPoint = 700;
let opacity = 0;
let maxOpacity = 100;
const foodContainer = document.createElement('div');
const foodImage = document.createElement('img');
foodImage.classList.add('food');
foodImage.src = 'img/datetwofood.jpg';
window.addEventListener('scroll', function() {
    if(window.scrollY >= lastScroll + triggerPoint) {
        lastScroll += triggerPoint;
        infoText = document.createElement('p');
        infoText.classList.add(`info-text${textNumber += 1}`);
        infoText.textContent = dateTwoArray[index += 1];
        infoText.style.opacity = '100';
        contentContainerOne.style.opacity = '100';
        contentContainerOne.append(infoText);
        console.log(infoText);
        if(window.scrollY >= 3500) {
            foodContainer.classList.add('food-box');

            foodContainer.append(foodImage);
            contentContainerOne.append(foodContainer);
        }
    }
});

const observer = new IntersectionObserver((entries, observer) => {
    if(entries[0].isIntersecting) {
      foodContainer.classList.add('visible');
      observer.disconnect();
    }
  }, {threshold: 0.1, 
      rootMargin: '200px'
  });
  
observer.observe(foodContainer);

const foodObserver = new IntersectionObserver((entries, observer) => {
    if (entries[0].isIntersecting) {
      console.log("Element is visible!");
      
      dateOneLink.classList.add('visible');
      
      observer.disconnect(); 
    }
  }, {
    rootMargin: "100px",
    threshold: 0.1
  });
  
foodObserver.observe(dateOneLink);

dateOneLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.open('https://www.yelp.com/biz/burnt-crumbs-irvine', '_blank');
});

const activityImageBox = document.createElement('div');
activityImageBox.classList.add('activity-imgBox');
const activityImage = document.createElement('img');
activityImage.src = 'img/datetwoactivity.webp';
activityImage.classList.add('activity-image')
activityImageBox.append(activityImage);
contentContainerOne.append(activityImageBox);

const activityOneLink = document.createElement('p');
activityOneLink.classList.add('activity-link');
activityOneLink.textContent = 'La pagina de las luzes amor :)';
contentContainerOne.append(activityOneLink);

const activityObserver = new IntersectionObserver((entries, observer) => {
    if(entries[0].isIntersecting) {
      activityImageBox.classList.add('visible');
      observer.disconnect();
    }
  }, {
    threshold: 0.1
  });

activityObserver.observe(activityImageBox);

const actLinkObserver = new IntersectionObserver((entries, observer) => {
    if(entries[0].isIntersecting) {
      activityOneLink.classList.add('visible');
      observer.disconnect();
    }
    }, {
      threshold: 0.1
  });
  
actLinkObserver.observe(activityOneLink);

activityOneLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.open('https://astralumina.com/los-angeles/?utm_source=google&utm_medium=localcards&utm_campaign=138685_LAX', '_blank');
});

const dinnerBox = document.createElement('div');
dinnerBox.classList.add('dinner-box');
const dinnerImage = document.createElement('img');
dinnerImage.classList.add('dinner-image');
dinnerImage.src = 'img/inirestaurant.jpg';
dinnerBox.append(dinnerImage);
contentContainerOne.append(dinnerBox);

const dinnerLink = document.createElement('p');
dinnerLink.classList.add('dinner-link');
dinnerLink.textContent = 'El menu :)';
contentContainerOne.append(dinnerLink);

const returnButton = document.createElement('button');
returnButton.classList.add('return-btn');
returnButton.textContent = 'Regresar';
contentContainerOne.append(returnButton);

const dinnerObserver = new IntersectionObserver((entries, observer) => {
  if(entries[0].isIntersecting) {
    dinnerBox.classList.add('visible');
    observer.disconnect();
  }
  }, {
    threshold: 0.1
});

dinnerObserver.observe(dinnerBox);

const dinnerLinkObserver =  new IntersectionObserver((entries, observer) => {
  if(entries[0].isIntersecting) {
    dinnerLink.classList.add('visible');
    observer.disconnect();
  }
  }, {
    threshold: 0.1
});

dinnerLinkObserver.observe(dinnerLink);

const btnObserver = new IntersectionObserver((entries, observer) => {
  if(entries[0].isIntersecting) {
    returnButton.classList.add('visible');
    observer.disconnect()
  }
  }, {
    threshold: 0.1
});

btnObserver.observe(returnButton);

dinnerLink.addEventListener('click', (e) => {
  e.preventDefault();
  window.open('https://www.yelp.com/biz/ini-ristorante-by-kei-concepts-fountain-valley-3?osq=ini+resturante', '_blank');
});

returnButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = 'activities.html';
});
