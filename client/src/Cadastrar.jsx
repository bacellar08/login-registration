import axios from "axios"
import { useState } from "react"
import DynamicForm from "./DynamicForm"
import DynamicFormTwo from "./DynamicFormTwo"
import { useNavigate } from "react-router-dom"


export default function Cadastrar() {

    const [nome, setNome] = useState()
    const [sobrenome, setSobrenome] = useState()
    const [dataDeNascimento, setDatadeNascimento] = useState()
    const [email, setEmail] = useState()
    const [cpf, setCPF] = useState()
    const [rg, setRG] = useState()
    const navigate = useNavigate()

    const [addresses, setAddresses] = useState([
        {
          logradouro: "",
          numero: "",
          cep: "",
          complemento: "",
          cidade: "",
          estado: "",
        },
      ]);
    
      const addNewAddress = () => {
        setAddresses([
          ...addresses,
          {
            logradouro: "",
            numero: "",
            cep: "",
            complemento: "",
            cidade: "",
            estado: "",
          },
        ]);
      };
    
      const removeAddress = (index) => {
        const updatedAddresses = [...addresses];
        updatedAddresses.splice(index, 1);
        setAddresses(updatedAddresses);
      };
    
      const handleAddressChange = (index, field, value) => {
        const updatedAddresses = [...addresses];
        updatedAddresses[index][field] = value;
        setAddresses(updatedAddresses);
      }


    //   ----------------------------------------------

    const [contatos, setContatos] = useState([
        {
          nomeContato: "",
          numeroContato: "",
          tipoContato: "",
        },
      ]);
    
      const addNewContato = () => {
        setContatos([
          ...contatos,
          {
            nomeContato: "",
            numeroContato: "",
            tipoContato: "",
          },
        ]);
      };
    
      const removeContato = (index) => {
        const updatedContatos = [...contatos];
        updatedContatos.splice(index, 1);
        setContatos(updatedContatos);
      };
    
      const handleContatoChange = (index, field, value) => {
        const updatedContatos = [...contatos];
        updatedContatos[index][field] = value;
        setContatos(updatedContatos);
      }

    // -------------------------------------------



    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('http://localhost:3001/cadastrar', {nome, sobrenome, dataDeNascimento, email, cpf, rg, addresses, contatos})
        .then(result => {console.log(result)
        navigate('/dashboard')
        })
        .catch(err => console.log(err))
    }
    
  return (
    <div>

    
    <div className="bg-slate-400 text-slate-800 flex p-6 w-[700px] rounded-md mx-auto shadow-lg">
        <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-between">
        <h1 className="text-2xl pb-4 mx-auto">Cadastrar Pessoa Física</h1>
        <h2 className="text-lg px-5 ml-3">Dados Pessoais</h2>
        <div className="flex flex-wrap justify-center">
            <div className="px-1 py-4">
            <label className="block" htmlFor="Nome">Nome</label>
            <input
            required
            className='outline-none rounded-md p-1'
            name='nome'
            type="text"
            placeholder="Nome"
            onChange={(e) => setNome(e.target.value)}></input>
            </div>
            <div className="px-1 py-4">
            <label className="block" htmlFor="sobrenome">Sobrenome</label>
            <input
            required
            className='outline-none rounded-md p-1'
            name="sobrenome" type="text"
            placeholder="Sobrenome"
            onChange={(e) => setSobrenome(e.target.value)}></input>
            </div>
            <div className="px-1 py-4">
            <label className="block" htmlFor="data">Data de Nascimento</label>
            <input
            required
            className='outline-none rounded-md p-1'
            name='data'
            type="text"
            placeholder="31/01/1900"
            onChange={(e) => setDatadeNascimento(e.target.value)}></input>
            </div>
            <div className="px-1 py-4">
            <label className="block" htmlFor="email">Email</label>
            <input
            required
            className='outline-none rounded-md p-1'
            name="email"
            type="text"
            placeholder="email@email.com"
            onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className="px-1 py-4">
            <label className="block" htmlFor="cpf">CPF</label>
            <input
            required
            className='outline-none rounded-md p-1'
            name="cpf"
            type="text"
            placeholder="999.999.999-99"
            onChange={(e) => setCPF(e.target.value)}></input>
            </div>
            <div className="px-1 py-4">
            <label className="block" htmlFor="rg">RG</label>
            <input
            required
            className='outline-none rounded-md p-1'
            name="rg"
            type="text"
            placeholder="999.999.99-9"
            onChange={(e) => setRG(e.target.value)}></input>
            </div>
            <div className="border-b-2 w-5/6 border-slate-500 m-10"></div>
        </div>
        <h2 className="text-lg px-5 ml-3">Endereço</h2>
        <DynamicForm
        addresses={addresses}
        onAddNewAddress={addNewAddress}
        onRemoveAddress={removeAddress}
        onAddressChange={handleAddressChange}
        />
        <div className="flex justify-start mt-[-40px]">
        <button className="bg-slate-200 rounded-md ml-8 p-2" onClick={addNewAddress}>Adicionar novo endereço</button>
        </div>
        <div className="border-b-2 w-5/6 border-slate-500 m-10"></div>
        <h2 className="text-lg px-5 ml-3">Contatos</h2>
        <DynamicFormTwo
        contatos={contatos}
        onAddNewContato={addNewContato}
        onRemoveContato={removeContato}
        onContatoChange={handleContatoChange}/>
        <div className="flex justify-start mt-[-40px]">
        <button className="bg-slate-200 rounded-md ml-8 p-2" onClick={addNewContato}>Adicionar novo contato</button>
        </div>        

        <button className="bg-blue-800 text-white rounded-md p-2 mt-10 ml-7 w-[150px]">Salvar</button>
        </div>
        </form>

    </div>
    </div>
  )
}
