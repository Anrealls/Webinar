$('.single-item').slick({
    infinite: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    speed: 1500,
    draggable: false,
    prevArrow: ".prev",
    nextArrow: ".next"
});

$('.single').slick({
    infinite: true,
    slidesToShow: 1,
    draggable: false,
    initialSlide: 0,
    prevArrow: '<div class="bespooke__prev"></div>',
    nextArrow: '<div class="bespooke__next"></div>'
});

(function () {
    var toggle = document.querySelector('.burger-btn');
    var toggle2 = document.querySelector('.header__nav-list');

    toggle.addEventListener('click', function (e) {
        this.classList.toggle('opened');
        toggle2.classList.toggle('header__nav-list-open');
    });
})();

new WOW().init();

$("#fakeLoader").fakeLoader({
    timeToHide: 3000, //Time in milliseconds for fakeLoader disappear
    zIndex: 999, // Default zIndex
    // spinner: "spinner4",//Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'
    bgColor: "#fff", //Hex, RGB or RGBA colors
    imagePath: "../img/logo.png"

});


