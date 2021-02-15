import React, { Component } from 'react';

// import './addedTask.component.scss';

class AddTask extends Component {
  constructor(){
    super();

    this.state = {
      list : ""
    }
  }

  handleChange = (e) => {
    this.setState({list: e.target.value})
  }

  render(){
    return(
     <div>
      <p>Title</p>
      <input 
        className='search'
        typle='search' 
        placeholder = 'Write hear'
        onChange={this.handleChange}
      />
    </div> 
    )
  }
}

export default AddTask;