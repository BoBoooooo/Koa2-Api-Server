/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('unit', {
    ID: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    UnitName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ParentID: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    Rank: {
      type: DataTypes.INTEGER,
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
    tableName: 'unit'
  })
}
