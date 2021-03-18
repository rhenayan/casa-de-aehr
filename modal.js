let images= document.querySelectorAll('.grid-gallery__image img');

images.forEach((image) => {
let closeBtn = document.querySelector('.modal__button_close');
let modal = document.querySelector('.modal');
let modalPicture = document.querySelector('.modal__image');
let modalText = document.querySelector('.modal__text');

image.addEventListener('click', () => {
    modalPicture.src = image.src;
    modalText.innerHTML = image.alt;
    modal.classList.add('show-interior');

closeBtn.addEventListener('click', () => {
    modal.classList.remove('show-interior');
});

});
});

