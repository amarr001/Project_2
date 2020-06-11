'use strict';
// Dependencies
// =============================================================
var db = require("../models");

// Routes
// ============================================================


module.exports = function(app) {

  app.get("/", function(req, res, next) {

    db.model.findAll({
      include:[db.brand, db.product]
    })

    .then(function(data){

        var branddata = data.values;
       
        branddata.data = data.map(function(data){ return data.toJSON() });
        
        var data = branddata.data
        
        res.render("index",{data})
        console.log(data);
       
      })     
    })

      app.get("/api/product/:id", function(req, res) {

        db.model.findAll({
          where: {
           local_model_id: req.params.id
          },
          include: [db.brand, db.product]


        }).then(function(data){

          var branddata = data.values;
         
         branddata.data = data.map(function(data){return data.toJSON() });
          
          var data = branddata.data
          
          res.render("product",{data})
          console.log(data);

        })
         
        });

        app.get("/api/product/buy/:id", function(req, res) {

          db.product.findAll({
            where: {
             price: req.params.id
            },
            include: [db.model]
  
  
          }).then(function(data){
  
            var branddata = data.values;
           
           branddata.data = data.map(function(data){return data.toJSON() });
            
            var data = branddata.data
            
            res.render("cart",{data})
            console.log(data);
  
          })
           
          });
  }

