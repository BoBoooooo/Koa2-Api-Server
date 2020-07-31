/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('affix', {
    ID: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    MasterID: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      comment: '该条内容ID'
    },
    Prev: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    Next: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    Type: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: '',
      comment: ''
    },
    FileName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SaveName: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    FileExtension: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ContentType: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Content: {
      type: 'LONGBLOB',
      allowNull: true
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
    tableName: 'affix'
  })
}
