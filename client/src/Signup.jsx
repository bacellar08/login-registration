import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


export default function Signup() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [password, setPassword] = useState()
    const [buttonText, setButtonText] = useState('Cadastrar Usuário')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('http://localhost:3001/signup', {name, email, phone, password})
        .then(result => {console.log(result)
        setButtonText('Usuário cadastrado.')
        navigate('/login')
        
        })
        .catch(err => console.log(err))

    }


  return (
    
    <div className="h-screen flex items-center justify-center">
    <div className="bg-slate-400 text-slate-800 flex p-2 w-[620px] rounded-md">
        <form onSubmit={handleSubmit}>
        <div className="h-[200px] flex flex-col justify-between">
        <h1 className="text-2xl">Cadastrar Usuário</h1>
        <div className="flex flex-wrap">
            <div className="px-1">
            <label className="block" htmlFor="userName">Username</label>
            <input
            className="outline-none"
            required
            name='userName'
            type="text"
            onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div className="px-1">
            <label className="block" htmlFor="email">Email</label>
            <input
            className="outline-none"
            required
            name="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className="px-1">
            <label className="block" htmlFor="phone">Telefone</label>
            <input
            className="outline-none"
            name='phone'
            type="text"
            onChange={(e) => setPhone(e.target.value)}></input>
            </div>
            <div className="px-1">
            <label className="block" htmlFor="password">Senha</label>
            <input
            className="outline-none"
            required
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}></input> 
            </div>
        </div>
        <Link to='/login' className="p-1 hover:text-white w-60">Já sou cadastrado. Ir para Login.</Link>
        <button className="bg-blue-800 text-white rounded-md p-1 w-[300px] hover:bg-blue-700">{buttonText}</button>
        </div>
        </form>
        <div>
            <button className="bg-blue-800 hover:bg-blue-700 p-20 text-white rounded-md">Upload Imagem</button>
        </div>

    </div>
    </div>
  )
}
