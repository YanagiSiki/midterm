$(document).ready(function(){
	$('.myLink1').click(function(){
    var body = $("body, html");
		body.animate({
			scrollTop: $('.div-2').offset().top
		}, 1000);
	});

  $('.myLink2').click(function(){
    var body = $("body, html");
		body.animate({
			scrollTop: $('.div-3').offset().top
		}, 1000);
	});
});
