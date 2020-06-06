'use strict';
// Dependencies
// =============================================================
var db = require("../models");

// Routes
// ============================================================


module.exports = function(app) {
  app.get("/", function(req, res) {

    db.model.findAll({
      include: [db.brand]
    })
    then(function(model){
      var modeldata = model.values;
      modeldata.model = model.map(function(model){ return model.toJSON() });
      var model = modeldata.model
      res.render("index",{model})
      console.log(model)
  
      })
})

app.get("/product", function(req, res) {

  db.brand.findAll({
    
  })
  .then(function(){
    
      res.render("product")
        
    })
})
}

/* app.get("/", function(req, res) {
  db.brand.findAll({})
  .then(function(brand){
      var branddata = brand.values;
      branddata.brand = brand.map(function(brand){ return brand.toJSON() });
      var brand = branddata.brand
      res.render("index",{brand})
      console.log(brand);
      console.log(dbmodel);
  })*/

  /*.then(function(model){
    var modeldata = model.values;
    modeldata.model = model.map(function(model){ return model.toJSON() });
    var model = modeldata.model
    res.render("index",{model})
    console.log(model);*/ 