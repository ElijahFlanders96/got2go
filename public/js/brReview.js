$(function() {
$("#submit").on('click', function(event) {
    event.preventDefault();

    let newReview = {
        locName: $(".locName").val().trim(),
        typeBr: $(".typeBr").val().trim(),
        cleanliness: $(".cleanliness").val().trim(),
        pay: $(".pay").val().trim(),
        location: $(".location").val().trim(),
        amenities: $(".amenites").val(),
        comments: $(".comments").val().trim(),
    }

    // if ($('#burger-input').val()) {
    //   newReview = {
    //     locName: $("#burger-input").val().trim(),
    //     typeBr: 0
    //   };
    // }

    $.ajax('/api/Review', {
      type: "POST",
      data: newReview
    }).then(() => {
      location.reload();
    });
  });
});
