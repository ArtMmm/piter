$(document).ready(function(){
  $("#carousel").owlCarousel({
    // autoplay: true,
    // autoplayTimeout:5000,
    items:2,
    loop: true,
    nav: true,
    navText: [ '<img src="image/prew.png" alt="arrow">' ,
    '<img src="image/next.png" alt="arrow">' ],
    dots: false,
    responsiveClass:true,
    responsive:{
        0:{
          items:1,
          nav:false
        },
        450:{
            items:2,
            nav:false
        },
        680:{
            items:2,
            nav:true,
            loop:true
        }
    }
  });
});
