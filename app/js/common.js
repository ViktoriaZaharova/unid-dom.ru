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


$('.modal').on('shown.bs.modal', function (e) {
    $('.slick-slider').slick('setPosition');
});




$('.form-quiz__content').slick({
    slidesToShow: 1,
    fade: true,
    nextArrow: '<button type="button" class="slick-next btn-next">Далее</button>',
    prevArrow: '<button type="button" class="slick-prev btn-prev"><img src="img/arrow-left.svg" alt=""></button>',
    appendArrows: '.form-quiz-nav',
    infinite: false,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 830,
            settings: {
                adaptiveHeight: true
            }
        }
    ]
});

$('[name="phone"]').mask('+7 (999) 999-99-99');

function setProgress(index) {
    const calc = ((index) / ($slider.slick('getSlick').slideCount)) * 100;

    $progressBar
        .css('width', calc + '%')
        .attr('aria-valuenow', calc);


    $progressBarLabel.text(`${calc.toFixed()}%`);

}

const $slider = $('.form-quiz__content');
const $progressBar = $('.progress-bg');
const $progressBarLabel = $('.percent-val');

$slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    setProgress(nextSlide);
});

setProgress(0);

$(".form-quiz__content").on("afterChange", function (event) {
    if ($(this).find('.slick-slide').last().hasClass('slick-active')) {
        $('.slick-arrow').hide();
        $('.btn-submit-quiz').css('display', 'flex');
    }
});


// mail
$(".form").submit(function () {
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
    }).done(function () {
        $(this).find("input").val("");
        // alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
        window.location.href = "thanks.html";
        $(".form").trigger("reset");
    });
    return false;
});
