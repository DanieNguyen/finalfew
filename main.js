$(document).ready(function () {

	var img = $('.landingpic').attr('src');
	var mq = window.matchMedia("(min-width:700px)")
	if (mq.matches) {
		var newImg = img + ".jpg";
		$('.landingpic').attr('src', newImg);
	} else {
		var newImg = img + "-sm.jpg";
		$('.landingpic').attr('src', newImg);
	}
	
	$.getScript("node_modules/autosize/dist/autosize.js", function () {
		autosize(document.querySelector('textarea'));
	});

	$(function () {
		$('a[class="lightbox"]').fluidbox();
	})

	$('a').fluidbox({
		viewportFill: 0.8,
		maxWidth: 925,
		loader: true
	})
});