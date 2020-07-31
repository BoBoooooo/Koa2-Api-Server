/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('users', {
    ID: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    DeptID: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    RoleID: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    MasterID: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    UserName: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ''
    },
    Password: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ''
    },
    RealName: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: ''
    },
    Rank: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    IsKeyNode: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    MasterType: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: ''
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
    tableName: 'users'
  })
}
