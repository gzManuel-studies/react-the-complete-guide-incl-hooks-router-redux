import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons:[
      {name:'Manuel',age:25},
      {name:'Claudia',age:25},
      {name:'Alejandra',age:13}
    ],
    otherState:'some other value'
  }

  switchNameHandler=(newName)=>{
    // console.log('Was clicked!);
    // DON'T DO THIS 
    //this.state.persons[0].name = 'Manuel Garisto';
    this.setState({
      persons:[
        {name:newName,age:25},
        {name:'Claudia Ortega',age:25},
        {name:'Alejandra Garisto',age:14}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={()=>this.switchNameHandler('Manuelin')}>Switch name</button>
        {/* <button onClick={this.switchNameHandler.bind(this,'Manuel Gari')}>Switch name</button> inefficient way*/}
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this,'Manu')}>And my hobbies are Watch Movies</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
      </div>
      
    );
    // return React.createElement('div', {className: 'App'},React.createElement('h1',null,'Hi, I\'m a React App!!!'))
  }
}

export default App;
