
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
                    row.append("<p>" + data[i].locName + "</p>");
                    row.append("<p>" + data[i].typeBr + "</p>");
                    row.append("<p>" + data[i].cleanliness + "</p>");
                    row.append("<p>" + data[i].pay + "</p>");
                    row.append("<p>" + data[i].location + "</p>");
                    row.append("<p>" + data[i].amenities + "</p>");
                    row.append("<p>" + data[i].comments + "</p>");
                    $("#reviewedList").prepend(row);
                }
            }
        })
    )
})

