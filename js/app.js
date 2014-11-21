$( document ).ready(function() {
  /* Slick carousel call
  $('.one-time').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });*/


  $(function() {
      $('.toggle-nav').click(function() {
          // Calling a function in case you want to expand upon this.
          toggleNav();
      });
  });


 
});

$( window ).resize(function() {
  
});


 /*========================================
  =            CUSTOM FUNCTIONS            =
  ========================================*/
  function toggleNav() {
      if ($('#site-wrapper').hasClass('show-nav')) {
          // Do things on Nav Close
          $('#site-wrapper').removeClass('show-nav');
      } else {
          // Do things on Nav Open
          $('#site-wrapper').addClass('show-nav');
      }
  }