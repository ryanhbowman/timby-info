$( document ).ready(function() {
  
});
$(window).scroll(function(event) {
  $scrolled = $(window).scrollTop();

  // if scrolled past main header, show the little header
  if ($scrolled > 140) {
    $('.header').addClass('is-active');
    // $('.glasses-grid').addClass('fixed')
  }
  //otherwise dont show that stuff
  else  {
    $('.header').removeClass('is-active'); 
  }
});
$( window ).resize(function() {

});
