///////////////*****//////////////////
// RESPONSIVE NAVIGATION
// OPEN BTN
  $(document).ready(function () {
    $("#navbar").on("click", function() {
      $(".nveMenu").addClass("is-opened");
      $(".overlay").addClass("is-on");
    });

    $(".overlay").on("click", function() {
      $(this).removeClass("is-on");
      $(".nveMenu").removeClass("is-opened");
    });
  });
// CLOSE BTN
  $(".overlay").on("click", function() {
    $(this).removeClass("is-on");
    $(".nveMenu").removeClass("is-opened");
  });

  $(".close-btn-nav").click(function(){
  $(".nveMenu").removeClass("is-opened");
  $(".overlay").removeClass("is-on");
  });
  // RESPONSIVE NAVIGATION
  // 
  // ACTIVE JS START
$(document).ready(function(){
  $('ul li span').click(function(){
    $('li span').removeClass("active-class");
    $(this).addClass("active-class");
});
});
  // ACTIVE JS END
  // 
  // PRELOADER START
$(document).ready(function() {
  setTimeout(function() {
  $('.preloader').fadeOut('slow');
            }, 2000);
});
  // PRELOADER END
///////////////*****//////////////////

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})