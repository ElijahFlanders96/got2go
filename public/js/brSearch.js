
$(document).ready(function () {
    $.ajax("/api/reviews/", {
        type: "GET",
        data: newReview
    }).then(
        $.get("/api/refiews", function(data) {
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
// Send the PUT request.

// var node = document.createElement("LI");                 // Create a <li> node
// var textnode = document.createTextNode();         // Create a text node
// node.appendChild(textnode);                              // Append the text to <li>
// document.getElementById("reviewedList").appendChild(node);     // Append <li> to <ul> with id="myList"


