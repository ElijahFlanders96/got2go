document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log("navigator.geolocation works well");
}

$(document).ready(function () {
    // //Getting references to our form and inputs
    // let locationInput = $("input#inputLocation");

    // //when the input is submitted, we validate there's a location entered
    // locationInput.on("submit", function (event) {
    //     event.preventDefault();
    //     let userData = {
    //         text: locationInput.val().trim()
    //     };

    //     if (!userData.text) {
    //         return;
    //     }

    //     //If we have a location we run searchForUser function and clear the input
    //     searchForUser(userData.text);
    //     locationInput.val("");
    // });

    // // searchForUser does a post to our api route (line 24 still need to figure out) and if sucessful, redirects us to the brSearch.html page
    // function searchForUser(text) {
    //     $.post("/api/", {
    //         text: text
    //     })
    //         .then(function () {
    //             window.location.replace("/brSearch")
    //         })
    //         .catch(function (err) {
    //             console.log(err);
    //         });
    // }

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
    //
    function onError(error) {
        console.log('code: ' + error.code + '\n' +
            'message: ' + error.message + '\n');
    }

    // navigator.geolocation.getCurrentPosition(onSuccess, onError);


    document.getElementById("brNearMe").onclick = function () {
        window.location.replace("/brSearch");


        navigator.geolocation.getCurrentPosition(onSuccess, onError);

    };

    document.getElementById("submitReview").onclick = function () {
        window.location.replace("/brReview");
    };
});

$.post


