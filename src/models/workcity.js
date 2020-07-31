/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('workcity', {
    ID: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    City: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Near1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Near2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Near3: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'workcity'
  })
}
