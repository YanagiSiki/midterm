$(document).ready(function(){

	$('.gallery li').hover(function(){
		// Get data attribute values
		var title = $(this).data('title');
		if(!$(this).children("div").length){
			$(this).append('<div class="overlay"></div>');
		}
		// Get the overlay div
		var div_image1 = $(this).children('.overlay');

		// Add html to overlay
		div_image1.html('<div><b>'+title+'</b></div>');

		// Fade in overlay
		div_image1.stop().fadeIn(300);
	},function(){
		// Get the overlay div
		var div_image1 = $(this).children('.overlay');

		// Fade out overlay
		div_image1.stop().fadeOut(100);
	});



});
