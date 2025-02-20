console.log('Script is working');

const body = document.querySelector('body');

const title = document.querySelector('h1');
const mainContainer = document.querySelector('main');
const contentContainerOne = document.createElement('div');
contentContainerOne.classList.add('info-one');

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

const dateThreeArray = ['', 'Igual como los otros dos amor, aqui tenemos un dia entero de desayuno, nuestra actividad, y cena', 'No tenemos horario de cuando tenemos que hacer todo ni para la actvidad para esta cita', 'Empezemos con lo primero del dia, el desayuno', 'Desayuno', 'Cafe Cultura', 'Cafe Cultura es un restaurante Mexicano de desayuno. Entonces tenemos lo typical como burritos, chilaquiles, pancakes, french toast, pan dulce, y mas. Es muy rico, yo le daria un 8/10, pero aqui esta el menu para que mires lo que tienen:', 'Actividad', 'K1 Speed', 'Los Gokarts que has querido por mucho tiempo amor. Aqui en Irvine, es muy divertido y van a buena velocidad los Gokarts. Recuerda si escojes esta cita, todavia puedemos hacer las otras, pero si quiero que escojes una. Aqui esta el link para que mires mas de K1 Speed:', 'Cena', `BJ's Restaurant & Brewhouse`, `BJ's es un restaurante con comida Americana. Hamburguesas, Boneless wings, tacos, pasta, pizza, y tambien tiene una galleta que es super ricisimo amor. Amo esa galleta. Bueno, aqui esta el link para que mires mas fotos de ahi: `];

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
foodImage.src = 'img/cafecultura.jpg';
window.addEventListener('scroll', function() {
    if(window.scrollY >= lastScroll + triggerPoint) {
        lastScroll += triggerPoint;
        infoText = document.createElement('p');
        infoText.classList.add(`info-text${textNumber += 1}`);
        infoText.textContent = dateThreeArray[index += 1];
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
  window.open('https://www.yelp.com/biz/cafe-cultura-santa-ana-2?osq=Cafe+Cultura', '_blank');
});

const activityImageBox = document.createElement('div');
activityImageBox.classList.add('activity-imgBox');
const activityImage = document.createElement('img');
activityImage.src = 'img/gokarts.jpg';
activityImage.classList.add('activity-image')
activityImageBox.append(activityImage);
contentContainerOne.append(activityImageBox);

const activityOneLink = document.createElement('p');
activityOneLink.classList.add('activity-link');
activityOneLink.textContent = 'La pagina para que mires amor :)';
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
  window.open('https://www.k1speed.com/irvine-location.html', '_blank');
});

const dinnerBox = document.createElement('div');
dinnerBox.classList.add('dinner-box');
const dinnerImage = document.createElement('img');
dinnerImage.classList.add('dinner-image');
dinnerImage.src = 'img/bjs.jpg';
dinnerBox.append(dinnerImage);
contentContainerOne.append(dinnerBox);

const dinnerLink = document.createElement('p');
dinnerLink.classList.add('dinner-link');
dinnerLink.textContent = 'El menu baby :)';
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
window.open('https://www.bjsrestaurants.com/locations/ca/irvine?utm_source=google&utm_medium=organic&utm_campaign=google_my_business', '_blank');
});

returnButton.addEventListener('click', (e) => {
e.preventDefault();
window.location.href = 'activities.html';
});
