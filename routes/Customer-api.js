var db = require("../models");

module.exports = function(app) {
  // Get all Foods
  app.get("/api/customer", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Customer.findAll({
      include: [db.OrderHeader]
    }).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });

  // Get route for a specific ORDER LINES
  app.get("/api/customer/id/:id", function(req, res) {
    db.Customer.findOne({
      where: {
        id: req.params.id
      },
      include: [db.OrderHeader]
    }).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });
};
