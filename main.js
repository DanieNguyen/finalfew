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
      if (scrollPos >= navPos - 15) {
        $navBar.addClass('fixed');
      } else {
        $navBar.removeClass('fixed');
      }
    } else {
      if (scrollPos >= navPos) {
        $navBar.addClass('fixed');
      } else {
        $navBar.removeClass('fixed');
      }
    }

  });

  $.getScript("node_modules/autosize/dist/autosize.js", function () {
    autosize(document.querySelector('textarea'));
  });

});