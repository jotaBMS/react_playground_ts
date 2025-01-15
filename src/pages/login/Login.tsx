import {useState} from "react"
import Home from '../home/Home'


const [isLogged, setValor] = useState(false);

function Login() {
  return (
    <>
    {
      // isLogged ? (true) : (false)
      isLogged ? (
        <Home titulo="Componente Home" texto=" texto do componente home."></Home>
        ) : (
          <div>
            <h2>Componente login</h2>
            <button onClick={() => setIsLogged(true)}>Entrar</button>
          </div>
        )

    }
    </>
  )
}

export default Login