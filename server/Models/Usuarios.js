const mongoose = require('mongoose')

const UsuarioSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: Number,
})

const UsuarioModel = mongoose.model("users", UsuarioSchema)
module.exports = UsuarioModel

// module.exports = mongoose.model('UsuarioModel', new mongoose.Schema({
//     name : String,
//     email: String,
//     password: String,
//     phone: Number,

// }))