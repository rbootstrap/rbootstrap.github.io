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
	/***** Smooth Scrolling *****/	
	/*==========================*/
	// Add smooth scrolling to all links in navbar + Section Links and the Slider
	$(".navbar a, section a.internal").on('click', function(event) {
		// Prevent default anchor click behavior
		event.preventDefault();
	
		// Store hash
		var hash = this.hash;
	
		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (1500) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 1500, function(){
		// Add hash (#) to URL when done scrolling (default click behavior)
		window.location.hash = hash;
		});
	});
	
	/*=================================================================*/	
	/******** Fix Placeholder Issue in IE9 and other browsers *******/	
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
	
	/*==========================*/	
	/******** Google Map *******/	
	/*==========================*/
	if($('#map-location').length){
		var map;
		map = new GMaps({
			el: '#map-location',
			zoom: 15,
			scrollwheel:false,
			//Set Latitude and Longitude Here
			lat: 34.4143704,
			lng: -119.6967133
		});
		  
		//Add map Marker
		map.addMarker({
			icon: 'images/icon/location_icon.png',
			lat: 34.4143704,
			lng: -119.6967133,
			infoWindow: {
				content: '<p class="map-info text-center"><strong>Artic Agency</strong> <br/>310 Chapala St, Santa Barbara, CA 93101<br/> +1 805-966-9180 </p>'
			}
		});
	}