$(function () {

    $('.menu-catalog').hover(function () {
        $('.menu-catalog__content').slideToggle();
    })

    $('.menu').on('click', function () {
        $('.menu-list').toggleClass('active');
        $('.wrapper').toggleClass('active');

    })
    $('.about__slider').slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                    
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '10px',
                }
            }
        ]
    });

    var mixer = mixitup('.catalog__items');

    $('.catalog__item-size span').on('click', function () {
        $('.catalog__item-size span').removeClass('active');
        $(this).addClass('active');
    })

    $('.catalog__item-color span').on('click', function () {
        $('.catalog__item-color span').removeClass('active');
        $(this).addClass('active');
    })

    $(document).mouseup(function (e) {
        var div = $("#modal");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            $('html').removeClass('noscroll');
        }
    });

});

