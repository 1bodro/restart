/*lang*/
$(document).ready(function () {
	$(".header-language input[type='radio']").click(function () {
		$(".header-language input[type='radio']").not(this).prop('checked', false);
	});
});
/*scroll custom*/
$(window).on("load", function () {
	$(".main_sidebar-control_gallery").mCustomScrollbar(

		{
			autoHideScrollbar: true,
			theme: "rounded-dots-dark"
		}

	);
	$(".chat-room_body").mCustomScrollbar(

		{
			autoHideScrollbar: true,
			theme: "rounded-dots-dark"
		}
	);
	$(".slides .comment").mCustomScrollbar(

		{
			autoHideScrollbar: true,
			theme: "rounded-dots-dark"
		}

	);
});
/*Slider*/
$(document).ready(function () {
	$(".comment-container-1").flexslider({
		animation: "slide",
		controlsContainer: $(".custom-controls-container"),
		customDirectionNav: $(".custom-navigation a"),
		animationLoop: true,
		prevText: "",
		nextText: "",
		touch: true,
		slideshow: false,
		keyboard: true
	});
	$(".comment-container-2").flexslider({
		animation: "slide",
		controlsContainer: $(".custom-controls-container"),
		customDirectionNav: $(".custom-navigation a"),
		animationLoop: true,
		prevText: "",
		nextText: "",
		touch: true,
		slideshow: false,
		keyboard: true
	});

	$(".comment-container-3").flexslider({
		animation: "slide",
		controlsContainer: $(".custom-controls-container"),
		customDirectionNav: $(".custom-navigation a"),
		animationLoop: true,
		prevText: "",
		nextText: "",
		touch: true,
		slideshow: false,
		keyboard: true
	});
});
