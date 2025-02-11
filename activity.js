console.log('This works');

const activityOne = document.querySelector('.activity-one');
const activityTwo = document.querySelector('.activity-two');
const activityThree = document.querySelector('.activity-three');

window.onload = function() {
    activityOne.style.opacity = '100';
    activityTwo.style.opacity = '100';
    activityThree.style.opacity = '100';
}

const buttonOne = document.querySelector('.btn-one');
buttonOne.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'paint.html';
});
