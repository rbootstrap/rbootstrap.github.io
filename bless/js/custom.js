jQuery(document).ready(function($){
	
	"use strict";
	
	/*==========================*/	
	/******** Preloader ******/	
	/*==========================*/
	$('.preloader').delay(350).fadeOut('slow');
	
	/*==========================*/	
	/********  Fact Counter *******/	
	/*==========================*/
	function factCounter() {
		if($('.fact-counter').length){
			$('.fact-counter .counter-column.animated').each(function() {
		
				var $t = $(this),
					n = $t.find(".count-value").attr("data-stop"),
					r = parseInt($t.find(".count-value").attr("data-speed"), 10);
					
				if (!$t.hasClass("counted")) {
					$t.addClass("counted");
					$({
						countNum: $t.find(".count-value").text()
					}).animate({
						countNum: n
					}, {
						duration: r,
						easing: "linear",
						step: function() {
							$t.find(".count-value").text(Math.floor(this.countNum));
						},
						complete: function() {
							$t.find(".count-value").text(this.countNum);
						}
					});
				}
				
			});
		}
	}	
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',
			animateClass: 'animated',
			offset:       0,
			mobile:       true,
			live:         true
		  }
		);
		wow.init();
	}
	
	/* ==========================================================================
   		When document is Scrollig, do
   	  ========================================================================== */
	$(window).on('scroll', function() {
		factCounter();
	});
	
	/*==========================*/	
	/***** ScrollSpy *****/	
	/*==========================*/
	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: 54
	});
	
	/*==========================*/	
	/***** Smooth Scrolling *****/	
	/*==========================*/
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 2000, 'easeInOutExpo');
        event.preventDefault();
    });
	
	/*==========================*/	
	/******** Back To Top *******/	
	/*==========================*/
	var offset = 220;
	var duration = 1500;
	jQuery(window).scroll(function() {
		if (jQuery(this).scrollTop() > offset) {
			jQuery('.back-to-top').fadeIn(duration);
		} else {
			jQuery('.back-to-top').fadeOut(duration);
		}
	});
					
	jQuery('.back-to-top').click(function(event) {
		event.preventDefault();
		jQuery('html, body').animate({scrollTop: 0}, duration);
		return false;
	})
	
	

});	