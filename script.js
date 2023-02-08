
var mySwiper = new Swiper('.swiper-container', {
   loop: true,
   speed: 1000,
   autoplay: {
   delay:1000,
},
effect: 'coverflow',
   grabCursor: true,
   centeredSlides: true,
   slidesPerView: 'auto',
coverflowEffect: {
   rotate: 50,
   stretch: 80,
   depth: 1200,
   modifier: 1,
   slideShadows: false,
},
})

 var sidenav= document.getElementById('sidenav');
 var menubar = document.getElementById('menubar');
 sidenav.style.width="0px";
 menubar.onclick=function(){
   if( sidenav.style.width=="0px"){
     sidenav.style.width="250px";
   }
   else{
      sidenav.style.width="0px";
    }
  }

