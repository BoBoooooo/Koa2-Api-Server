import sequelize from '../lib/sequelize'

const person = sequelize.import('./person.js')

export default person
