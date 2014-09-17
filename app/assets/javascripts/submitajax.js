$('document').ready(function(){
  $('#contactyou').on("click", function(e){
    e.preventDefault();
    $.ajax({
      type: "post",
      url: "/visitors/create",
      data: {email: $('#emailinput').val(), position: $('#positioninput').val(), company: $('#companyinput').val()},
      success: function(){
        $('#contactyou').empty()
        $('#emailinput').hide()
        $('#companyinput').hide()
        $('#positioninput').hide()
        $('#contactyou').append("Thank You" + " \"" + $('#emailinput').val() + "\"")
      }
    })

  })
});
