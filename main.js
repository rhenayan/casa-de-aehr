
// toggle mobile menu//
const menuToggle = document.querySelector('.menu__toggle');

menuToggle.addEventListener('click', toggleMenu );

function toggleMenu() {
  const menuList = document.querySelector('.menu__list_mobile');

    if (menuList.style.opacity === "0") {
        menuList.style.opacity = "1";
        menuList.style.height = "70vh";
      } else {
        menuList.style.opacity = "0";
        menuList.style.height = "1vh";
      }
};

//disappear menu once one of the menu links is clicked //

const link = document.querySelectorAll('.menu__list_mobile .menu__link');
const newLink = Array.from(link);

newLink.forEach(anchor => {
  anchor.addEventListener('click', navHide);
  });

// call toggleMenu Function
function navHide() {
   toggleMenu();
}


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