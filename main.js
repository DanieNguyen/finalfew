$(document).ready(function () {

	// jQuery methods go here...
	// cache the element
	var $navBar = $('.nav');
	var $navWrap = $('.nav-wrapper');

	// find original navigation bar position
	var navPos = $navWrap.offset().top;

	// on scroll
	$(window).scroll(function () {

	// get scroll position from top of the page
	var scrollPos = $(this).scrollTop();

	// check if scroll position is >= the nav position
	if (this.innerWidth >= 700) {
		if (scrollPos >= navPos - 16) {
			$navBar.addClass('fixed');
		} else {
			$navBar.removeClass('fixed');
		}
	} else {
		if (scrollPos >= navPos - 16) {
			$navBar.addClass('fixed');
		} else {
			$navBar.removeClass('fixed');
		}
	}
 	});

	var img = $('.landingpic').attr('src');
	console.log(img);
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