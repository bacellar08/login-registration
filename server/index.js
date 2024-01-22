const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UsuarioModel = require("./Models/Usuarios")
const CadastroModel = require("./Models/Cadastro")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://alexandrebacellar:Iepf7F5OJV48zrg0@cluster0.evqus2o.mongodb.net/usuarios");


app.post("/login", (req, res) => {
    const { email, password } = req.body;
    UsuarioModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json("Success.")
            } else {
                res.json("Wrong password.")
            }
        } else {
            res.json('User does not exist.')
        }
    })
})

app.post('/signup', (req, res) => {
    UsuarioModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.post('/cadastrar', (req, res) => {
    CadastroModel.create(req.body)
    .then(cadastro => res.json(cadastro))
    .catch(err => res.json(err))
})

app.get('/cadastros', async (req, res) => {
    const cadastros = await CadastroModel.find()
    try {
        res.status(200).json(cadastros)

        console.log(cadastros)
    } catch (error) {
        res.status(500).json({message: 'Erro'})
        console.log(error)
    }
})



app.listen(3001, () => {
    console.log("Server is running")
})