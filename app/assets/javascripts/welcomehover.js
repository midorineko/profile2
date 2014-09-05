var ready;
ready = function() {
$(document).ready(function(){
  $('.welcome0').hover(
      function(){
        $('.0text').show();
      },
      function(){
        $('.0text').hide();
    });

  $('.welcome0').click('click', function(e){
      e.preventDefault;
      $('.navbar').show();
    });


  $('.welcome4').hover(
      function(){
        $('.4text').show();
      },
      function(){
        $('.4text').hide();
    });

  $('.welcome4').click('click', function(e){
      e.preventDefault;
      $('.socialnet').show();
    });

  });
};


$(document).ready(ready);
