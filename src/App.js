import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <form >
      <input class='cpf' type='text' name='cpf' id='cpf' placeholder='CPF'></input>
      <input class='name' type='text' name='name' id='name' placeholder='Nome'></input>
      <input class="email" type="text" name="email" id="email" placeholder='E-mail'></input>
      <input class="telefone" type="number" name="telefone" id="telefone" placeholder='Número do telefone'></input>

      <button class='button' name='button' type='submit'>Salvar</button>
    </form>
  );
}

export default App;
