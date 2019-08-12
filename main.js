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

  // Applied globally on all textareas with the "autoExpand" class
  $(document)
    .one('focus.autoExpand', 'textarea.autoExpand', function () {
      var savedValue = this.value;
      this.value = '';
      this.baseScrollHeight = this.scrollHeight;
      this.value = savedValue;
    })
    .on('input.autoExpand', 'textarea.autoExpand', function () {
      var minRows = this.getAttribute('data-min-rows') | 0, rows;
      this.rows = minRows;
      rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 16);
      this.rows = minRows + rows;
    });