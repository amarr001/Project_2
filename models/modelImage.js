module.exports = function(sequelize, DataTypes) {
    let ModelImages = sequelize.define("model_images", {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    local_model_id: DataTypes.INTEGER,
    color_id: DataTypes.INTEGER,
    image_url: DataTypes.STRING
    },
    { 
      timestamps:false,
      freezeTableName: true
    }
    );

   ModelImages.associate = model => {
      ModelImages.belongsTo(model.model,{
          foreignKey:'local_model_id',
          sourceKey: 'image_url'
          //sourceKey: 'id'
      })
  }
  


    return ModelImages;
  };