const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const multer = require("multer");
const app = express()
const PORT = config.get('port') || 5000
const storageConfig = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "uploads");
    },
    filename: (req, file, cb) =>{
        cb(null, Date.now() + '_' + file.originalname);
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


app.use(express.static(__dirname));
app.use(express.json({ extended: true }))
app.use(multer({storage:storageConfig, fileFilter: fileFilter}).single("avatar"));
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