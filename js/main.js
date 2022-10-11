$(document).ready(function() {
   /* Every time the window is scrolled ... */
   $(window).scroll(function() {
       /* Check the location of each desired element */
      $('.card-row').each(function(i) {
         var bottom_of_object_01 = $(this).offset().top;
         var bottom_of_window_01 = $(window).scrollTop() + $(window).height();
         /* If the object is completely visible in the window, fade it it */
         if (bottom_of_window_01 - bottom_of_object_01 > 200) {
            $(this).addClass("animate");
         }
         else{
            $(this).removeClass("animate");
         }
      });
   });
   /* Every time the window is scrolled ... */
   $(window).scroll(function() {
      /* Check the location of each desired element */
     $('.swiper').each(function(i) {
        var bottom_of_object_01 = $(this).offset().top;
        var bottom_of_window_01 = $(window).scrollTop() + $(window).height();
        /* If the object is completely visible in the window, fade it it */
        if (bottom_of_window_01 - bottom_of_object_01 > 200) {
           $(this).addClass("animate");
        }
        else{
           $(this).removeClass("animate");
        }
     });
   });
   $(window).scroll(function() {
      /* Check the location of each desired element */
     $('.section-video').each(function(i) {
        var bottom_of_object_01 = $(this).offset().top;
        var bottom_of_window_01 = $(window).scrollTop() + $(window).height();
        /* If the object is completely visible in the window, fade it it */
        if (bottom_of_window_01 - bottom_of_object_01 > 200) {
           $(this).addClass("animate");
        }
        else{
           $(this).removeClass("animate");
        }
     });
   });
   $(window).scroll(function() {
      /* Check the location of each desired element */
     $('.tool').each(function(i) {
        var bottom_of_object_01 = $(this).offset().top;
        var bottom_of_window_01 = $(window).scrollTop() + $(window).height();
        /* If the object is completely visible in the window, fade it it */
        if (bottom_of_window_01 - bottom_of_object_01 > 200) {
           $(this).addClass("animate");
        }
        else{
           $(this).removeClass("animate");
        }
     });
   });
});