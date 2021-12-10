console.log("working fine");

const toggleButton = document.querySelector('.toggleButton')
const plusIcon = document.querySelector('.fa-plus');
const inputSection  = document.querySelector('#inputSection');


toggleButton.addEventListener('click',()=>{
    console.log('clicked');
    if(plusIcon.classList.contains('rotate-135deg')){
        plusIcon.classList.remove('rotate-135deg');
    }
    else
         plusIcon.classList.add('rotate-135deg');  
         
    
       if(inputSection.classList.contains('animate-enter')){
           inputSection.classList.remove('animate-enter');
           inputSection.classList.add('animate-exit');
       }
       else{
           inputSection.classList.remove('animate-exit');
           inputSection.classList.add('animate-enter');
        
       }
     
    // inputSection.style.display = "flex";


    
});