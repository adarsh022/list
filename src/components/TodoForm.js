import React, {useState} from 'react'

function TodoForm(props) {
  const[ input , setInput ] = useState('');

  const handelChange = e => {
    setInput(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    })

    setInput('')
  };
  // console.log(input)
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input 
        type='text' 
        placeholder= 'Add todo' 
        value={input} 
        name='text' 
        className='todo-input' 
        onChange={handelChange}
      />
        <button className='todo-button'>
          Add todo
        </button>
    </form>
  )
}

export default TodoForm
