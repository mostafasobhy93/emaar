$(document).ready(function () {
    'use strict';

//    Loader
    $(window).on('load', function (event) {
		$('#preloader').delay(500).fadeOut(500);
	});
    
// sticky header
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 200) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });
    
// Mobile Nav toggle
    $('header nav .toggle-menu').click(function () {
        $(this).next('header nav .links-list').slideToggle();
        $(this).toggleClass('active');
    });
    
    
//    scroll top btn
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('#scroll-top').addClass('active');
        } else {
            $('#scroll-top').removeClass('active');
        }
    });
    $('#scroll-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 50);
    });
    
    //    Main Slider
    $(".main-slider .banner-slides").owlCarousel({
        loop: true,
        items: 1,
        margin: 0,
        dots: false,
        nav: true,
        animateOut: "fadeOut",
        active: true,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive : {
            0 : {
                mouseDrag: true
            },
            768 : {
                mouseDrag: false
            }
        }
    });
    $(".main-slider .banner-carousel-btn .left-btn").on("click", function() {
        $(".main-slider .banner-slides").trigger("next.owl.carousel");
    });
    $(".main-slider .banner-carousel-btn .right-btn").on("click", function() {
        $(".main-slider .banner-slides").trigger("prev.owl.carousel");
    });
    
//    services slider
    $(".services-slider").owlCarousel({
        loop: true,
        items: 4,
        dots: true,
        nav: false,
        active: true,
        margin: 20,
        smartSpeed: 800,
        autoplay: true,
        autoplayTimeout: 8000,
        dotsEach: 2,
        responsive : {
            0 : {
                items: 1,
            },
            768 : {
                items: 2,
            },
            992 : {
                items: 3,
            },
            1700 : {
                items: 4,
            }
        }
    });

// Products Slider
    $(".product-details-section .products-slider").owlCarousel({
        loop:true,
		margin: 30,
		items: 1,
		nav: false,
		autoplay: true,
		smartSpeed: 1500,
		dots:true, 
    });
    
    
});

