$(document).ready(function () {
    //Getting references to our form and inputs
    let locationInput = $("input#inputLocation");

    //when the input is submitted, we validate there's a location entered
    locationInput.on("submit", function (event) {
        event.preventDefault();
        let userData = {
            text: locationInput.val().trim()
        };

        if (!userData.text) {
            return;
        }

        //If we have a location we run searchForUser function and clear the input
        searchForUser(userData.text);
        locationInput.val("");
    });

    // searchForUser does a post to our api route (line 24 still need to figure out) and if sucessful, redirects us to the brSearch.html page
    function searchForUser(text) {
        $.post("/api/", {
            text: text
        })
            .then(function () {
                window.location.replace("/brSearch")
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    document.getElementById("brNearMe").onclick = function () {
        location.href = "../public/brSearch.html";
    };

    document.getElementById("submitReview").onclick = function () {
        location.href = "../public/brReview.html";
    };
});