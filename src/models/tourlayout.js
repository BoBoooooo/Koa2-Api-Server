/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('tourlayout', {
    ID: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    TourId: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      comment: '巡视ID'
    },
    TeamId: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      comment: '巡视组ID'
    },
    PersonId: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      comment: '人员ID'
    },
    AffixSP: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    AffixJD: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Type: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: '岗位类型(组长、副组长、正处巡视专员、副处巡视专员、特聘巡视专员、巡视干部)'
    },
    Log: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Extend: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: '1代表被承接过'
    },
    TurnOne: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Rank: {
      type: DataTypes.INTEGER,
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
    tableName: 'tourlayout'
  })
}
