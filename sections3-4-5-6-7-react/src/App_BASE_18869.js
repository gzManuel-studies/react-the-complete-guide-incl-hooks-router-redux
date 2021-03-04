import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons:[
      {name:'Manuel',age:25},
      {name:'Claudia',age:25},
      {name:'Alejandra',age:13}
    ]
  }

  switchNameHandler=()=>{
    // console.log('Was clicked!);
    // DON'T DO THIS 
    //this.state.persons[0].name = 'Manuel Garisto';
    
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>And my hobbies are Watch Movies</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
      
    );
    // return React.createElement('div', {className: 'App'},React.createElement('h1',null,'Hi, I\'m a React App!!!'))
  }
}

export default App;
