import React from 'react';

const Form = ({setInputText,toDos,setToDos,inputText}) => {

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
    console.log(e.target.value);
  };
  const submitToHandler = (e) => {
    e.preventDefault();
    setToDos(
      [
        ...toDos,
        {
          text: inputText,
          complated: false,
          id: Math.random()*1000
        },
      ]
    )
    setInputText("");
  };
  
  return(
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button className="todo-button" type="submit" onClick={submitToHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;