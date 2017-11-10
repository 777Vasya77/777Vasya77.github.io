$(document).ready(function () {


     $('.get-inspired-slider').slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          prevArrow: '<i class="fa fa-angle-left slider-arrow slider-arrow-prev" aria-hidden="true"></i>',
          nextArrow: '<i class="fa fa-angle-right slider-arrow slider-arrow-next" aria-hidden="true"></i>',
          lazyLoad: 'progressive',
          responsive: [
               {
                    breakpoint: 767,
                    settings: {
                         slidesToShow: 1,
                         slidesToScroll: 1,
                         infinite: true
                    }
               },
               {
                    breakpoint: 600,
                    settings: {
                         arrows: false,
                         slidesToShow: 1,
                         slidesToScroll: 1,
                         infinite: true
                    }
               }
          ]
     });


});