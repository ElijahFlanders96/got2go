
// Dependencies
var path = require("path");

// Routes
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/brReview", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/brReview.html"));
  });

  app.get("/brSearch", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/brSearch.html"));
  });

};
