import axios from "axios"
import { useEffect, useState } from "react"
import { FaTrashCan } from "react-icons/fa6"
import { PiPencilBold } from "react-icons/pi"


function Cadastros() {

    const [cadastros, setCadastros] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/cadastros')
        .then((res) => {setCadastros(res.data)
        console.log(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    const handleDelete = async (e) => {
        try {
            const id = e._id
            console.log('ID: ', id)
            const res = await axios.delete(`http://localhost:3001/cadastros/${id}`)
            if (res.status === 200) {
                console.log('Deletado.')
            } else {
                console.error('Erro ao deletar')
            }
        } catch (error) {
            console.error('Erro ao fazer a solicitação')
        }
    }


  return (
    <div className="bg-slate-400 w-[700px] p-6 my-10 mx-auto flex flex-col rounded-md">
        <h1 className="text-2xl mx-auto">Cadastros</h1>
        <ul>
            {cadastros.length === 0 ? (
                <h1>Sem cadastros.</h1>
            ) : (
            cadastros.map((cadastro) => {
                return (
            <li className="p-4" key={cadastro.id}>
                <h2 className="bg-white p-1 rounded-md m-2">Nome: <span className="text-gray-500">{cadastro.nome}</span></h2>
                <p className="bg-white p-1 rounded-md m-2">Sobrenome: <span className="text-gray-500">{cadastro.sobrenome}</span></p>
                <p className="bg-white p-1 rounded-md m-2">Email: <span className="text-gray-500">{cadastro.email}</span></p>
                <p className="bg-white p-1 rounded-md m-2">Data de Nascimento: <span className="text-gray-500">{cadastro.dataDeNascimento}</span></p>
                <p className="bg-white p-1 rounded-md m-2">CPF: <span className="text-gray-500">{cadastro.cpf}</span></p>
                <p className="bg-white p-1 rounded-md m-2">RG: <span className="text-gray-500">{cadastro.rg}</span></p>
                {cadastro.addresses.map((address) =>
                <p className="bg-white p-1 rounded-md m-2" key={Math.random()}>Endereço: <span className="text-gray-500">{address.logradouro}, {address.numero}, {address.complemento}. {address.cidade} - {address.estado} - CEP: {address.cep}</span></p>
                )}
                <div className="bg-white p-1 rounded-md m-2">
                <h2>Contatos:</h2>
                {cadastro.contatos.map((contato) =>
                <li key={Math.random()}>
                    <p className="text-gray-500">{contato.nomeContato} | {contato.tipoContato}: {contato.numeroContato}</p>
                </li>
                )}
                </div>
                <div className="flex justify-between mx-3">
                <button
                onClick={() => handleDelete(cadastro)}
                className="bg-white p-2 rounded-md text-gray-500 hover:text-black">Remover <FaTrashCan className="inline"/></button>
                <button className="bg-white p-2 rounded-md text-gray-500 hover:text-black">Editar <PiPencilBold  className="inline"/></button>
                </div>
            </li>
            )
            })
        )}
        </ul>
    </div>
    )
    }

export default Cadastros