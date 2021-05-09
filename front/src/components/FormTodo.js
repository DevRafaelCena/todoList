import React, {useEffect,useState} from 'react';
import api from '../api';

//toast
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
const alertCampo = () =>{
    toast.warn("Já existe tarefa com o mesmo nome!",{position: toast.POSITION.TOP_CENTER,
    autoClose: 8000});    
  }


function FormTodo({ updateTodos,user }) {
    const [userInput, setUserInput] = useState("");
    const [atualiza, setAtualiza] = useState(['']);

    const buscaTodos = async (user) => {
        const busca = await api.get('/tasks/' + user) 
        let dados = [] 
        for(let i = 0; i < busca.data.tasks.length; i++){
            dados.push(busca.data.tasks[i])
        } 
        updateTodos(dados)
        setUserInput("")
    }
    useEffect(()=>{
    buscaTodos(user)
},[atualiza])

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (!userInput) return;
        const data = {
            user:user,
            title: userInput,
        }
        const postTask = await api.post('/task',data)        
        if(postTask.data.msg){
            return alertCampo()
        }else{
            setAtualiza(atualiza + 1)
        }
      
    };  

    return (
        <>
        <h3>Bem vindo - {user}</h3>
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                placeholder="Nova tarefa"
                type="text"
                maxLength= "25"
                className="input"
                value={userInput}
                onChange={e => setUserInput(e.target.value)}
            />
        </form>
        </>
    );
};
export default FormTodo;