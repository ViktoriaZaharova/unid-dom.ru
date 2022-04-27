$(function () {
    $('.twenty-images').twentytwenty({
        before_label: 'До',
        after_label: 'После'
    });
});


$('.btn-burger').on('click', function(e){
    e.preventDefault();

    var
        $this = $(this),
        content = $('.header-wrapper');


    if(!$this.hasClass('clicked')){
        $this.addClass('clicked');
        $('body, html').addClass('no-scroll');
        content.css('display', 'flex').addClass('open');
    } else {
        $this.removeClass('clicked');
        $('body, html').removeClass('no-scroll');
        content.css('display', 'none').removeClass('open');
    }
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
        $('.btn-burger').removeClass('clicked');
        $('.header-wrapper.open').css('display', 'none').removeClass('open');
        $('body, html').removeClass('no-scroll');
        return false;
    });
});
//плавный скролл end