jQuery(document).ready(function($){
	"use strict";

	/*==========================*/	
	/********* Waypoints ********/	
	/*==========================*/
	var scrolling = false;
	function onScrollInit( items, trigger ) {
		items.each( function() {
		var osElement = $(this),
		osAnimationClass = osElement.attr('data-os-animation'),
		osAnimationDuration = osElement.attr('data-os-animation-duration');
	
		osElement.css({
			'-webkit-animation-duration':  osAnimationDuration,
			'-moz-animation-duration':     osAnimationDuration,
			'animation-duration':          osAnimationDuration
		});
	
		var osTrigger = ( trigger ) ? trigger : osElement;
			
		osTrigger.waypoint(function() {
			osElement.addClass('animated').addClass(osAnimationClass);
		},{
			triggerOnce: true,
			offset: '95%'
			});
		});
	}
	
	$(window).on('scroll', function(){
		if(!scrolling){
			onScrollInit( $('.os-animation') );
			scrolling = true;
		}
	});
	
	onScrollInit( $('.os-animation') );
	onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );
	

	
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
