module.exports = function(sequelize, DataTypes) {
    let Model = sequelize.define("model", {
    local_model_id: {type: DataTypes.INTEGER, primaryKey: true},
    brand_id: DataTypes.STRING,
    model_number: DataTypes.STRING,
    model_name: DataTypes.STRING,
    description: DataTypes.STRING
    },
    { 
      timestamps:false,
      freezeTableName: true
    }
    );
    return Model;
  };