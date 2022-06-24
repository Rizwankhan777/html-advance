$('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


var selector = $('.owl-carousel');
$('.my-next-button1').click(function() {
  selector.trigger('next.owl.carousel');
});

$('.my-prev-button1').click(function() {
  selector.trigger('prev.owl.carousel');
});



