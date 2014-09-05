$(document).ready(function() {
$('.welcome3').hover(
     function(){
      $('.3text').show();
    },
      function(){
        $('.3text').hide();
    });
$('.welcome3').click('click', function(){
  $('.welcome').hide();
  $('#profile_pic').hide();
  $('#mybio').hide();
  $('#biology_html').hide();
  $('#tech_html').hide();
  $('#resume').show('slide');
  $('.welcome').show();
  $('body').height('100%')
  $("body").css("overflow", "visible");
  });


$('#resume_menu').click('click', function(){
  $('.welcome').hide();
  $('#profile_pic').hide();
  $('#mybio').hide();
  $('#biology_html').hide();
  $('#tech_html').hide();
  $('#resume').show('slide');
  $('body').height('100%')
  $("body").css("overflow", "visible");
  });


});
