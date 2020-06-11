module.exports = function(sequelize, DataTypes) {
    let Feature = sequelize.define("feature", {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    feature_name: DataTypes.STRING,
    category_id: DataTypes.INTEGER
    },
    { 
      timestamps:false,
      freezeTableName: true
    }
    );
    return Feature;
  };