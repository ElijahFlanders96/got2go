let userPosition;

var onSuccess = function (position) {
    console.log('Latitude: ' + position.coords.latitude + '\n' +
        'Longitude: ' + position.coords.longitude + '\n');
        // 'Altitude: ' + position.coords.altitude + '\n' +
        // 'Accuracy: ' + position.coords.accuracy + '\n' +
        // 'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
        // 'Heading: ' + position.coords.heading + '\n' +
        // 'Speed: ' + position.coords.speed + '\n' +
        // 'Timestamp: ' + position.timestamp + '\n');
    
    userPosition = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`
};
// onError Callback receives a PositionError object
//
function onError(error) {
    console.log('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
}

$(document).ready(function() {
    navigator.geolocation.getCurrentPosition(onSuccess, onError)
})


$(function() {
$("#submit").on('click', function(event) {
    event.preventDefault();

    let newReview = {
        locName: $(".locName").val().trim(),
        typeBr: $(".typeBr").val().trim(),
        cleanliness: $(".cleanliness").val().trim(),
        pay: $(".pay").val().trim(),
        location: userPosition, // replace with position?
        amenities: $(".amenities").val(),
        comments: $(".comments").val().trim(),
    }


    $.ajax('/api/reviews', {
      type: "POST",
      data: newReview
    }).then(() => {
        console.log("promise resolves")
      location.reload();
    });
  });
});
