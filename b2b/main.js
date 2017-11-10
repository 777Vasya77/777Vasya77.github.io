$(document).ready(function() {
  $('a[href^="#"]').click(function () {
    console.log('gygy');
    var el = $(this).attr('href');
    $('body').animate({
        scrollTop: $(el).offset().top -30
    }, 500);
    return false;
  });
})
