/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('menu', {
    ID: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ''
    },
    Icon: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: ''
    },
    ParentID: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    Url: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: ''
    },
    Sequence: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Timestamp: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'menu'
  })
}
