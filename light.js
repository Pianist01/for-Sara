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

const dateTwoArray = ['', 'Hola amor :), para esta cita igual tenemos desayuno, nuestra actividad, y cena', 'Igual como el otro, no tenemos horario en cuando tenemos que hacer todo, menos para la actividad', 'Ahora para el desayuno mi amor', 'Desayuno', 'Burnt Crumbs', 'Burnt Crumbs es un restuarante Americano que tiene comida como omeletes, pancakes gordas, galletas, burritos, y sandwich, y mas. Aqui esta el link:'];

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