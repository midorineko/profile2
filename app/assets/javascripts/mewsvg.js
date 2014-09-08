var ready;
ready = function() {

var mew = 0;
var mewsvg = 0;
  $('.welcome5').hover(
      function(){
        $('.5text').show();
      },
      function(){
        $('.5text').hide();
    });
  $('.welcome5').click('click', function(e){
      e.preventDefault;
      $('.meow')[mew].play()
      if (mew === 0){
        mew ++;
      }
      else {
        mew --;
      }
      mewsvg++;
      if(mewsvg > 4){
        $('#msvg').show();
      }
    });

};
$(document).ready(ready);
