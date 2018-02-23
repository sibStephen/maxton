
// Jquery
$(document).ready(function() {

  // Navbar toogle
  $(window).resize(function() {
   call();
  });
  call();

  $('.toggle-nav').click(function() {
    $('#open-navbar1').toggle();
  });


  // Carousel- custom to navigate and click accordingly
  $(window).scroll(function() {
    if($(window).scrollTop() > 0 && $(window).width() > 1060) {
      // $('.search-toggle').hide();
      // $('.search-nav').show();
      $(".scroll-top").show();
      $('.container-1').hide();
      $('.container-2').hide();
      $('.search-button-down').hide();
      $('.dark-nav').addClass('theme-nav');
      $('.container-3').show();
    } else {
      // $('.search-toggle.search-button').css('display', 'inline-block');
      // $('.search-nav').hide();
      $(".scroll-top").hide();
      $('.container-1').show();
      $('.container-2').show();
      $('.search-button-down').show();
      $('.dark-nav').removeClass('theme-nav');
      $('.container-3').hide();
    }
  });

  $(".scroll-top").on('click',function(){
       $('html, body').animate({
            scrollTop: $(".maxxton-hero-image").offset().top
      }, 1000);
    });

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

var call  = function() {
    if ($(window).width() <= 1060) {
      $('#open-navbar1').hide();
    }
}
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
