document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log("navigator.geolocation works well");
}

$(document).ready(function () {

    var onSuccess = function (position) {
        console.log('Latitude: ' + position.coords.latitude + '\n' +
            'Longitude: ' + position.coords.longitude + '\n' +
            'Altitude: ' + position.coords.altitude + '\n' +
            'Accuracy: ' + position.coords.accuracy + '\n' +
            'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
            'Heading: ' + position.coords.heading + '\n' +
            'Speed: ' + position.coords.speed + '\n' +
            'Timestamp: ' + position.timestamp + '\n');
    };

    // onError Callback receives a PositionError object
    function onError(error) {
        console.log('code: ' + error.code + '\n' +
            'message: ' + error.message + '\n');
    }

    document.getElementById("brNearMe").onclick = function () {
        window.location.replace("/brSearch");


        navigator.geolocation.getCurrentPosition(onSuccess, onError);

    };

    document.getElementById("submitReview").onclick = function () {
        window.location.replace("/brReview");
    };
});

$.post


