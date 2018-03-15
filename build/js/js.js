$(document).ready(function () {
    $("#btn").on("click", function (event) {
        $(this).addClass('header-arrow-active');
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
        setTimeout(function () {
            $('#btn').removeClass('header-arrow-active');
        }, 400);
    });
});

var first = document.querySelector('#firstNumb');//первая цифра
var second = document.querySelector('#secondNumb');//вторая цифра

var first_num = first.innerHTML;//первая цифра счетчика(изменяемая)
var second_num = second.innerHTML;//вторая цифра счетчика(изменяемая)
function timer() {
    if (second_num <= 0) {
        second_num = 10;
        first_num = first_num - 1;
        first.style.transform = "rotateX(" + 180 + "deg)";
    }
    if (first_num <= -1) {
        first.innerHTML = 0;
        second.innerHTML = 0;
    }
    else {
        second_num = second_num - 1;
        second.style.transform = "rotateX(" + 180 + "deg)";
    }

    if (first_num >= 0) {
        second.innerHTML = second_num;
        first.innerHTML = first_num;
    }
}
function clickOnBtn() {
    var btn = document.querySelector('.header-register');
    btn.onclick = function (e) {
        e.preventDefault();
        timer();
        setTimeout(function () {
            second.style.transform = null;
            first.style.transform = null;
        },200);

    };
}

clickOnBtn();
