$(function(){
   setInterval(function(){
      $(".slideshow1 ul").animate({marginLeft:-200},800,function(){
         $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
      })
   }, 3500);
});


// controls the animation with mouse over
$(function(){
  var timeSlide;
  function goSlide() {
      $(".slideshow2 ul").animate({marginLeft:-200},800,function(){
        $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
      })
  }
  timeSlide = setInterval(goSlide, 3500);
  
  $('.slideshow2').on('mouseenter', function(){
    // stop animation
    clearInterval(timeSlide);
  }).on('mouseleave', function(){
    // play animation
    timeSlide = setInterval(goSlide, 3500);
  });
});
