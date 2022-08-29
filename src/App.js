import { useState } from 'react';
import './App.css';

function App() {
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

  };

  const cadastroSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
  };

  console.log('handleSubmit', formValues)
  return (

    <form onSubmit={cadastroSubmit}>
      <h1>Cadastro de Clientes</h1>
      <input className='cpf' type='text' name='cpf' id='cpf' placeholder='CPF' onChange={handleInputChange} value={formValues.cpf || ''}></input>
      <input className='name' type='text' name='name' id='name' placeholder='Nome' onChange={handleInputChange} value={formValues.name || ''}></input>
      <input className="email" type="text" name="email" id="email" placeholder='E-mail' onChange={handleInputChange} value={formValues.email || ''}></input>
      <input className="telefone" type="number" name="telefone" id="telefone" placeholder='Número do telefone' onChange={handleInputChange} value={formValues.telefone || ''}></input>

      <button className='button' name='button' type='submit'>Salvar</button>
    </form >
  );
}

export default App;
