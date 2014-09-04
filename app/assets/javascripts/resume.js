$(document).ready(function() {
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
