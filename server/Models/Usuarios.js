const mongoose = require('mongoose')

const UsuarioSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: Number,
    imageUrl: String
})

const UsuarioModel = mongoose.model("users", UsuarioSchema)
module.exports = UsuarioModel