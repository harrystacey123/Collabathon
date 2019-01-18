
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

$("#subscribe-form").submit(function(e){
    e.preventDefault();
    submitSubscribeForm($("#subscribe-form"));

    function submitSubscribeForm($form, $resultElement) {
        $.ajax({
            type: "GET",
            url: $form.attr("action"),
            data: $form.serialize(),
            cache: false,
            dataType: "jsonp",
            jsonp: "c",
            contentType: "application/json; charset=utf-8",
    
            error: function(error){},
    
            success: function(data){
                if (data.result == "success") {
                    $('.join-our-newsletter-2').hide()
                    $('.join-our-newsletter-3').show()
                    $('.cross').on('click', function () {
                        $('.join-our-newsletter-3').hide();
                    })
                }
            }
        }
    )};
});


