
// Back to top button
$(window).scroll(function() {
    if ($(this).scrollTop() > 600) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  
  document.querySelector('.close_mobile_menu').addEventListener('click', function() {
      document.querySelector('.collapse.navbar-collapse').classList.remove('show');
  });
  

  
  