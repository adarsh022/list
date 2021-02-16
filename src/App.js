import React, { useState} from 'react';
import Form from "./components/fourm";
import TodoList from "./components/TodoList";
import './App.css';

function App() {

  const [inputText, setInputText] = useState('');
  const [toDos, setToDos] = useState([]);
  return(
    <div className='App'>
      <header>
        Adarsh's To Do's
      </header>
        <Form 
          setInputText={setInputText} 
          toDos={toDos} 
          setToDos={setToDos} 
          inputText={inputText} 
        />
      <TodoList setToDos={setToDos}  toDos={toDos}/>
    </div >
  )
}

export default App;