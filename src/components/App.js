import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  handleClick(e){
    console.log(e.target);
  }
  handleChange(e){
    console.log(e.target.value);
  }
  handleSubmit(e){
    e.preventDefault();
    console.log('form submitted');
  }
  constructor() {
    super();
    this.state = {
      ninjas: [
        { name: 'Ryu', age: 30, belt: 'black', id: 1 },
        { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
        { name: 'Crystal', age: 25, belt: 'pink', id: 3 },
      ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.addNinja = this.addNinja.bind(this);
    this.deleteNinja = this.deleteNinja.bind(this);
  }
  addNinja(ninja){
    console.log(ninja);
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }
  deleteNinja(id){
    // console.log(id);
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas: ninjas
    })
  }
  render() {
    return ( 
      <div>
        <h1>Ryan's React App</h1>
        <p>{ name }</p>
        <p>{ Math.random() * 10 }</p>
        <button onClick={ this.handleClick }>Click Me</button>
        <form onSubmit={ this.handleSubmit }>
          <input type="text" onChange={this.handleChange}/>
          <button>Submit</button>
        </form>
        {/* <Ninjas name="Ryu" age="25" belt="Blue"/>
        <Ninjas name="Yoshi" age="30" belt="Black"/> */}
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;