// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
 // Get all customers
 app.get("/api/customers", function(req, res) {

  db.customer.findAll({})
  .then(function(dbcustomer) {
    console.log(dbcustomer);
    res.json(dbcustomer); 

}).catch( error => {
  console.log(error);
  res.status( 400 ).send( error )
  
})

});

app.post("/api/signup", function(req, res) {
  db.customer.create({
    firstName: req.body.firts_name,
    lastName: req.body.last_name,
    email: req.body.last_name
  })
    .then(function() {
      res.redirect(307, "/api/checkout");
    })
    .catch(function(err) {
      res.status(401).json(err);
    });
});
 
}
