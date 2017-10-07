/**
 *
 *	Package Name: Gleesikâ„¢ Main Script
 *	Version: 1.3
 *	Author: Daniel CostrÄƒÈ™el
 *	Author URL: http://gleesik.ro/
 *	Website: http://gleesik.ro/
 *	Licence: Gleesikâ„¢ Standard GLP Licence
 * 
 */

// Wait for window load
$(window).load(function() {
  setTimeout(function() {
    $(".page-loader").addClass('load-complete');
  }, 1500);
});

// Slide Menu Button
$(function(){
  $('.toggle-menu').on('click', function(){
    $(this).toggleClass('active');
    $('.site-menu').toggleClass('active');
    $('.go-to-top').toggleClass('white-bg');
  });
});

$(document).ready(function() {

// Disable ContextMenu | Right Click
$(document)[0].oncontextmenu = function() { return false;}

    $(document).mousedown(function(e){
      if( e.button == 2 ) {
            $('.pop-up-alert').addClass('active');
            return false;
       } else $('.close-pop-up').click(function() {
       		$('.pop-up-alert').removeClass('active');
        	return true;
       });

    });
});

// Go to top
$(window).scroll(function() {

	var top = $(window).scrollTop();
	var go_top = $('.go-to-top');

	if ( top > 600 ) {
		go_top.addClass('active');
	} else {
		go_top.removeClass('active');
	}

});

/* Links Scrolling Smooth */
$(function() {

  $('a[href*=#]:not([href=#])').click(function() {

    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }

    }

  });

});