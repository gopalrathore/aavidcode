$(document).ready(function(){

  /* Every time the window is scrolled ... */
  $(window).scroll( function(){

    /* Check the location of each desired element */
    $('.hideme').each( function(){

      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window > bottom_of_object ){
        $(this).animate({'opacity':'1'},1000);
      }
    });
  });

  // Smooth scroll down effect
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });

// Chosen plugin settings
  var chosenOption = {
    width: "90%"
  }

  $('#brand').chosen(chosenOption);
  $('#product').chosen(chosenOption);

// Min Date and Max Date of datepicker
  $( "#datepicker" ).datepicker({
    minDate: '1D',
    maxDate: '+1M',
  });
  
});
