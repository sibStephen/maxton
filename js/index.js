
// Jquery
$(document).ready(function() {
  // Carousel- custom to navigate and click accordingly

  $('#prv-image').on('click', function(){
    var $last = $('#images li:last');
    $last.remove().css({ 'margin-left': '-400px' });
    $('#images li:first').before($last);
    $last.animate({ 'margin-left': '0px' }, 500);
  });

  $('#nxt-image').on('click', function(){
    var $first = $('#images li:first');
    $first.animate({ 'margin-left': '-400px' }, "fast", function() {
        $first.remove().css({ 'margin-left': '0px' });
        $('#images li:last').after($first);
    });
  });
});

// Vanilla js
document.onreadystatechange = function() {
    // Mouse hover effect
    var hoverClass = document.getElementsByClassName('hover-effect-stars');
    var hoverUpperIcons = document.getElementsByClassName('b-r-white');
    var readMore = document.getElementsByClassName('read-more');

    for (var i = 0 ; i < hoverClass.length; i++) {

      hoverClass[i].addEventListener('mouseover', function() {
        this.classList.add('c-red');
      });

      hoverClass[i].addEventListener('mouseout', function() {
        this.classList.remove('c-red');
      });
    }
    for (var j = 0 ; j < hoverUpperIcons.length; j++) {

      hoverUpperIcons[j].addEventListener('mouseover', function() {
        this.classList.add('change-context');
      });

      hoverUpperIcons[j].addEventListener('mouseout', function() {
        this.classList.remove('change-context');
      });
    }

    for (var k = 0 ; k < readMore.length; k++) {

      readMore[k].addEventListener('click', function() {
        this.parentNode.children[1].classList.add('auto-height');
        this.remove();
      });
    }

}
