console.log("Сайт кафедри завантажено успішно!");

// ==============================
// BURGER MENU
// ==============================

$(document).ready(function () {
    // Бургер натиснуто -> відкриття/закриття меню
    $('.menu-toggle').on('click', function () {
        $('.main-menu').toggleClass('show');
    });


    // ==============================
    // LANGUAGE SWITCHER (UA / EN)
    // ==============================

    $('.lang a').on('click', function (e) {
        e.preventDefault();

        // зняти активний клас з усіх
        $('.lang a').removeClass('is-active');

        // додати активний до натиснутого
        $(this).addClass('is-active');
    });


    // ==============================
    // SLICK NEWS SLIDER
    // ==============================

    const $slickElement = $('#news .news-cards');

    $slickElement.not('.slick-initialized').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        cssEase: 'ease-in-out',

        prevArrow: "<button type='button' class='slick-prev pull-left' aria-label='Previous arrow'><i class='fa fa-angle-left'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right' aria-label='Next arrow'><i class='fa fa-angle-right'></i></button>",

        responsive: [
            {
                breakpoint: 1200,
                settings: { slidesToShow: 4 }
            },
            {
                breakpoint: 992,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 576,
                settings: { slidesToShow: 1 }
            }
        ]
    });

});
