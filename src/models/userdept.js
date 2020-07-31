/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('userdept', {
    ID: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    UserID: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    DeptID: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    Timestamp: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'userdept'
  })
}
