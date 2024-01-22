const mongoose = require('mongoose')

const CadastroSchema = new mongoose.Schema({
    nome: String,
    sobrenome: String,
    email: String,
    dataDeNascimento: Date,
    cpf: Number,
    rg: Number,
    addresses: Array,
    contatos: Array
})

const CadastroModel = mongoose.model("cadastros", CadastroSchema)
module.exports = CadastroModel