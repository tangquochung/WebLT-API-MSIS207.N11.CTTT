let mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://QuocHung:Goldonha321@clusterhung.qm5cvo5.mongodb.net/testapimail`)

let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        require: true,
        unique: true
    }
})

module.exports = mongoose.model('Customer',CustomerSchema) 