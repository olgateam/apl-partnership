// Скрыть Header при скролле страницы вниз:
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('show').addClass('hide');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('hide').addClass('show');
        }
    }
    
    lastScrollTop = st;
}

// Плавная прокрутка:
var $page = $('html, body');
$('a[href*="#"]').click(function () {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
});

// Меню навигации:
$(document).ready(function () {
    $('header .nav-link').click(function () {
        $('header .nav-link').removeClass('active');
        $(this).toggleClass('active');
    });

    $('#link-alt').click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $('#alt').offset().top-88
        }, 500);
    });

    $('#link-brn').click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $('#brn').offset().top-88
        }, 500);
    });

    $('#link-bty').click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $('#bty').offset().top-88
        }, 500);
    });

    $('#link-grw').click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $('#grw').offset().top-88
        }, 500);
    });

    $('#link-gts').click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $('#gts').offset().top-88
        }, 500);
    });

    $('#link-hpr').click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $('#hpr').offset().top-88
        }, 500);
    });

    $('#link-hrt').click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $('#hrt').offset().top-88
        }, 500);
    });

    $('#link-ice').click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $('#ice').offset().top-88
        }, 500);
    });

    $('#link-mls').click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $('#mls').offset().top-88
        }, 500);
    });

    $('#link-nrm').click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $('#nrm').offset().top-88
        }, 500);
    });

    $('#link-pwr-m').click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $('#pwr-m').offset().top-88
        }, 500);
    });

    $('#link-pwr-w').click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $('#pwr-w').offset().top-88
        }, 500);
    });

    $('#link-rlx').click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $('#rlx').offset().top-88
        }, 500);
    });

    $('#link-sld').click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $('#sld').offset().top-88
        }, 500);
    });

    $('#link-stp').click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $('#stp').offset().top-88
        }, 500);
    });
});

// Кнопка наверх:
var amountScrolled = 200;

$(window).scroll(function () {
    if ($(window).scrollTop() > amountScrolled) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
});

$('#back-to-top').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    return false;
});

// Скролл вниз:
var amountScrolled = 50;

$(window).scroll(function () {
    if ($(window).scrollTop() > amountScrolled) {
        $('#scroll-down').fadeOut();
    } else {
        $('#scroll-down').fadeIn();
    }
});