
function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if(element_class != '.top-content') {
		element_class += '-container';
		scroll_to = $(element_class).offset().top - nav_height;
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	}
}


jQuery(document).ready(function() {
	
	/*
	    Navigation
	*/
	$('a.scroll-link').on('click', function(e) {
		e.preventDefault();
		scroll_to($(this), $('nav').outerHeight());
	});
	// toggle "navbar-no-bg" class
	$('.top-content .text').waypoint(function() {
		$('nav').toggleClass('navbar-no-bg');
	});

	// toggle "navbar-no-bg" class
	$('.top-content2 .text').waypoint(function() {
		$('nav').toggleClass('navbar-no-bg');
	});

	// toggle "navbar-no-bg" class
	$('.top-content3 .text').waypoint(function() {
		$('nav').toggleClass('navbar-no-bg');
	});

	// toggle "navbar-no-bg" class
	$('.top-content4 .text').waypoint(function() {
		$('nav').toggleClass('navbar-no-bg');
	});
	
    /*
        Background slideshow
    */
	$('.top-content').backstretch("assets/img/backgrounds/1.jpg");
    $('.top-content2').backstretch("assets/img/backgrounds/1_dm.jpg");
    $('.top-content3').backstretch("assets/img/backgrounds/1_web.jpg");
    $('.top-content4').backstretch("assets/img/backgrounds/1_uiux.jpg");
	
	$('.how-it-works-container').backstretch("assets/img/backgrounds/1.jpg");
	$('.how-it-works-container2').backstretch("assets/img/backgrounds/1_dm.jpg");
	$('.how-it-works-container3').backstretch("assets/img/backgrounds/1_web.jpg");
	$('.how-it-works-container4').backstretch("assets/img/backgrounds/1_uiux.jpg");

	$('.call-to-action-container').backstretch("assets/img/backgrounds/1.jpg");
	$('.call-to-action-containe2r').backstretch("assets/img/backgrounds/1_dm.jpg");
	$('.call-to-action-container3').backstretch("assets/img/backgrounds/1_web.jpg");
	$('.call-to-action-container4').backstretch("assets/img/backgrounds/1_uiux.jpg");
	
	$('.contact-us-container').backstretch("assets/img/backgrounds/1.jpg");
    $('.contact-us-container2').backstretch("assets/img/backgrounds/1_dm.jpg");
    $('.contact-us-container3').backstretch("assets/img/backgrounds/1_web.jpg");
    $('.contact-us-container4').backstretch("assets/img/backgrounds/1_uiux.jpg");
    
    $('#top-navbar-1').on('shown.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
	});
	
    
    /*
        Wow
    */
    new WOW().init();
	
});


jQuery(window).load(function() {
	
	/*
		Loader
	*/
	$(".loader-img").fadeOut();
	$(".loader").delay(1000).fadeOut("slow");
	
	/*
		Hidden images
	*/
	$(".testimonial-image img").attr("style", "width: auto !important; height: auto !important;");
	
});

