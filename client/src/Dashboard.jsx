import { Link } from "react-router-dom"
import Cadastrar from "./Cadastrar"


function Dashboard() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-slate-400 text-slate-800 flex flex-col justify-between p-2 w-[300px] h-[200px] rounded-md">
        <div>
        <h1 className="text-2xl">Área do Usuário</h1>
        <h2>Bem vindo, usuário.</h2>
        </div>
        <div className="flex flex-col">
        <Link to="/cadastrar" element={<Cadastrar/>}>
          <button className="bg-blue-800 text-white px-2 my-1 rounded-md ">Cadastrar Pessoa Física</button>
        </Link>
        <Link>
          <button className="bg-blue-800 text-white px-2 my-1 rounded-md">Cadastros</button>
        </Link>
        <Link to='/login'>
          <button className="bg-blue-800 text-white px-2 my-1 rounded-md">Sair</button>
        </Link>
        </div>



      </div>
    </div>
  )
}

export default Dashboard