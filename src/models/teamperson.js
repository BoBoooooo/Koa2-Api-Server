/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('teamperson', {
    ID: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    PersonId: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    TeamId: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    Type: {
      type: DataTypes.STRING(255),
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
    tableName: 'teamperson'
  })
}
