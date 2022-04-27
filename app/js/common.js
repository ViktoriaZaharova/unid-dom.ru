$(function () {
    $('.twenty-images').twentytwenty({
        before_label: 'До',
        after_label: 'После'
    });
});

$('.no-click').on('click', function () {
    $(this).removeClass('no-click').addClass('clicked');
    $('.header-wrapper').css('display', 'flex');
    $('body, html').addClass('no-scroll');
});

$('.clicked').on('click', function () {
    $('.header-wrapper').css('display', 'none');
    $('body, html').removeClass('no-scroll');
    $(this).removeClass('clicked').addClass('no-click');
});

$("body").on("click", ".btn-scroll-top", function () {
    $("html, body").animate({
        scrollTop: 0
    }, "slow")
});

//плавный скролл
$(document).ready(function () {
    $('.go_to').click(function (e) {
        e.preventDefault();
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length !== 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500);
        }
        return false;
    });
});
//плавный скролл end