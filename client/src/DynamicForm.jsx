


const DynamicForm = ({ addresses, onAddNewAddress, onRemoveAddress, onAddressChange }) => {
  


  return (
    <div>
      {addresses.map((address, index) => (
        
        <div className="flex flex-wrap justify-center" key={index}>
            <div className="flex flex-wrap justify-center">
            <div className="px-1 py-4">
            <label className="block" htmlFor="logradouro">Logradouro</label>
            <input
            required
            value={address.logradouro}
            className='outline-none rounded-md p-1'
            name='logradouro'
            type="text"
            placeholder="Rua sem Nome"
            onChange={e =>
                onAddressChange(index, "logradouro", e.target.value)
              }></input>
            </div>
            <div className="px-1 py-4">
            <label className="block" htmlFor="numero">Número</label>
            <input
            value={address.numero}
            className='outline-none rounded-md p-1'
            name="numero"
            type="text"
            placeholder="9999"
            onChange={e =>
                onAddressChange(index, "numero", e.target.value)
              }></input>
            </div>
            <div className="px-1 py-4">
            <label className="block" htmlFor="cep">CEP</label>
            <input
            required
            value={address.cep}
            className='outline-none rounded-md p-1'
            name='cep'
            type="text"
            placeholder="99999-999"
            onChange={e =>
                onAddressChange(index, "cep", e.target.value)
              }></input>
            </div>
            <div className="px-1 py-4">
            <label className="block" htmlFor="complemento">Complemento</label>
            <input
            required
            value={address.complemento}
            className='outline-none rounded-md p-1'
            name="complemento"
            type="text"
            placeholder="Casa 999"
            onChange={e =>
                onAddressChange(index, "complemento", e.target.value)
              }></input>
            </div>
            <div className="px-1 py-4">
            <label className="block" htmlFor="cidade">Cidade</label>
            <input
            required
            value={address.cidade}
            className='outline-none rounded-md p-1'
            name="cidade"
            type="text"
            placeholder="Rio de Janeiro"
            onChange={e =>
                onAddressChange(index, "cidade", e.target.value)
              }></input>
            </div>
            <div className="px-1 py-4">
            <label className="block" htmlFor="estado">Estado</label>
            <input
            required
            value={address.estado}
            className='outline-none rounded-md p-1'
            name="estado"
            type="text"
            placeholder="RJ"
            onChange={e =>
                onAddressChange(index, "estado", e.target.value)
              }></input>
            </div>
            <div className="flex justify-end w-full px-4">
        <button onClick={() => onRemoveAddress(index)} className="bg-slate-200 rounded-md p-2 z-10 mr-5">Remover</button>
            </div>
        </div>
        </div>
      ))}
    </div>
  );
};

export default DynamicForm;