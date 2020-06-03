module.exports = function(sequelize, DataTypes) {
    let Brand = sequelize.define("brand", {
      id: {type: DataTypes.INTEGER, primaryKey: true},
      brand_name: DataTypes.STRING,
    },
    { 
      timestamps:false,
      freezeTableName: true
    }
    );
    return Brand;
  };