


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



// sticky navbar after scroll page 3






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



// //animate on scroll

// window.addEventListener('scroll', showOnscrollText)

// function showOnscrollText(){
//   let text=Array.from(document.querySelectorAll('.slideup-aos'));
  
//   text.forEach(element => {
//     if(element.getBoundingClientRect().top < window.innerHeight){
//       element.classList.add('show-aos');
//     } else {
//       element.classList.remove('show-aos');
//     }
//   });


// };


// //image zoom-in

// window.addEventListener('scroll', showOnscrollImg)

// function showOnscrollImg(){
//   let img=Array.from(document.querySelectorAll('.img-aos-zoomIn'));

//   img.forEach(element => {
//     if(element.getBoundingClientRect().top < window.innerHeight){
//       element.classList.add('zoomIn-img-aos');
//     } else {
//       element.classList.remove('zoomIn-img-aos');
//     }
//   });
// }



// //image sline-in 

// window.addEventListener('scroll', slideOnScroll)

// function slideOnScroll(){
//   let slide=Array.from(document.querySelectorAll('.img-aos-slide'));

//   slide.forEach(element => {
//     if(element.getBoundingClientRect().top < window.innerHeight) {
//       element.classList.add('img-aos-slide-left');
//     } else {
//       element.classList.remove('img-aos-slide-left');
//     }
//   });
// }



// //fadein button 

// window.addEventListener('scroll', showBtn)

// function showBtn(){
//   let btn=Array.from(document.querySelectorAll('.fadein-aos'));

//   btn.forEach(element => {
//     if(element.getBoundingClientRect().top < window.innerHeight) {
//       element.classList.add('fade-in');
//     } else {
//       element.classList.remove('fade-in');
//     }
//   })
// }