$(function () {
    $("div.cinema-item").slice(0, 1).show();
    $(".loadMore").on('click', function (e) {
        e.preventDefault();
        $("div.cinema-item:hidden").slice(0, 1).slideDown();
        if ($("div.cinema-item:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});

$(function () {
    $("div.review-item").slice(0, 1).show();
    $(".loadMore").on('click', function (e) {
        e.preventDefault();
        $("div.review-item:hidden").slice(0, 1).slideDown();
        if ($("div.review-item:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});

$(function () {
    $("div.coupon-item").slice(0, 1).show();
    $(".loadMore").on('click', function (e) {
        e.preventDefault();
        $("div.coupon-item:hidden").slice(0, 1).slideDown();
        if ($("div.coupon-item:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});