console.log('Script is working');

const title = document.querySelector('h1');
const mainContainer = document.querySelector('main');
const contentContainerOne = document.createElement('div');
contentContainerOne.classList.add('info-one');

window.onload = function() {
    title.style.opacity = '100';
    contentContainerOne.style.gridRow = '2/13';
    contentContainerOne.style.height = '100%';
    mainContainer.append(contentContainerOne);
}

const txtArray = ['', 'Para este plan, tenemos desayuno, una actividad, y cena', 'No hay horario en cuando tenemos que hacer todo, menos la actividad', 'Para empezar, te voy a ensenar en donde vamos a desayunar para esta cita', 'Desayuno', 'Chuponcito'];

let index = 0;
// index = (index + 1) % txtArray.length;
let infoText;
let textNumber = 0;

let lastScroll = 0;
let triggerPoint = 700;
let opacity = 0;
let maxOpacity = 100;
const foodContainer = document.createElement('div');
window.addEventListener('scroll', function() {
    if(window.scrollY >= lastScroll + triggerPoint) {
        lastScroll += triggerPoint;
        infoText = document.createElement('p');
        infoText.classList.add(`info-text${textNumber += 1}`);
        infoText.textContent = txtArray[index += 1];
        infoText.style.opacity = '100';
        contentContainerOne.style.opacity = '100';
        contentContainerOne.append(infoText);
        console.log(infoText);
        if(window.scrollY >= 3500) {
            foodContainer;
            foodContainer.classList.add('food-box');

            const foodImage = document.createElement('img');
            foodImage.classList.add('food');
            foodImage.src = 'img/dateonefood.jpg';
            foodContainer.append(foodImage);
            contentContainerOne.append(foodContainer);
        }
    }
});

const observer = new IntersectionObserver((entries, observer) => {
    if(entries[0].isIntersecting) {
      foodContainer.classList.add('visible');
      observer.unobserve(foodContainer);
    }
  }, {threshold: 0.1, 
      rootMargin: '200px'
  });
  
  observer.observe(foodContainer);
