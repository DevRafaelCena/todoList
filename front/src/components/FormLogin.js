import React, { useState } from 'react';

//toast
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


//api backend
import api from '../api';


toast.configure()
const alertCampo = () =>{
    toast.warn("Preencha todos os dados!",{position: toast.POSITION.TOP_CENTER,
    autoClose: 8000});    
  }

  const alertSenha = () =>{
    toast.warn("Senha incorreta!",{position: toast.POSITION.TOP_CENTER,
    autoClose: 8000});    
  }



function FormLogin({user}) {
    const [userInput, setUserInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

 async function handleSubmit(event){
       event.preventDefault();

       if(userInput ==='' || passwordInput ===''){
       return alertCampo()
       }else{
        const data = {
            user:userInput,
            password : passwordInput,
        }
        const postUser = await api.post('/login',data) 
        if(postUser.data.msg){
            return alertSenha()
            
        }else{
            user(postUser.data.usuario.user)
        }
      


       }       
     //  user("2")        
    };

    return (
        <form className="login-form">
            <input
                placeholder="Usuario"
                type="text"
                className="input"
                value={userInput}
                onChange={e => setUserInput(e.target.value)}
            />

            <input
                placeholder="Senha"
                type="password"
                className="input"
                value={passwordInput}
                onChange={e => setPasswordInput(e.target.value)}
            />
             <div><button className="btnLogin" onClick={e => handleSubmit(e)}>Entrar</button>  </div>

        </form>

        
    );
};
export default FormLogin;