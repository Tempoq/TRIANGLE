$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) { //ScrollTop - determines the current vertical position of the scroll bar
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });
    //The parameter is 0, which means the page will be scrolled up to the very beginning to the zero pixel, and 600 is the animation speed in milliseconds.
    $('.scrollup').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false;
    });

});