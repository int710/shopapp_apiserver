'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BannerDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      BannerDetail.belongsTo(models.Product, {
        foreignKey: 'product_id'
      })
      // thuộc tính field banner_id có quan hệ với bảng banner, nhiều một, nhiều banner detail dùng chung 1 banner
      BannerDetail.belongsTo(models.Banner, {
        foreignKey: 'banner_id',
      })
    }
  }
  BannerDetail.init({
    product_id: DataTypes.INTEGER,
    banner_id: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'BannerDetail',
    tableName: 'banner_details',
    underscored: true
  });
  return BannerDetail;
};