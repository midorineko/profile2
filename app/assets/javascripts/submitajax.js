$('document').ready(function(){
  $('#contactyou').on("click", function(e){
    e.preventDefault();
    console.log("step one")
    $.ajax({
      type: "post",
      url: "/visitors/create",
      data: {hello: $('#emailinput').val()},
      success: function(){
        console.log("data")
      }
    })

  })
});

// /visitors/create
// $('#emailinput').text()
