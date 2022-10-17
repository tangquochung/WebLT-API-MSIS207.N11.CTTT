let express = require('express')
let router = express.Router()
router.get('/person',(req, res) => {
    res.send('You have request a person')
})

module.exports=router