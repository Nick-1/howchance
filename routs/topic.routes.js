const {Router} = require('express')
const Topic = require('../models/Topic')
const auth = require('../middleware/auth.middleware')
const router = Router()

router.post('/topic', auth, async (req, res) => {
    try {
        const { title } = req.body
        const topic = new Topic({ title, owner: req.user.userId })
        await topic.save()
        res.status(201).json({ topic })
    } catch (e) {
        await res.status(500).json({message: 'Error while creating a topic :('})
    }
})

router.get('/topic', auth, async (req, res) => {
    try {
        const topics = await Topic.find({ owner: req.user.userId })
        res.json(topics)
    } catch (e) {
        await res.status(500).json({message: 'Error of sending the list of topics :( '})
    }
})


router.get('/topic/:id', async (req, res) => {
    try {

    } catch (e) {
        await res.status(500).json({message: 'Error of send topic :( '})
    }
})


module.exports = router