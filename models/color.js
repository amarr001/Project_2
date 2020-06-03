module.exports = function(sequelize, DataTypes) {
    let Color = sequelize.define("color", {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    name: DataTypes.STRING,
    hex_code: DataTypes.STRING
    },
    { 
      timestamps:false,
      freezeTableName: true
    }
    );
    return Color;
  };