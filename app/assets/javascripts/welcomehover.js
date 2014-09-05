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

var mew = 0;
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
    });


    $('.welcome6').hover(
      function(){
        $('.6text').show();
      },
      function(){
        $('.6text').hide();
    });

    $('.welcome6').click('click', function(e){
      e.preventDefault;
      window.location.href = "/";
    });

  });
};


$(document).ready(ready);
