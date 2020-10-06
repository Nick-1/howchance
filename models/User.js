const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    lang: {type: String, default: 'en'},
    theme: {type: String, default: 'day'},
    topics: [{ type: Types.ObjectId, ref: 'Topic' }]
})

module.exports = model('User', schema)