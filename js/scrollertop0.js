$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".top0").fadeIn();
        } else {
            $(".top0").fadeOut();
        }
    });
});

//content > scroll 置頂
$(".top0").click(function () {
    $("#project_area").animate({ scrollTop: 0 }, 800);
    return false;
});