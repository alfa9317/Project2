var db = require("../models");

module.exports = function(app) {
  // FOR ORDERS HEADER - FOR ORDERS HEADER - FOR ORDERS HEADER - FOR ORDERS HEADER - FOR ORDERS HEADER
  // Get all ORDERS HEADER
  app.get("/api/orders-header", function(req, res) {
    db.OrderHeader.findAll({}).then(function(dbOrderHeader) {
      res.json(dbOrderHeader);
    });
  });
  // Get route for a specific ORDER HEADER
  app.get("/api/orders-header/id/:id", function(req, res) {
    db.OrderHeader.findOne({
      where: {
        id: req.params.id
      }
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
  // FOR ORDERS LINE - FOR ORDERS LINE - FOR ORDERS LINE - FOR ORDERS LINE - FOR ORDERS LINE

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
