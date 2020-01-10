var path = require("path");

module.exports = function(app) {
  // Load home page 1
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/homePage.html"));
  });
  // Load home page
  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/homePage.html"));
  });

  // Load about us page
  app.get("/about-us", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/aboutUsPage.html"));
  });
  // Load Menu page
  app.get("/menu-page", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/menuPage.html"));
  });

  app.get("/orders", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/menuPage.html"));
  });
  // Load Menu page
  app.get("/newCustomer", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/registerForm.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

// 4: Home, menus, pedidos, Aboutus, Contact, CustomerInfo

// POST Y UPDATES EN MENU, PEDIDOS, CUSTOMER INFO
// home gets
