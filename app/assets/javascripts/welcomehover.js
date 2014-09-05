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
  });
};


$(document).ready(ready);
