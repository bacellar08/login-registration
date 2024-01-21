

export default function Cadastrar() {
  return (
    <div className="h-screen flex items-center justify-center">
    <div className="bg-slate-400 text-slate-800 flex p-2 w-[620px] rounded-md">
        <form>
        <div className="flex flex-col justify-between">
        <h1 className="text-2xl pb-4">Cadastrar Pessoa Física</h1>
        <h2 className="text-lg px-5">Dados Pessoais</h2>
        <div className="flex flex-wrap justify-center">
            <div className="px-1 py-4">
            <label className="block" htmlFor="Nome">Nome</label>
            <input name='nome' type="text" placeholder="Nome"></input>
            </div>
            <div className="px-1 py-4">
            <label className="block" htmlFor="sobrenome">Sobrenome</label>
            <input name="sobrenome" type="text" placeholder="Sobrenome"></input>
            </div>
            <div className="px-1 py-4">
            <label className="block" htmlFor="data">Data de Nascimento</label>
            <input name='data' type="text" placeholder="31/01/1900"></input>
            </div>
            <div className="px-1 py-4">
            <label className="block" htmlFor="email">Email</label>
            <input name="email" type="text" placeholder="email@email.com"></input>
            </div>
            <div className="px-1 py-4">
            <label className="block" htmlFor="cpf">CPF</label>
            <input name="cpf" type="text" placeholder="999.999.999-99"></input>
            </div>
            <div className="px-1 py-4">
            <label className="block" htmlFor="rg">RG</label>
            <input name="rg" type="text" placeholder="999.999.99-9"></input>
            </div>
            <div className="border-b-2 w-5/6 border-slate-500 m-10"></div>
        </div>
        <h2 className="text-lg px-5">Endereço</h2>
        <div className="flex flex-wrap justify-center">
            <div className="px-1 py-4">
            <label className="block" htmlFor="logradouro">Logradouro</label>
            <input name='logradouro' type="text" placeholder="Rua sem Nome"></input>
            </div>
            <div className="px-1 py-4">
            <label className="block" htmlFor="numero">Número</label>
            <input name="numero" type="text" placeholder="9999"></input>
            </div>
            <div className="px-1 py-4">
            <label className="block" htmlFor="cep">CEP</label>
            <input name='cep' type="text" placeholder="99999-999"></input>
            </div>
            <div className="px-1 py-4">
            <label className="block" htmlFor="complemento">Complemento</label>
            <input name="complemento" type="text" placeholder="Casa 999"></input>
            </div>
            <div className="px-1 py-4">
            <label className="block" htmlFor="cidade">Cidade</label>
            <input name="cidade" type="text" placeholder="Rio de Janeiro"></input>
            </div>
            <div className="px-1 py-4">
            <label className="block" htmlFor="estado">Estado</label>
            <input name="estado" type="text" placeholder="RJ"></input>
            </div>
            <div className="flex justify-between w-full px-4">
                <button className="bg-slate-200 rounded-md p-2">Adicionar novo endereço</button>
                <button className="bg-slate-200 rounded-md p-2">Remover</button>
            </div>
            <div className="border-b-2 w-5/6 border-slate-500 m-10"></div>
        </div>
        <h2 className="text-lg px-5">Contatos</h2>
        <div className="flex flex-wrap justify-center">
            <div className="px-1 py-4">
            <label className="block" htmlFor="nomeContato">Nome</label>
            <input name='nomeContato' type="text" placeholder="Nome do Contato"></input>
            </div>
            <div className="px-1 py-4">
            <label className="block" htmlFor="contato">Contato</label>
            <input name="contato" type="text" placeholder="Email/Telefone"></input>
            </div>
            <div className="px-1 py-4">
            <label className="block" htmlFor="tipoContato">Tipo Contato</label>
            <input name='tipoContato' type="text" placeholder="Email"></input>
            </div>
            <div className="px-1 py-4">
            <label className="block" htmlFor="complemento">Complemento</label>
            <input name="complemento" type="text" placeholder="Casa 999"></input>
            </div>
            <div className="px-1 py-4">
            <label className="block" htmlFor="cidade">Cidade</label>
            <input name="cidade" type="text" placeholder="Rio de Janeiro"></input>
            </div>
            <div className="px-1 py-4">
            <label className="block" htmlFor="estado">Estado</label>
            <input name="estado" type="text" placeholder="RJ"></input>
            </div>
            <div className="flex justify-between w-full px-4">
                <button className="bg-slate-200 rounded-md p-2">Adicionar novo contato</button>
                <button className="bg-slate-200 rounded-md p-2">Remover</button>
            </div>
            <div className="border-b-2 w-5/6 border-slate-500 m-10"></div>
        </div>
        

        <button className="bg-blue-800 text-white rounded-md p-2 w-[150px]">Salvar</button>
        </div>
        </form>

    </div>
    </div>
  )
}
