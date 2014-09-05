$(document).ready(function() {

$('.welcome1').hover(
     function(){
      $('.1text').show();
    },
      function(){
        $('.1text').hide();
    });

$('.welcome1').click('click', function(e){
  e.preventDefault();
  $('.welcome').hide();
  $('#profile_pic').hide();
  $('#mybio').hide();
  $('#resume').hide();
  $('#tech_html').hide();
  $('#biology_html').show('slide');
  $('.welcome').show();
  $('body').height('100%')
  $("body").css("overflow", "visible");
  });

$('#biology_page').click('click', function(e){
  e.preventDefault();
  $('.welcome').hide();
  $('#profile_pic').hide();
  $('#mybio').hide();
  $('#resume').hide();
  $('#tech_html').hide();
  $('#biology_html').show('slide');
  $('body').height('100%')
  $("body").css("overflow", "visible");
  });


});
