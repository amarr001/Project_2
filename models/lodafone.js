// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

var Brand = sequelize.define("brand", {
    id: Sequelize.INTEGER,
    brand_name: Sequelize.STRING
});

var ModelImages = sequelize.define("model_images", {
    id: Sequelize.INTEGER,
    local_model_id: Sequelize.INTEGER,
    color_id: Sequelize.INTEGER,
    image_url: Sequelize.STRING
  });

var FeatureCategory = sequelize.define("feature_category", {
    id: Sequelize.INTEGER,
    category_name: Sequelize.STRING
  });

var Feature = sequelize.define("feature", {
    id: Sequelize.INTEGER,
    feature_name: Sequelize.STRING,
    category_id: Sequelize.INTEGER
  });

var Color = sequelize.define("color", {
    id: Sequelize.INTEGER,
    name: Sequelize.STRING,
    hex_code: Sequelize.STRING
  });

var Product = sequelize.define("product", {
    sku: Sequelize.INTEGER,
    local_model_id: Sequelize.INTEGER,
    color_id: Sequelize.INTEGER,
    price: Sequelize.DECIMAL,
    units_in_stock: Sequelize.INTEGER
  });

var Model = sequelize.define("model", {
    local_model_id: Sequelize.INTEGER,
    brand_id: Sequelize.STRING,
    model_number: Sequelize.STRING,
    model_name: Sequelize.STRING,
    description: Sequelize.STRING
  });

var ModelFeature = sequelize.define("model_feature", {
    model_id: Sequelize.INTEGER,
    feature_id: Sequelize.INTEGER,
    feature_description: Sequelize.STRING
  });

var SoldProducts = sequelize.define("sold_products", {
    id: Sequelize.INTEGER,
    invoice_number: Sequelize.INTEGER,
    sku: Sequelize.INTEGER,
    quantity: Sequelize.INTEGER
  });

var Invoice = sequelize.define("invoice", {
   invoice_number: Sequelize.INTEGER,
   customer_number: Sequelize.INTEGER
  });

var Customer = sequelize.define("customer", {
    id: Sequelize.INTEGER,
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    email: Sequelize.STRING
   });


// Syncs with DB
Brand.sync();
ModelImages.sync();
FeatureCategory.sync();
Color.sync();
Feature.sync();
Product.sync();
Model.sync();
ModelFeature.sync();
SoldProducts.sync();
Invoice.sync();
Customer.sync();

// Makes the Models available for other files (will also create a table)
module.exports = Brand;
module.exports = ModelImages;
module.exports = FeatureCategory;
module.exports = Color;
module.exports = Model;
module.exports = ModelFeature
module.exports = SoldProducts;
module.exports = Invoice;
module.exports = Customer;

