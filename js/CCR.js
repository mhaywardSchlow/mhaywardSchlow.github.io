(function($) {
    "use strict"; // Start of use strict
    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    $('.accordion').click(function(){

      //Expand or collapse this panel
      $(this).next().slideToggle('fast');
      $(this).toggleClass("active");
    });


})(jQuery); // End of use strict