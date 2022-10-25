let express = require('express')

let app = express()

let personRoute = require('./routes/person')

let path = require('path')
app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`)
     //req.send(' ')
    next()
})
    
app.use(personRoute)
app.use(express.static('public'))

//Handler for 404 Not Found - Resource not Found
app.use((req, res, next) => {
    res.status(404).send('We think you are lost!')
})

//Handler for Error 505
app.use((err, req, res, next) => {
    console.error(err.stack)

    res.sendFile(path.join(__dirname,'../public/500.html'))
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info (`Server has started on ${PORT}`))