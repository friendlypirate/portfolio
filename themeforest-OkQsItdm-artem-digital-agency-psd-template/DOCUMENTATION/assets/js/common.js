/*
 * Author: ArtStyles (Art)
 * Template Name: Documentation
 * Version: 1.2
*/

(function($) {
	"use strict";
	
	/*-----------------------------------------------------------------
	  Detect device mobile
	-------------------------------------------------------------------*/
	
    var isMobile = false; 

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	  	$('html').addClass('touch');
	  	isMobile = true;
	}
	else{
		$('html').addClass('no-touch');
		isMobile = false;
	}


	/*-----------------------------------------------------------------
	  Preload all images
	-------------------------------------------------------------------*/

    $(window).on('load', function(){
		$('.loading').fadeOut(600);
	});


	/*-----------------------------------------------------------------
	  Smooth scroll
	-------------------------------------------------------------------*/
	
    $('body').easeScroll({
        frameRate: 60,
        animationTime: 1500,
        stepSize: 120,
        pulseAlgorithm: !0,
        pulseScale: 8,
        pulseNormalize: 1,
        accelerationDelta: 20,
        accelerationMax: 1,
        keyboardSupport: !0,
        arrowScroll: 50
    });

	
    /*-----------------------------------------------------------------
	  Collapse nav mobile
	-------------------------------------------------------------------*/

    $('.nav__v1 .dropdown').on('show.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });
    $('.nav__v1 .dropdown').on('hide.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });

    // nav v2
	$('.navbar-nav li a[href="#"]').on('click',function(){
		$(this).closest('li').toggleClass('current');
		$(this).closest('li').children('ul').slideToggle(400);
		return false;
	});	
    
	$('.navbar-toggle').on('click', function(){
        $('.nav_v2').toggleClass('_white')
    });

	
	/*-----------------------------------------------------------------
	  Fixed header
	-------------------------------------------------------------------*/
	
    var header=$('.top:not(.navbar-fixed)');
	
    $('.top').affix({
	    offset: {
	        top: 1
	    }
	});

	$('.top').on('affix.bs.affix', function() {
		if (!header.hasClass('affix')){
			header.addClass('animated slideInDown');
		}
	});

	$('.top').on('affix-top.bs.affix', function() {
	  	header.removeClass('animated slideInDown');
	});

	
    /*-----------------------------------------------------------------
	  Masonry
	-------------------------------------------------------------------*/

	var $photoFixed=$('.portfolio_fixed').isotope({
        itemSelector: '.item__portfolio',
        layoutMode: 'masonry',
		transitionDuration: '0.8s',
        hiddenStyle: {
            opacity: 0,
            transform: 'scale(0.001)'
        },
        visibleStyle: {
            opacity: 1,
            transform: 'scale(1)'
        },
		masonry: {
            gutter: 30,
            isFitWidth: true
        }
    });
	$photoFixed.imagesLoaded().progress( function() {
        $photoFixed.masonry ({
            gutter: 30,
            isFitWidth: true
		});
    });


	/*-----------------------------------------------------------------
	  Anchor scroll
	-------------------------------------------------------------------*/	
	
	$('a[href^="!#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });


	/*-----------------------------------------------------------------
	  objectFit
	-------------------------------------------------------------------*/
	
	objectFitImages();
	
	
	/*-----------------------------------------------------------------
	  Code Line
	-------------------------------------------------------------------*/
	
    var $window = $(window)
    window.prettyPrint && prettyPrint()

	
	/*-----------------------------------------------------------------
	  Magnific Popup
	-------------------------------------------------------------------*/

	$('.grid__portfolio').magnificPopup({
        delegate: 'a',
        type: 'image',
		gallery:{
            enabled:true
        },
        removalDelay: 500,
        callbacks: {
            beforeOpen: function() {
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        closeOnContentClick: true,
        midClick: true
    });
	
})(jQuery);