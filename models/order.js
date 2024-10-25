'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // một order thuộc về một user
      Order.belongsTo(models.User, {
        foreignKey: 'user_id'
      })
      // quan hệ 1 - nhiều
      Order.hasMany(models.OrderDetail, {
        foreignKey: 'order_id',
      })
    }
  }
  Order.init({
    user_id: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    note: DataTypes.TEXT,
    total: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Order',
    tableName: "oders",
    underscored: true
  });
  return Order;
};