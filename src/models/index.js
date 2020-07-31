/*
 * @file: 自动导入models下所有model
 * @copyright: NanJing Anshare Tech .Com
 * @author: BoBo
 * @Date: 2019年05月11 10:30:03
 */
import db from '../lib/sequelize'

const fs = require('fs')

const files = fs.readdirSync(__dirname)

const jsFiles = files.filter((f) => {
  return f.endsWith('.js') && !f.startsWith('index')
}, files)

module.exports = {}

for (const f of jsFiles) {
  const name = f.substring(0, f.length - 3)
  module.exports[name] = db.import('./' + f)
}
