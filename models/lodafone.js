module.exports = function(sequelize, DataTypes) {
  let Brand = sequelize.define("brand", {
    id: DataTypes.INTEGER,
    brand_name: DataTypes.STRING
  });
  return Brand;
};

module.exports = function(sequelize, DataTypes) {
  let ModelImages = sequelize.define("model_images", {
    id: DataTypes.INTEGER,
    local_model_id: DataTypes.INTEGER,
    color_id: DataTypes.INTEGER,
    image_url: DataTypes.STRING
  });
  return ModelImages;
};

module.exports = function(sequelize, DataTypes) {
  let FeatureCategory = sequelize.define("feature_category", {
    id: DataTypes.INTEGER,
    category_name: DataTypes.STRING
  });
  return FeatureCategory;
};

module.exports = function(sequelize, DataTypes) {
  let Feature = sequelize.define("feature", {
    id: DataTypes.INTEGER,
    feature_name: DataTypes.STRING,
    category_id: DataTypes.INTEGER
  });
  return Feature;
};

module.exports = function(sequelize, DataTypes) {
  let Color = sequelize.define("color", {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    hex_code: DataTypes.STRING
  });
  return Color;
};

module.exports = function(sequelize, DataTypes) {
  let Product = sequelize.define("product", {
    sku: DataTypes.INTEGER,
    local_model_id: DataTypes.INTEGER,
    color_id: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    units_in_stock: DataTypes.INTEGER
  });
  return Product;
};

module.exports = function(sequelize, DataTypes) {
  let  Model = sequelize.define("model", {
    local_model_id: DataTypese.INTEGER,
    brand_id: DataTypes.STRING,
    model_number: DataTypes.STRING,
    model_name: DataTypes.STRING,
    description: DataTypes.STRING
  });
  return Model;
};

module.exports = function(sequelize, DataTypes) {
  let  ModelFeature = sequelize.define("model_feature", {
    model_id: DataTypes.INTEGER,
    feature_id: DataTypes.INTEGER,
    feature_description: DataTypes.STRING
  });
  return ModelFeature;
};

module.exports = function(sequelize, DataTypes) {
  let  SoldProducts = sequelize.define("sold_products", {
    id: DataTypes.INTEGER,
    invoice_number: DataTypes.INTEGER,
    sku: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  });
  return  SoldProducts;
};

module.exports = function(sequelize, DataTypes) {
  let  Invoice = sequelize.define("invoice", {
    invoice_number: DataTypes.INTEGER,
   customer_number: DataTypes.INTEGER
  });
  return  Invoice;
};

module.exports = function(sequelize, DataTypes) {
  let Customer = sequelize.define("customer", {
    id: DataTypes.INTEGER,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING
  });
  return  Customer;
};

