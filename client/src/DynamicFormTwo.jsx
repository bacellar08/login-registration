


const DynamicFormTwo = ({ contatos, onAddNewContato, onRemoveContato, onContatoChange }) => {
  


    return (
      <div>
        {contatos.map((contato, index) => (
          
          <div className="flex flex-wrap justify-center" key={index}>
              <div className="flex flex-wrap justify-center mx-7">
              <div className="px-1 py-4">
              <label className="block" htmlFor="nomeContato">Nome</label>
              <input
              required
              value={contato.nomeContato}
              className='outline-none rounded-md p-1'
              name='nomeContato'
              type="text"
              placeholder="Nome Contato"
              onChange={e =>
                  onContatoChange(index, "nomeContato", e.target.value)
                }></input>
              </div>
              <div className="px-1 py-4">
              <label className="block" htmlFor="numeroContato">Contato</label>
              <input
              required
              value={contato.numeroContato}
              className='outline-none rounded-md p-1'
              name="numeroContato"
              type="text"
              placeholder="9999"
              onChange={e =>
                  onContatoChange(index, "numeroContato", e.target.value)
                }></input>
              </div>
              <div className="px-1 py-4">
              <label className="block" htmlFor="tipoContato">Tipo Contato</label>
              <select
              required
              className='outline-none rounded-md p-1 w-[190px]'
              name='tipoContato'
              value={contato.tipoContato}
              type="text"
              placeholder="99999-999"
              onChange={e =>
                  onContatoChange(index, "tipoContato", e.target.value)
                }>
                  <option value='select'>Tipo de Contato</option>
                  <option>Email</option>
                  <option>Telefone</option>
                </select>
              </div>
              <div className="flex justify-end w-full px-4">
          <button onClick={() => onRemoveContato(index)} className="bg-slate-200 rounded-md p-2 z-10 mr-[-9px]">Remover</button>
              </div>
          </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default DynamicFormTwo;