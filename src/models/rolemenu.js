/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('rolemenu', {
    ID: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    RoleID: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    MenuID: {
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
    tableName: 'rolemenu'
  })
}
