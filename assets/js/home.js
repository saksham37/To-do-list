console.log("working fine");

const toggleButton = document.querySelector('.toggleButton')
const plusIcon = document.querySelector('.fa-plus');
const inputSection  = document.querySelector('#inputSection');


toggleButton.addEventListener('click',()=>{
    console.log('clicked');
    if(plusIcon.classList.contains('rotate-45deg')){
        plusIcon.classList.remove('rotate-45deg');
    }
    else
         plusIcon.classList.add('rotate-45deg');     

    inputSection.style.height = 0;
    inputSection.style = "transform: scale(0);"


    
});