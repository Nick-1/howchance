const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const multer = require("multer");
const app = express()
const path = require('path')
const PORT = config.get('port') || 5000
const dist = config.get('destination')
const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) =>{
        const name = Date.now() + '_' + file.originalname
        req.dir = `${dist}/${name}`
        req.test = path.join(__dirname, dist, name)
        cb(null, name);
    }
});
const fileFilter = (req, file, cb) => {
    if(file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"||
    file.mimetype === "image/jpeg"){
        cb(null, true);
    }
    else{
        cb(null, false);
    }
 }


app.use(express.json({ extended: true }))
app.use(multer({storage:storageConfig, fileFilter: fileFilter}).single("avatar"));
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use('/api/auth', require('./routs/auth.routes'))
app.use('/api/action', require('./routs/topic.routes'))
app.use('/api/action', require('./routs/item.routes'))

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        app.listen(PORT, () => console.log(`Server has been started on port...${PORT}`))
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()