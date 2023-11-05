let nav= document.querySelector('.navbar');
window.onscroll=function(){
    if(document.documentElement.scrollTop> 50){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}
let navBar = document.querySelector(".nav-link");
let navCollapse=document.querySelector(".nav-collapse.collapse");
navBar.forEach(function(a) {
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
    
});


var swiper= new Swiper(".mySwiper",{
    direction:"vertical",
    loop: true,
    pagination:{
        el: ".swiper-pagination",
        clickable:true,
    },
    autoplay:{
        delay:3500,
    },
});
