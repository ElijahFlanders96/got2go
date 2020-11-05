
let newReview;

$(document).ready(function () {
    $.ajax("/api/reviews/", {
        type: "GET",
        data: newReview
    }).then(
        $.get("/api/reviews", function(data) {
            console.log(data);
            if (data.length !==0) {
                for (var i = 0; i <data.length; i++) {
                    var row = $("<li>");
                    row.addClass("chirp");
                    row.append("<p class='location'> Location Name: " + data[i].locName + "</p>");
                    row.append("<p> Bathroom Type: " + data[i].typeBr + "</p>");
                    row.append("<p> Cleanliness Rating: " + data[i].cleanliness + "</p>");
                    row.append("<p> Paying Customer: " + data[i].pay + "</p>");
                    row.append("<p> Coordinates: " + data[i].location + "</p>");
                    row.append("<p> Amenities Available: " + data[i].amenities + "</p>");
                    row.append("<p> Commments/Suggestions: " + data[i].comments + "</p>");
                    $("#reviewedList").prepend(row);
                }
            }
        })
    )
})

