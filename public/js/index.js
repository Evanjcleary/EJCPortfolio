console.log("JS Loaded2")

$("#request-btn").click(function(event) {
    event.preventDefault();
    // event.stopPropogation();
    console.log("Request has been submitted")

    var newRequest = {
        request_name: $("#request-name").val().trim(),
        request_description: $("#request-description").val().trim(),
        requester_name: $("#requester-name").val().trim(),
        requester_email: $("#requester-email").val().trim(),
        requester_phone: $("#requester-phone").val().trim(),
        request_budget: $("#request-budget").val().trim(),
        request_misc: $("#request-misc").val().trim()
    }

    $.ajax("/api/requests", {
        type: "POST",
        data: newRequest
      }).then(function () {
        alert("Youre request has been submitted!")
        location.reload()
      })
    console.log(newRequest);

})

$(function(){
    $('#myFormSubmit').click(function(e){
      e.preventDefault();


      var newRequest = {
        request_name: $("#request-name").val().trim(),
        request_description: $("#request-description").val().trim(),
        requester_name: $("#requester-name").val().trim(),
        requester_email: $("#requester-email").val().trim(),
        requester_phone: $("#requester-phone").val().trim(),
        request_budget: $("#request-budget").val().trim(),
        request_misc: $("#request-misc").val().trim()
    }

      console.log(newRequest);

      $.ajax("/api/requests", {
        type: "POST",
        data: newRequest
      }).then(function () {
        alert("Youre request has been submitted!")
        location.reload()
      })
    console.log(newRequest);

    })
});