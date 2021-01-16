$('.next').click(function(){
  if ($('img.active').hasClass('last')) {
    $('img.active.last').removeClass('active');

    $('img.first').addClass('active');
  }else(
    $('img.active').removeClass('active').next().addClass('active')
  )
})

$('.prev').click(function(){
  if ($('img.active').hasClass('first')) {
    $('img.active.first').removeClass('active');

    $('img.last').addClass('active');
  }
  $('img.active').removeClass('active').prev().addClass('active')
})
