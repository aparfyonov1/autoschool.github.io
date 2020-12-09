
jQuery(function($) {
    "use strict";
    var xv_ww = $(window).width();
    if (xv_ww >= 768) {
        $.stellar({
            horizontalScrolling: false,
            verticalOffset: 0,
            responsive: true,
        });
    }

    $("body").on("click", ".nav-triger", function(e) {
        e.preventDefault();
        $(".main-menu").slideToggle();
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).find('span').removeClass("fa-navicon");
            $(this).find('span').addClass("fa-times");
        } else {
            $(this).find('span').removeClass("fa-times");
            $(this).find('span').addClass("fa-navicon");
        }
    });

    $("body").on("click", ".nav a[href^='#']", function(e) {
        e.preventDefault();
        var $this = $(this);
        $("body,html").animate({
            scrollTop: $($this.attr("href")).offset().top
        }, 500);
    });

    $("body").on("click", ".main-menu > li.parent", function(e) {
        if ($(window).width() < 1024) {
            e.preventDefault();
            e.stopImmediatePropagation();
            $(this).children("ul").slideToggle();
        }
    });

    $(window).on("scroll", function(e) {
        if ($(window).scrollTop() > 50) {
            $(".navbar-custom").addClass("navbar_style");
        } else {
            $(".navbar-custom").removeClass("navbar_style");
        }
    });


});