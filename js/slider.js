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
        767:{
          items:1,
          nav:false,
        },
        1140:{
            items:2,
            nav:true,
            loop:true
        }
    }
  });
  $("#carousel-1").owlCarousel({
    // autoplay: true,
    // autoplayTimeout:5000,
    items:1,
    navText: [ '<img src="image/prew.png" alt="arrow">' ,
    '<img src="image/next.png" alt="arrow">' ],
    dots: false,
    responsiveClass:true,
    responsive:{
      767:{
        items:1,
        nav:false,
        loop:false
      }
    }
  });
});

