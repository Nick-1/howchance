const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    title: {type: String, required: true},
    description: {type: String},
    topic: { type: Types.ObjectId, ref: 'Topic' },
    count: {type: Number, default: 0}
})

module.exports = model('Item', schema)