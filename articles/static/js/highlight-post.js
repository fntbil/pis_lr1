$(document).ready(function () {
    $('.one-post').hover(
        function () {
            $(this).find('.one-post-shadow').stop().animate({ opacity: 0.1 }, 300);
        },
        function () {
            $(this).find('.one-post-shadow').stop().animate({ opacity: 0 }, 300);
        }
    );

    var originalWidth = $('#site-logo').width();
    var originalHeight = $('#site-logo').height();

    $('#site-logo').hover(
        function () {
            $(this).stop().animate({
                width: originalWidth + 20,
                height: originalHeight * ((originalWidth + 20) / originalWidth)
            }, 300);
        },
        function () {
            $(this).stop().animate({
                width: originalWidth,
                height: originalHeight
            }, 300);
        }
    );
});