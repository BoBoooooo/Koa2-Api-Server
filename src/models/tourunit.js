/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('tourunit', {
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
    TourName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: '巡视标准名'
    },
    Session: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: '届次'
    },
    Turn: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: '轮次'
    },
    Year: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: '年度'
    },
    TourTime: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: '巡视时间'
    },
    ObjUnit: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: '巡视对象'
    },
    ObjUnitName: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: '巡视对象'
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
    tableName: 'tourunit'
  })
}
