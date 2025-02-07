console.log('This works');

const buttonOne = document.querySelector('.btn-one');
buttonOne.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'paint.html';
});
