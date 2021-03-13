
//animate on scroll

window.addEventListener('scroll', showOnscrollText)

function showOnscrollText(){
  let text=Array.from(document.querySelectorAll('.slideup-aos'));
  
  text.forEach(element => {
    if(element.getBoundingClientRect().top < window.innerHeight / 2){
      element.classList.add('show-aos');
    } else {
      element.classList.remove('show-aos');
    }
  });


};


//image zoom-in

window.addEventListener('scroll', showOnscrollImg)

function showOnscrollImg(){
  let img=Array.from(document.querySelectorAll('.img-aos-zoomIn'));

  img.forEach(element => {
    if(element.getBoundingClientRect().top < window.innerHeight / 2){
      element.classList.add('zoomIn-img-aos');
    } else {
      element.classList.remove('zoomIn-img-aos');
    }
  });
}



//image sline-in 

window.addEventListener('scroll', slideOnScroll)

function slideOnScroll(){
  let slide=Array.from(document.querySelectorAll('.img-aos-slide'));

  slide.forEach(element => {
    if(element.getBoundingClientRect().top < window.innerHeight / 2) {
      element.classList.add('img-aos-slide-left');
    } else {
      element.classList.remove('img-aos-slide-left');
    }
  });
}



//fadein button 

window.addEventListener('scroll', showBtn)

function showBtn(){
  let btn=Array.from(document.querySelectorAll('.fadein-aos'));

  btn.forEach(element => {
    if(element.getBoundingClientRect().top < window.innerHeight / 2) {
      element.classList.add('fade-in');
    } else {
      element.classList.remove('fade-in');
    }
  })
}

