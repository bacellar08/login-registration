import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"



function Login() {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post('http://localhost:3001/login', {email, password})
    .then(result => {console.log(result)
      if (result.data === "Success.") {
        navigate('/dashboard')
      }
    })
    .catch(err => console.log(err))


  }

  return (
    <div className="h-screen flex items-center justify-center">
    <div className="bg-slate-400 text-slate-800 flex p-2 w-[500px] rounded-md">
        <form onSubmit={handleSubmit}>
        <div className="h-[200px] flex flex-col justify-between">
        <h1 className="text-2xl">Login de Usuário</h1>
        <div className="flex flex-wrap">
            <div className="px-1">
            <label className="block" htmlFor="email">Email</label>
            <input
            className="outline-none px-1 rounded-md"
            required
            name='email'
            type="text"
            onChange={(e) => {setEmail(e.target.value)}}></input>
            </div>
            <div className="px-1">
            <label className="block" htmlFor="password">Senha</label>
            <input
            className="outline-none px-1 rounded-md"
            required
            name="password"
            type="password"
            onChange={(e) => {setPassword(e.target.value)}}></input>
            </div>
        </div>
        <Link to='/signup' className="p-1 hover:text-white w-60">Registrar</Link>
        <button className="bg-blue-800 text-white rounded-md p-1 w-[180px]">Login</button>
        </div>
        </form>
        <div>
            <Link to="/dashboard">
            <button className="bg-blue-800 p-20 text-white rounded-md">Upload Imagem</button>
            </Link>
        </div>

    </div>
    </div>
  )
}

export default Login