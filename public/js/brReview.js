$(function() {
$("#submit").on('click', function(event) {
    event.preventDefault();

    let newReview = {
        locName: $(".locName").val().trim(),
        typeBr: $(".typeBr").val().trim(),
        cleanliness: $(".cleanliness").val().trim(),
        pay: $(".pay").val().trim(),
        location: $(".location").val().trim(),
        amenities: $(".amenities").val(),
        comments: $(".comments").val().trim(),
    }


    $.ajax('/api/reviews', {
      type: "POST",
      data: newReview
    }).then(() => {
      location.reload();
    });
  });
});
