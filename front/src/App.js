import './App.css';
import React, {useEffect,useState} from 'react';
import TodoList from './components/TodoList';
import FormTodo from './components/FormTodo';
import FormLogin from './components/FormLogin';

function App() {
  const [todos, setTodos] = useState([]);

  const [user,setUser] = useState(0)
  const [body,setBody] = useState( <FormLogin user={(user) => { setUser(user) }}   ></FormLogin>)

useEffect(()=>{
    if(user !== 0){     
      setBody(       
       
        <div >
           <FormTodo user={user} updateTodos={(list) => { setTodos(list) }} />
    
    <TodoList user={user} todos={todos} updateTodos={(list) => { setTodos(list) }}></TodoList>
       
        </div>
        
     );
    
    }else{
      
      setBody(
        <div >     

          <h3 >Entre com seu seu acesso ou crie um novo </h3> 
    
    <FormLogin user={(user) => { setUser(user) }}   ></FormLogin>
       
        </div>
      );
    
    }
    
  
},[user,todos])

return (
  <div className="App">      
<h1>To.do List</h1>
{body}

 
  </div>
);

}

export default App;
