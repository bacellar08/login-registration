import axios from "axios"
import { useEffect, useState } from "react"


function Cadastros() {

    const [cadastros, setCadastros] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/cadastros')
        .then((res) => {setCadastros(res.data)
        console.log(res.data)
        })
        .catch(err => console.log(err))
    }, [])


  return (
    <div className="bg-slate-400 w-[700px] mx-auto flex flex-col rounded-md">
        <h1 className="text-2xl mx-auto">Cadastros</h1>
        <ul>
            {cadastros.map((cadastro) => 
            <li className="p-4" key={cadastro.id}>
                <h2 className="p-1">Nome: <span className="bg-white p-1 rounded-md">{cadastro.nome}</span></h2>
                <p className="p-1">Sobrenome: <span className="bg-white p-1 rounded-md">{cadastro.sobrenome}</span></p>
                <p className="p-1">Email: <span className="bg-white p-1 rounded-md">{cadastro.email}</span></p>
                <p className="p-1">Data de Nascimento: <span className="bg-white p-1 rounded-md">{cadastro.dataDeNascimento}</span></p>
                <p className="p-1">CPF: <span className="bg-white p-1 rounded-md">{cadastro.cpf}</span></p>
                <p className="p-1">RG: <span className="bg-white p-1 rounded-md">{cadastro.rg}</span></p>
                {cadastro.addresses.map((address) =>
                <p key={Math.random()}>Endereço: <span className="bg-white p-1 rounded-md">{address.logradouro}, {address.numero}, {address.complemento}. {address.cidade} - {address.estado} - CEP: {address.cep}/</span></p>
                )}
                {cadastro.contatos.map((contato) =>
                <li key={Math.random()}>
                    <h2>Contatos:</h2>
                    <h3>Nome: {contato.nomeContato}</h3>
                    <p>Contato: {contato.numeroContato}</p>
                    <p>Tipo de Contato: {contato.tipoContato}</p>
                </li>
                )}
            </li>
            )}
        </ul>
    </div>
  )
}

export default Cadastros