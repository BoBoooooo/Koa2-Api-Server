/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('person', {
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
    No: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: '',
      comment: '统一编号0  '
    },
    Name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: '姓名'
    },
    WorkLevel: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: '职级0  厅处科'
    },
    Workduty: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: '行政职务'
    },
    WorkUnit: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: '工作单位'
    },
    Gender: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: '性别'
    },
    DOB: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: '出生年月'
    },
    Age: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: '年龄 0'
    },
    DutyTime: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: '现职务时间'
    },
    LevelTime: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: '现职级时间'
    },
    PartyTime: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: '入党时间'
    },
    PartyAge: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: '党龄 0'
    },
    JobDuty: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: '专业技术职务'
    },
    WorkTime: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    Specialty: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: '专业专长'
    },
    Origin: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: '籍贯'
    },
    BirthPlace: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: '出生地'
    },
    GraduateSchool: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: '毕业院校'
    },
    Education: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: '学历'
    },
    JobSchool: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: '在职毕业院校'
    },
    JobEducation: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: '在职教育学历'
    },
    Health: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: '健康状况'
    },
    Phone: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: '手机号码'
    },
    IDCard: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: '身份证号'
    },
    Address: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: '家庭住址'
    },
    Resume: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: '主要工作经历'
    },
    Remark: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: '备注'
    },
    Photo: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: '电子照片'
    },
    Turn: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '0',
      comment: '拟参加巡视轮次'
    },
    IsValid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: '有效状态 ( 有效1，无效0，2关注)'
    },
    IsPartTime: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '0',
      comment: '是否在库'
    },
    Archive: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: '人员库名称 (三个库)'
    },
    Type: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: '来源类型 ( )'
    },
    PDF: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: '审批表pdf'
    },
    Nation: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: '民族'
    },
    Word: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Affix: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    sort: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TeamId: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    AvoidObjUnit: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: '回避对象'
    },
    WorkArea: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: '工作所在市'
    },
    IsExperience: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: '巡视巡察经验'
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
    tableName: 'person'
  })
}
