const express = require('express');
const bodyParser = require('body-parser');



const cors = require('cors');

// create express app
const app = express();
const port = process.env.PORT || 3000

const multer = require('multer')
const upload = multer({
    //dest: 'images'
})
app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

