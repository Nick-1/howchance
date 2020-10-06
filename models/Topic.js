const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    title: {type: String, required: true},
    owner: { type: Types.ObjectId, ref: 'User' },
    items: [{ type: Types.ObjectId, ref: 'Item' }]
})

module.exports = model('Topic', schema)