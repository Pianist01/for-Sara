console.log('Script is working');

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

const dateOneArray = ['', 'Para este plan, tenemos desayuno, una actividad, y cena', 'No hay horario en cuando tenemos que hacer todo, menos la actividad', 'Para empezar, te voy a ensenar en donde vamos a desayunar para esta cita', 'Desayuno', 'Chuponcito', 'El Chuponzito es desayuno Mexicano con cosas como: Chilquiles, Sopes de Desayuno, Omelets, Burritos de Desayuno, Sandwich de Desayuno y mas. Aqui esta el link para que mires:', 'Actividad', 'Seven Falls Massage & Spa', 'Seven Falls Massage & Spa es un lugar donde puedemos agarrar un masaje como pareja. Si esojes este hariamos la de parejas de una hora que incluye masaje del cuerpo. Aqui esta la pagina para que tengas mas informacion del lugar:', 'Cena', 'Buona Forchetta', 'Aqui amor es el lugar donde ibamos ir el Sabado pasado donde teniamos que tener reservacion. Es comida Italiana entonces tienen pasta, lasgana, pizza, etc. Igual, aqui esta el link para que mires el menu completo y tambien las fotos:'];

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
foodImage.src = 'img/dateonefood.jpg';
window.addEventListener('scroll', function() {
    if(window.scrollY >= lastScroll + triggerPoint) {
        lastScroll += triggerPoint;
        infoText = document.createElement('p');
        infoText.classList.add(`info-text${textNumber += 1}`);
        infoText.textContent = dateOneArray[index += 1];
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
    window.open('https://www.yelp.com/biz/chuponcito-aliso-viejo', '_blank');
});

const activityImageBox = document.createElement('div');
activityImageBox.classList.add('activity-imgBox');
const activityImage = document.createElement('img');
activityImage.src = 'img/massageImage.jpg';
activityImage.classList.add('activity-image')
activityImageBox.append(activityImage);
contentContainerOne.append(activityImageBox);

const activityOneLink = document.createElement('p');
activityOneLink.classList.add('activity-link');
activityOneLink.textContent = 'La pagina del masaje para que mires amor :)';
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
  window.open('https://www.sevenfallsspa.com/services-lakeforest', '_blank');
});

const dinnerBox = document.createElement('div');
dinnerBox.classList.add('dinner-box');
const dinnerImage = document.createElement('img');
dinnerImage.classList.add('dinner-image');
dinnerImage.src = 'img/dateonedinner.jpg';
dinnerBox.append(dinnerImage);
contentContainerOne.append(dinnerBox);

const dinnerLink = document.createElement('p');
dinnerLink.classList.add('dinner-link');
dinnerLink.textContent = 'Menu para mi princesa :)';
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
  window.open('https://www.yelp.com/biz/buona-forchetta-newport-beach-2', '_blank');
});

returnButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = 'activities.html';
});
