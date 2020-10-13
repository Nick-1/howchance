const {Router} = require('express')
const Item = require('../models/Item')
const auth = require('../middleware/auth.middleware')
const router = Router()
const config = require('config')
const dist = config.get('destination')

router.post('/item', auth, async (req, res, nex) => {
    try {
        const {title, description, topic} = req.body
        const item = new Item({title, description, topic, image: req.file.path || null})
        await item.save()
        res.status(201).json({item})
    } catch (e) {
        await res.status(500).json({message: 'Error while creating a Item :('})
    }
})

router.put('/item/:id', auth, async (req, res, nex) => {
    try {
        const update = {title, description} = req.body;
        if (req.file) update.image = req.file.path
        const item = await Item.findByIdAndUpdate(req.params.id, update, {new: true})
        console.log(update)
        res.status(201).json({item})
    } catch (e) {
        await res.status(500).json({message: 'Error while editing a Item :('})
    }
})

router.get('/item/topic_id/:id', auth, async (req, res) => {
    try {
        const items = await Item.find({topic: req.params.id})
        res.json(items)
    } catch (e) {
        await res.status(500).json({message: 'Error of sending the list of Items :( '})
    }
})

router.get('/item/:id', auth, async (req, res) => {
    try {
        const item = await Item.findById(req.params.id)
        res.json(item)
    } catch (e) {
        await res.status(500).json({message: 'Error of sending the list of Items :( '})
    }
})

router.delete('/item/:id', auth, async (req, res) => {
    try {
        const item = await Item.findById(req.params.id)
        await item.remove()
        res.json(item)
    } catch (e) {
        await res.status(500).json({message: 'Error while deleting a Item :( '})
    }
})

module.exports = router