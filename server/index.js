const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UsuarioModel = require("./Models/Usuarios")
const CadastroModel = require("./Models/Cadastro")
const multer = require('multer');
const path = require('path');

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

app.delete('/cadastros/:id', async (req, res) => {
    const cadastroId = req.params.id
    console.log(cadastroId)

    try {
        const deletedCadastro = await CadastroModel.findByIdAndDelete(cadastroId)

        if (!deletedCadastro) {
            return res.status(400).json({message: 'Cadastro não encontrado'})
        }

        res.status(200).json({message: 'Cadastro deletado com sucesso.'})
    } catch (error) {
        res.status(500).json({message: 'Erro ao deletar cadastro.'})
    }
})

// Upload Imagem

const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });

  const upload = multer({
    storage,
    fileFilter: function (req, file, cb) {
      const allowedFileTypes = ['image/jpeg', 'image/png'];
      if (allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new Error('Tipo de arquivo não suportado. Apenas imagens JPEG ou PNG são permitidas.'));
      }
    },
  });

  app.post('/upload', upload.single('file'), async (req, res) => {
    try {
      // Construir a URL completa da imagem
      const imageUrl = `/uploads/${req.file.filename}`
  
      // Responda ao cliente com a URL da imagem
      await res.json({ imageUrl });
    } catch (error) {
      console.error('Erro ao processar o upload:', error);
      res.status(500).json({ error: 'Erro ao processar o upload.' });
    }
  });


app.listen(3001, () => {
    console.log("Server is running")
})