import React from 'react';
import Todo from "./Todo";

const TodoList = ({toDos, setToDos}) => {
  // console.log(toDos)
  return(
    <div className='todo-container'>
    <ul className='todo-list'>
      {toDos.map((toDo) => (
        <Todo 
          setToDos={setToDos} 
          toDos={toDos} 
          key={toDo.id} 
          todo={toDos} 
          text={toDo.text} 
        />
      ))}
    </ul>
  </div>
  );
};

export default TodoList;