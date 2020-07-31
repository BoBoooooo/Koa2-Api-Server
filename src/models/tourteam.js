/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('tourteam', {
    ID: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    HandleDept: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    HandleStaff: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    TeamName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: '巡视组名'
    },
    TeamType: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: '类型(巡视组、“机动式”巡视组)'
    },
    TotalNum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: '总人数'
    },
    DeputyNum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: '副组长人数'
    },
    Remark: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: '备注'
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
    tableName: 'tourteam'
  })
}
