/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('dict1', {
    ID: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    Session: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Turn: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Year: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    No: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Rank: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsCurrent: {
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
    tableName: 'dict1'
  })
}
