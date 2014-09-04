$(document).ready(function() {
$('#tech_page').click('click', function(e){
  e.preventDefault();
  $('.welcome').hide();
  $('#profile_pic').hide();
  $('#mybio').hide();
  $('#resume').hide();
  $('#biology_html').hide();
  $('#tech_html').show('slide');
  $('body').height('100%')
  $("body").css("overflow", "visible");
  });


});

