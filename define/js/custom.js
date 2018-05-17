jQuery(document).ready(function($){
	
	"use strict";
	
    /*==========================*/	
	/******** Preloader ******/	
	/*==========================*/
	$('.preloader').delay(350).fadeOut('slow');
		
	/*==========================*/	
	/********** ScrollSpy *******/	
	/*==========================*/
	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: 54
	});

	/*=================================================*/	
	/***** Shrink the navbar when page is scrolled *****/	
	/*================================================*/
	$(window).scroll(function() {
		if ($("#mainNav").offset().top > 100) {
		  $("#mainNav").addClass("navbar-shrink");
		} else {
		  $("#mainNav").removeClass("navbar-shrink");
		}
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
	/********* Main Slider ******/	
	/*==========================*/
	$('.butter-slider').slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: 4000,
		infinite: true,
		speed: 300,
		pauseOnHover: false,
		slidesToShow: 1,
		adaptiveHeight: false,
		fade:false,
	});
	
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
	
	/*==========================*/	
	/********  WOW Animation *******/	
	/*==========================*/
	
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
	
	//Gallery Filters
	if($('.filter-list').length){
		$('.filter-list').mixItUp({});
	}
	
	
	// gallery fancybox activator 
	function GalleryFancyboxActivator () {
		var galleryFcb = $('.fancybox');
		if(galleryFcb.length){
			galleryFcb.fancybox({
				openEffect  : 'elastic',
				closeEffect : 'elastic',
				helpers : {
					media : {}
				}
			});
		}
	}

	GalleryFancyboxActivator ();
	
	/*==========================*/	
	/***** Our Testimonials ***/	
	/*==========================*/
	$('.testimonials').slick({
		dots:false,
		autoplay: true,
		autoplaySpeed: 4000,
		infinite: true,
		speed: 300,
		pauseOnHover: false,
		slidesToShow: 3,
		adaptiveHeight: false,
		fade:false,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true
			}
		},
		{
			breakpoint: 800,
			settings: {
			slidesToShow: 2,
			slidesToScroll: 2
			}
		},
		{
			breakpoint: 400,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	  ]
	});
	
	/*=================================================================*/	
	/********** Fix Placeholder Issue in IE9 and other browsers ********/	
	/*=================================================================*/
	$('input, textarea').placeholder();
	
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
