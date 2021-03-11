// toggle mobile menu//


const menuToggle = document.querySelector('.toggle');
const menuList = document.querySelector('.menu-list');


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



// sticky navbar after scroll page 3






// change image //

let changeImg = document.querySelector('.room-slide-images img');
let singleRoom = document.querySelector('.single');
let doubleRoom = document.querySelector('.double');
let superiorRoom = document.querySelector('.superior');

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





// tab
