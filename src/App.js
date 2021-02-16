import React, { useState} from 'react';
import Form from "./components/fourm";
import TodoList from "./components/ToDoList";
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [toDos, setToDos] = useState([]);
  return(
    <div className='App'>
      <header>
        Adarsh's To Do's
      </header>
      <Form setInputText={setInputText} />
      <TodoList />
    </div>
  )
}

export default App;