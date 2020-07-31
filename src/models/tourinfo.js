/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('tourinfo', {
    ID: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    TourUnitID: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    ObjUnit: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ObjUnitName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    TeamId: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Timestamp: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tourinfo'
  })
}
