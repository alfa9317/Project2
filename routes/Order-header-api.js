var db = require("../models");

module.exports = function(app) {
  // Get all ORDERS HEADER
  app.get("/api/orders-header", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.OrderHeader.findAll({
      include: [db.Customer]
    }).then(function(dbOrderHeader) {
      res.json(dbOrderHeader);
    });
  });

  // Get route for a specific ORDER HEADER
  app.get("/api/orders-header/id/:id", function(req, res) {
    db.OrderHeader.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Customer]
    }).then(function(dbOrderHeader) {
      res.json(dbOrderHeader);
    });
  });
  // POST route for saving a new ORDER HEADER
  app.post("/api/order-headers", function(req, res) {
    console.log(req.body);
    db.OrderHeader.create({
      OrderStatus: "In process"
    }).then(function(dbOrderHeader) {
      res.json(dbOrderHeader);
    });
  });

  // Create a new example
  // app.post("/api/examples", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(
  //     dbExample
  //   ) {
  //     res.json(dbExample);
  //   });
  // });
};
