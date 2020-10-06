const {Router} = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const router = Router()


router.post(
    '/register',
    [
        check('email', 'Wrong email').isEmail(),
        check('password', 'Password must be at least 6 characters long').isLength({ min: 6 })
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()) {
                return res.status(400).json({ message: 'Incorrect registration data', errors: errors.array() })
            }

            const {email, password} = req.body
            const candidate = await User.findOne({email})
            if (candidate) return res.status(400).json({message: 'Such user already exists'})

            const hashedPassword = await bcrypt.hash(password, 12)
            const user = new User({email, password: hashedPassword})
            await user.save()
            res.status(201).json({message: 'User created successfully'})

        } catch (e) {
            await res.status(500).json({message: 'Something went wrong :('})
        }
    })

router.post(
    '/login',
    [
        check('email', 'Please enter correct email').normalizeEmail().isEmail(),
        check('password', 'Please enter the password').exists()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()) {
                return res.status(400).json({ message: 'Incorrect login data', errors: errors.array() })
            }

            const { email, password } = req.body
            const user = await User.findOne({ email })
            if (!user) return res.status(400).json({ message: 'User is not found' })

            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) return res.status(400).json({ message: 'Wrong data. Please try again' })

            const token = jwt.sign({ userId: user.id }, config.get('jwtSecret'), { expiresIn: '1h' })
            res.json({ token, userId: user.id })

        } catch (e) {
            await res.status(500).json({message: 'Something went wrong :('})
        }
    })


module.exports = router