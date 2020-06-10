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
  /* Building the association with Models  */
  Model.associate = model => {
      Model.belongsTo(model.brand,{
          foreignKey:'brand_id',
          sourceKey: 'brand_name'
      })
        Model.hasOne(model.product, {
          foreignKey: 'local_model_id'
        })
    
  }
  return Model;
};