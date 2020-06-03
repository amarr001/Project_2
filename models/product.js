module.exports = function(sequelize, DataTypes) {
    let Product = sequelize.define("product", {
    sku: {type: DataTypes.INTEGER, primaryKey: true},
    local_model_id: DataTypes.INTEGER,
    color_id: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    units_in_stock: DataTypes.INTEGER
    },
    { 
      timestamps:false,
      freezeTableName: true
    }
    );
    return Product;
  };