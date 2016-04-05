//resize nav
$(window).scroll(function() {
  if ($(document).scrollTop() > 300) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});


//smooth scroll
$(document).ready(function() {
			$('#mainNav').localScroll({duration:500});
   			$('#btn1').localScroll({duration:500});
			$('#btn2').localScroll({duration:500});
			$('#btn3').localScroll({duration:500});
			$('#btn4').localScroll({duration:500});
			$('#pf6').localScroll({duration:500});
			$('#email-btn').localScroll({duration:300});
		});
		
//ESC to close popup
/*		$(document).keydown(function(e) {
    	// ESCAPE key pressed
    		if (e.keyCode == 27) {
      	  		document.getElementById('light').style.display='none';
				document.getElementById('fade').style.display='none';
    		}
		});*/

//display fadeIn animation
$(window).scroll(function() {
if($(document).scrollTop() > 200)
	$('#about-inner').addClass('animated fadeInRight');
if($(document).scrollTop() > 500)
	$('#services').addClass('animated-slow fadeInRight');
if($(document).scrollTop() > 1200)
	$('#portfolio-inner').addClass('animated-slow fadeInUp');
if($(document).scrollTop() > 2100){
	$('#contact1').addClass('animated-slow fadeInDown');
	$('#contact2').addClass('animated-slow fadeInLeft');
	$('#contact3').addClass('animated-slow fadeInRight');}
if($(document).scrollTop() > 2800)
	$('#map-canvas').addClass('animated-slow fadeInUp');
});

function comingAlert() {
    alert("Coming soon!");
}
function weChatClick(){
	alert("Open WeChat and find me by searching: CHorizon");
}
/* ==========  START GOOGLE MAP ========== */

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', initMap);

function initMap() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions

	    var myLatLng = new google.maps.LatLng(40.450500, -79.949552);

	    var mapOptions = {
	        zoom: 15,
	        center: myLatLng,
	        disableDefaultUI: true,
	        scrollwheel: false,
	        navigationControl: true,
	        mapTypeControl: false,
	        scaleControl: false,
	        draggable: true,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            featureType: 'water',
            stylers: [{
                color: '#46bcec'
            }, {
                visibility: 'on'
            }]
        }, {
            featureType: 'landscape',
            stylers: [{
                color: '#f2f2f2'
            }]
        }, {
            featureType: 'road',
            stylers: [{
                saturation: -100
            }, {
                lightness: 45
            }]
        }, {
            featureType: 'road.highway',
            stylers: [{
                visibility: 'simplified'
            }]
        }, {
            featureType: 'road.arterial',
            elementType: 'labels.icon',
            stylers: [{
                visibility: 'off'
            }]
        }, {
            featureType: 'administrative',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#444444'
            }]
        }, {
            featureType: 'transit',
            stylers: [{
                visibility: 'off'
            }]
        }, {
            featureType: 'poi',
            stylers: [{
                visibility: 'off'
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map-canvas');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.450500, -79.949552),
        map: map,
		icon: 'img/map-marker.png',
    });
}

// ========== END GOOGLE MAP ========== //

/*
var wow = new WOW ({
	offset:       75,          // distance to the element when triggering the animation (default is 0)
	//mobile:       false,       // trigger animations on mobile devices (default is true)
});
wow.init();*/