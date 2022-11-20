// slideBar

$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        easing: 'linear',
        infinite: true,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: true,
        swipe: true,
        touchThreshold: 15,
        touchMove: true,
        waitForAnimate: true,
        centerMode: true,
        variableWidth: false,
        rows: 1,
        // slidesPerRow: 1,
        vertical: false,
        verticalSwiping: false,

    });
})

// header

$(window).on('scroll', function () {
    if ($(window).scrollTop() >= 100) {
        $('.nav-menu').addClass('black');
    }
    else {
        $('.nav-menu').removeClass('black');
    }
})

