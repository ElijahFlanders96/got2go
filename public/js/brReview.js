let userPosition;

var onSuccess = function (position) {
  console.log('Latitude: ' + position.coords.latitude + '\n' +
    'Longitude: ' + position.coords.longitude + '\n');
  userPosition = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`
};

function onError(error) {
  console.log('code: ' + error.code + '\n' +
    'message: ' + error.message + '\n');
}

$(document).ready(function () {
  navigator.geolocation.getCurrentPosition(onSuccess, onError)
})


$(function () {
  $("#submit").on('click', function (event) {
    event.preventDefault();

    let newReview = {
      locName: $(".locName").val().trim(),
      typeBr: $(".typeBr").val().trim(),
      cleanliness: $(".cleanliness").val().trim(),
      pay: $(".pay").val().trim(),
      location: userPosition,
      amenities: $(".amenities").val(),
      comments: $(".comments").val().trim(),
    }


    $.ajax('/api/reviews', {
      type: "POST",
      data: newReview
    }).then(() => {
      console.log("promise resolves")
      window.location.replace("/brSearch");
    });
  });
});
