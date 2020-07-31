/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('dept', {
    ID: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    DeptName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    UserID: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    ParentID: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    Sequence: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
    tableName: 'dept'
  })
}
