
// toggle mobile menu//

const menuToggle = document.querySelector('.menu__toggle');
const menuList = document.querySelector('.menu__list_mobile');


menuToggle.addEventListener('click', toggleMenu );

function toggleMenu() {

    if (menuList.style.opacity === "0") {
        menuList.style.opacity = "1";
        menuList.style.height = "70vh";
      } else {
        menuList.style.opacity = "0";
        menuList.style.height = "1vh";
      }
   
};


//sticky navbar after scroll

window.addEventListener("scroll", stickyNav);

function stickyNav() {
  let navMenu = document.querySelector('nav');
  navMenu.classList.toggle('main-sticky', window.scrollY > 0);

};


// change image //

let changeImg = document.querySelector('.js_room-image');
let singleRoom = document.querySelector('.item_single');
let doubleRoom = document.querySelector('.item_double');
let superiorRoom = document.querySelector('.item_superior');

singleRoom.addEventListener('click', single);

function single(){
  changeImg.src="images/single-bed.jpg";

};


doubleRoom.addEventListener('click', double);

function double(){
  changeImg.src="images/double-bed.jpg";
  
};


superiorRoom.addEventListener('click', superior);

function superior(){
  changeImg.src="images/superior-bed.jpg";
 
};



//modal - page 3


// let modal = document.querySelector('.modal');
// let modalText = document.querySelector('.modal__text');
// let closeBtn = document.querySelector('.modal__button_close');

// let images= document.querySelectorAll('.grid-gallery__image img');

// images.forEach((image) => {
// let modal = document.querySelector('.modal');
// let modalText = document.querySelector('.modal__text');
// let closeBtn = document.querySelector('.modal__button_close');

// image.addEventListener('click', () => {
//   modal.classList.add('show');
// })


// })