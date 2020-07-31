/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('role', {
    ID: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    RoleName: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ''
    },
    Rank: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Url: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: ''
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
    tableName: 'role'
  })
}
