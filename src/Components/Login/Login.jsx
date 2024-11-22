import { FaUser , FaLock } from 'react-icons/fa';
import { useState } from 'react';
import "./Login.css";



const Login = () => {

        const [username, setUsername ] = useState("");
        const [password, setPassword ] = useState("");

        const handleSubmit = (event) => {
            event.preventDefault(); //NAO DEIXA DA RR NA PAGINA
            
            alert("Enviado os dados: " + username + " - " + password);
        }

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>Acesse o Sistema</h1>

            <div>
            <input type="email" placeholder="E-mail" 
                onChange={(e) => setUsername(e.target.value)}/> 
                <FaUser className='icon' />
            </div>

            <div>
            <input type="password" placeholder="Senha"
                onChange={(e) => setPassword(e.target.value)}/>
                <FaLock className='icon' />
            </div>

            <div className="recall-forget">
                <label>
                    <input type="checkbox"/>
                    Lembre de mim
                </label>
                <a href='#'> Esqueceu a senha ?</a>
            </div>
            
            <button> Entrar </button>

            <div className="signup-link">
                <p> Nao tem conta ? <a href='#'> Registrar </a></p>
            </div>
        </form>
      
    </div>
  );
};

export default Login
