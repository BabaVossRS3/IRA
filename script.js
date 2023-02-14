
/* Burger menu slide button */


let slideEl = document.querySelector('.burger-btn');
let linksEl = document.querySelector('.links');
let linksContainer = document.querySelector('.links-container');


slideEl.addEventListener('click' , function(){
    
   linksContainer.classList.toggle("show-links"); 

})

/* fixed nav */

const navBar = document.getElementById('nav');
 
window.addEventListener('scroll' , function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;

    if(scrollHeight > navHeight){
        navBar.classList.add('fixed-nav');
    }
    else{
        navBar.classList.remove('fixed-nav');
    }
})

/* scroll exactly */ 

const scrollLinks = document.querySelectorAll(".scroll");
 
scrollLinks.forEach(function(linksEl){
    linksEl.addEventListener("click" , function(e){
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        const navHeight = navBar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navBar.classList.contains('fixed-nav');
        let position = element.offsetTop - navHeight;
        
        if(!fixedNav){
            position =position-navHeight;
        }
        if(navHeight > 82){
            position = position + containerHeight;
        }
        window.scrollTo({
            left:0 , top: position 
        });
        linksContainer.style.height = 0;
    });
});