$(function(){
    $('.card-slider img:gt(0)').hide();
    setInterval(function(){
      $('.card-slider :first-child').fadeOut('1000')
         .next('img').fadeIn('1000')
         .end().appendTo('.card-slider');}, 
      5000);
});