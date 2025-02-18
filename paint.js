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

const dateOneArray = ['', 'Para este plan, tenemos desayuno, una actividad, y cena', 'No hay horario en cuando tenemos que hacer todo, menos la actividad', 'Para empezar, te voy a ensenar en donde vamos a desayunar para esta cita', 'Desayuno', 'Chuponcito', 'El Chuponzito es desayuno Mexicano con cosas como: Chilquiles, Sopes de Desayuno, Omelets, Burritos de Desayuno, Sandwich de Desayuno y mas. Aqui esta el link para que mires:', 'Actividad'];

const dateOneLink = document.createElement('p');
dateOneLink.classList.add('food-link');
dateOneLink.textContent = 'El menu amor :)';
contentContainerOne.append(dateOneLink);

let index = 0;
// index = (index + 1) % txtArray.length;
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
activityImageBox.append(activityImage);
