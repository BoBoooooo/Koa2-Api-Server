/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('log', {
    ID: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    UserID: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    OptTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IP: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: ''
    },
    Region: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ''
    },
    Account: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ''
    },
    OptType: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ''
    },
    Content: {
      type: DataTypes.STRING(10000),
      allowNull: true,
      defaultValue: ''
    }
  }, {
    sequelize,
    tableName: 'log'
  })
}
