$(document).ready(function() {

var fullHeight = 0;
function heightCalculator(){
   fullHeight = 0;
  $('body').height(function(index, height) {
          fullHeight += (window.innerHeight - $(this).offset().top);
   });
}

$('#profile_pic').hover(
      function(){$(this).addClass("imgHov");},
      function(){$(this).removeClass("imgHov");
    });
$('#profile_pic').click(function(e){
    e.preventDefault();
    $("#resume").hide();
    $('#biology_html').hide();
    $('#tech_html').hide();
    $("body").css("overflow", "hidden");
    $("#profile_pic").show();
    $("#profile_pic").css("margin-right", "9%");
    $("#profile_pic").css("margin-left", "0");
    $("#profile_pic").css("margin-top", "0");
    $("#mybio").css("margin-top", "5%");
    $("#profile_pic").css("float", "right");
    $('#mybio').show("slide");
    heightCalculator();
    $('body').animate({height:fullHeight + "px"},700);
  })

  $('#about_inouye').click(function(e){
    e.preventDefault();
    $("#resume").hide();
    $('#biology_html').hide();
    $('#tech_html').hide();
    $("body").css("overflow", "hidden");
    $("#profile_pic").show();
    $("#profile_pic").css("margin-right", "9%");
    $("#profile_pic").css("margin-left", "0");
    $("#profile_pic").css("float", "right");
    $("#mybio").css("margin-top", "5%");
    $("#profile_pic").css("margin-top", "0");
    $('.welcome').hide("slide");
    $('#mybio').show("slide");
    heightCalculator();
    $('body').animate({height:fullHeight + "px"},700);

  })

});
