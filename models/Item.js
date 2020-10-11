const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    title: {type: String, required: true},
    description: {type: String},
    topic: { type: Types.ObjectId, ref: 'Topic' },
    count: {type: Number, default: 0},
    image: { type: String },
})

module.exports = model('Item', schema)