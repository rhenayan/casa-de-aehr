
let button = document.querySelectorAll('.tab-btn');
let content = document.querySelector('.body-content');
let openMeal = document.querySelector('#meal');

openMeal.addEventListener('click', showTab(1));




function showTab(index)
{


    for(i=0; i < content.length; i++) {
        if(i==index) {
            content[i].style.transform = "translateX(0)";
        } else {
            content[i].style.transform ="translateX(200%)";
        }
    }
}