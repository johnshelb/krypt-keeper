const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Places extends Model {}


Places.init(
  {
    name: {
      type: DataTypes.STRING,

    },
    address: {
      type: DataTypes.STRING
    },
    cost: {
      type: DataTypes.INTEGER
    },

    is_festival: {
      type: DataTypes.BOOLEAN
    },


  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'places'
  }
);

module.exports = Places;