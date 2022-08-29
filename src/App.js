import { useState } from 'react';
import './App.css';

function App() {
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log('teste', name, value)
  };

  const cadastroSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log('### cadastroSubmit', data);
  };
  return (
    <form onSubmit={cadastroSubmit}>
      <input className='cpf' type='text' name='cpf' id='cpf' placeholder='CPF' onChange={handleInputChange}></input>
      <input className='name' type='text' name='name' id='name' placeholder='Nome' onChange={handleInputChange}></input>
      <input className="email" type="text" name="email" id="email" placeholder='E-mail' onChange={handleInputChange}></input>
      <input className="telefone" type="number" name="telefone" id="telefone" placeholder='Número do telefone' onChange={handleInputChange}></input>

      <button className='button' name='button' type='submit'>Salvar</button>
    </form>
  );
}

export default App;
