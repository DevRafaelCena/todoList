import React, {useEffect,useState} from 'react';
//api backend
import api from '../api';

function TodoList({ todos, updateTodos ,user}) {
    const [atualiza, setAtualiza] = useState('');

    const buscaTodos = async (user) => {
        const busca = await api.get('/tasks/' + user) 
        todos = [] 
        for(let i = 0; i < busca.data.tasks.length; i++){
            todos.push(busca.data.tasks[i])
        } 
        updateTodos(todos)
    }

    useEffect(()=>{
    buscaTodos(user)
},[atualiza])

    const removeTask = async (id) => {     
      await api.delete('/tasks/' + id) 
      setAtualiza(atualiza + 1) 
       
    }

    const markComplete = async(id,status) => {        
        await api.put('/tasks/' + id, {status: status })  
        setAtualiza(atualiza + 1)
  }
    return (

        <div className="todo-list">
            {todos.map((todo, _id) => (
                <div key={_id}>
                    <div
                        className={`todo ${todo.status ? "" :"taskDone"}`}
                        onClick={() => markComplete(todo._id,todo.status)}>
                        {todo.title}
                    </div>
                    <div><button className="button" onClick={() => removeTask(todo._id)}>Apagar</button>  </div>

                 
                </div>

            ))}
        </div>
    );
};

export default TodoList;