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
    })
  });
};


$(document).ready(ready);
