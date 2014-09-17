$('document').ready(function(){
  $('#contactyou').on("click", function(e){
    e.preventDefault();
    $.ajax({
      type: "post",
      url: "/visitors/create",
      data: {email: $('#emailinput').val(), position: $('#positioninput').val(), company: $('#companyinput').val()},
      success: function(){
        $('#contactyou').append($('#emailinput').val())
      }
    })

  })
});

// /visitors/create
// $('#positioninput').val()
// $('#companyinput').val()
