import { useState } from 'react';
import './App.css'
import Card from './components'

const initialState = {
  name: "",
  color: "",
  key: ""
}
const initialError = { errorState: false, msg: "" }

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(initialError);
  const [currentUser, setCurrentUser] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    currentUser.key = `${users.length + 1}$`;
    setUsers([...users, currentUser]);
    setCurrentUser(initialState);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser({ ...currentUser, [name]: value })
    validateInput();
  }

  const validateInput = () => {
    let formError = false;

    if (currentUser.color.length < 6) {
      formError = true;
    }

    if (currentUser.name.startsWith(" ") || currentUser.name.trim().length < 3) {
      formError = true;
    }

    if (!formError)
      setError(initialError);
    else
      setError({ errorState: true, msg: "Por favor chequea que la información sea correcta" });
  }


  return (
    <div className='App'>
      <h1>Carga de estudiantes</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className='section'>
          <label htmlFor="name">Nombre Completo:</label>
          <input type="text" name="name" value={currentUser.name} onChange={handleChange} />
        </div>
        <div className='section'>
          <label htmlFor="color">Ingresa tu color favorito</label>
          <input type="color" name="color" value={currentUser.color} onChange={handleChange} />
        </div>
        <button disabled={error.msg != ""} type="submit">Enviar</button>
      </form>

      {
        error.errorState &&
        <span style={{ color: "red" }}>
          Por favor chequea la información sea correcta.
        </span>
      }
      {
        users.length > 0 && (
          <div className='Cards'>
            {
              users.map(user => (<Card key={user.key} name={user.name} color={user.color} />))
            }
          </div>
        )
      }
    </div>
  )
}

export default App
