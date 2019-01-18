




$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.join-our-newsletter-2').hide();
    $('.join-our-newsletter').show();
    $('.join-our-newsletter').on('click', function() {
        $('.join-our-newsletter-2').show();
    })
    $('.cross').on('click', function () {
        $('.join-our-newsletter-2').hide();
    })
});

