$(document).ready(function(){
	//TEL
	var SPMaskBehavior = function (val) {
		return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
	},
	spOptions = {
		onKeyPress: function(val, e, field, options) {
			field.mask(SPMaskBehavior.apply({}, arguments), options);
		}
	};
	$(".tel").mask(SPMaskBehavior, spOptions);

    //MENU MOBILE
    $(".open-menu").click(function(){
        $(".full-menu").addClass("show");
        $("body").addClass("overflow");
        return false;
    });

    $(".close-menu, .overlay-menu").click(function(){
        $(".full-menu").removeClass("show");
        $("body").removeClass("overflow");
        return false;
    });

	//BANNER
    $('.home-banner').owlCarousel({
        loop: false,
        responsive:{
            0:{
                items:1,
            }
        },
        autoplayHoverPause: true,
        autoplay: true,
        autoplayTimeout: 6000,
        navSpeed: 3000,
        dragEndSpeed: 3000,
        autoplaySpeed: 3000,
        dots: true
    });

    //CARROSSEL OBRAS
    $('.carousel-obras').owlCarousel({
        loop: false,
        responsive:{
            0:{
                items:1,
            }
        },
        autoplayHoverPause: true,
        autoplay: true,
        autoplayTimeout: 6000,
        navSpeed: 3000,
        dragEndSpeed: 3000,
        autoplaySpeed: 3000,
        dots: true,
        nav: false
    });

    //SEND FORM
    $(".contact-form").submit(function(){
        var form = $(this);
        var thisForm = $(this).serialize();

        var g = "inc/send-form-1.php";

        $.post(g , thisForm, function(data){
            $(".feedback-form", form).html(data);
        });
        return false;
    });

    new WOW().init();
});