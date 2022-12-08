$(document).ready(function () {

    if ($('.tarisfList').length > 0) {
        $('.tarisfList').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            responsive: [
                {
                    breakpoint: 3000,
                    settings: "unslick"
                },
                {
                    breakpoint: 1220,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
            ]
        });
    }

    if ($('.solutionsList').length > 0) {
        $('.solutionsList').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            responsive: [
                {
                    breakpoint: 3000,
                    settings: "unslick"
                },
                {
                    breakpoint: 1220,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
            ]
        });
    }

    if ($('.advList').length > 0) {
        $('.advList').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 3000,
                    settings: "unslick"
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
            ]
        });
    }

    if ($('.reviewsList').length > 0) {
        $('.reviewsList').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            responsive: [

                {
                    breakpoint: 1220,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true,
                    }
                },

            ]
        });
    }

    if ($('.howAnimation').length > 0) {
        let scrollOff = false
        var block_show = null;
        let animationAll = $('.animation')
        let lastDeferr = 0
        if ($(window).width() > 768) {
            scrollTracking();
        }

        function scrollTracking() {

            var wt = $(window).scrollTop();
            var wh = $(window).height();
            var et = $('.howAnimation').offset().top;
            var eh = $('.howAnimation').outerHeight();

            if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
                if (block_show == null || block_show == false && !scrollOff) {
                    let promise = new $.Deferred(), fn = () => {
                        animationAll.map(function (index, item) {
                            setTimeout(() => {
                                $('.howAnimation .manager ul li').removeClass('active')
                                $(this).addClass('active')
                            }, 1000 * index)
                        })
                        return promise
                    }
                    lastDeferr ? lastDeferr.then(fn) : fn()
                    //запоминаем последнее звено цепочки обещаний
                    lastDeferr = promise
                }
                block_show = true;
            } else {
                if (block_show == null || block_show == true) {
                    // $('.howAnimation').addClass('active')
                }
                block_show = false;
            }
        }

        $(window).scroll(function () {
            if ($(window).width() > 768) {
                scrollTracking();
            }
        });
    }



});

$(window).resize(function () {
    if ($(window).width() < 1220) {
        $('.tarisfList').slick('refresh');
        $('.solutionsList').slick('refresh');
        $('.advList').slick('refresh');
    }

});

