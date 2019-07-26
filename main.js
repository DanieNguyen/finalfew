$(document).ready(function () {

  // jQuery methods go here...
  // cache the element
  var $navBar = $('.nav');

  // find original navigation bar position
  var navPos = $navBar.offset().top;

  // on scroll
  $(window).scroll(function () {

    // get scroll position from top of the page
    var scrollPos = $(this).scrollTop();

    // check if scroll position is >= the nav position
    if (scrollPos >= navPos) {
      if (window.innerWidth < 700) {
        $navBar.addClass('fixed');
      }
    } else {
      $navBar.removeClass('fixed');
    }

  });

  //If window is tablet+, change contact link to email
  function linkChange() {
    if (window.innerWidth > 700) {
      document.getElementById("contact").href = "mailto:danngu@uw.edu";
    }
  }

  //When the window resizes, change link if mobile
  window.onload = function () { linkChange() };
  window.onresize = function () { linkChange() };
});