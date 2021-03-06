$(function(){
    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="header__slider-arrow header__slider-arrow--left" src="./images/dest/arrow-lf.svg" alt="left">',
        nextArrow: '<img class="header__slider-arrow header__slider-arrow--right" src="./images/dest/arrow-rg.svg" alt="right">',
        asNavFor: '.slider-dots',
    });

    $('.slider-dots').slick({
        asNavFor: '.header__slider',
        slidesToShow: 4,
        slidesToScroll: 4,
    });

});