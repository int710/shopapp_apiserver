'use strict';
const {
  Model
} = require('sequelize');
const brand = require('./brand');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Brand, {
        foreignKey: 'brand_id',
      })
      Product.belongsTo(models.Category, {
        foreignKey: 'category_id',
      })
      Product.hasMany(models.BannerDetail, {
        foreignKey: 'product_id'
      })
      Product.hasMany(models.OderDetail, {
        foreignKey: 'product_id'
      })
      Product.hasMany(models.Feedback, {
        foreignKey: 'product_id'
      })
      Product.hasMany(models.NewsDetail, {
        foreignKey: 'product_id'
      })
    }
  }
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    oldprice: DataTypes.INTEGER,
    image: DataTypes.TEXT,
    description: DataTypes.TEXT,
    specification: DataTypes.TEXT,
    buyturn: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    brand_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'products',
    underscored: true
  });
  return Product;
};