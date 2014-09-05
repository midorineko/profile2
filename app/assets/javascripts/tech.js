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
  $('#biology_html').hide();
  $('#tech_html').show('slide');
  $('.welcome').show();
  $('body').height('100%')
  $("body").css("overflow", "visible");
  });

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

