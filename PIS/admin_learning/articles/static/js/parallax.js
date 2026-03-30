$(document).ready(function () {
    $('.parallax-scene').on('mousemove', function (event) {
        var sceneWidth = $(this).width();
        var sceneHeight = $(this).height();

        var offsetX = event.pageX - $(this).offset().left;
        var offsetY = event.pageY - $(this).offset().top;

        var moveX = offsetX - sceneWidth / 2;
        var moveY = offsetY - sceneHeight / 2;

        $('.layer-front').css(
            'transform',
            'translate(' + (moveX / 20) + 'px, ' + (moveY / 20) + 'px)'
        );

        $('.layer-middle').css(
            'transform',
            'translate(' + (moveX / 35) + 'px, ' + (moveY / 35) + 'px)'
        );

        $('.layer-back').css(
            'transform',
            'translate(' + (moveX / 50) + 'px, ' + (moveY / 50) + 'px)'
        );
    });

    $('.parallax-scene').on('mouseleave', function () {
        $('.layer-front, .layer-middle, .layer-back').css(
            'transform',
            'translate(0px, 0px)'
        );
    });
});