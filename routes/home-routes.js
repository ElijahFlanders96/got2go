let db = require("../models");

module.exports = function(app) {

    // GET route for getting all of the reviews
  app.get("/api/reviews/", function(req, res) {
    db.Review.findAll({})
      .then(function(dbReview) {
        res.json(dbReview);
      });
  });

  // Get route for retrieving a single review
  app.get("/api/reviews/:id", function(req, res) {
    db.Review.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // POST route for saving a new review
  app.post("/api/reviews", function(req, res) {
    console.log(req.body);
    db.Review.create(
      req.body
    )
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
    // PUT route for updating reviews
    app.put("/api/reviews", function(req, res) {
        db.Review.update(req.body,
          {
            where: {
              id: req.body.id
            }
          })
          .then(function(dbReview) {
            res.json(dbReview);
          });
      });
}