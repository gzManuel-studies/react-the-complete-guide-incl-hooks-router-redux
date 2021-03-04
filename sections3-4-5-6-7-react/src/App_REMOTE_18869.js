import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons:[
      {name:'Manuel',age:25},
      {name:'Claudia',age:25},
      {name:'Alejandra',age:13}
    ],
    otherState: 'Some other value'
  });
  const switchNameHandler=()=>{
    // console.log('Was clicked!);
    // DON'T DO THIS 
    //this .state.persons[0].name = 'Manuel Garisto';
    setPersonsState({
      persons:[
        {name:'Manuel Garisto',age:25},
        {name:'Claudia O',age:25},
        {name:'Alejandra G',age:13}
      ]
    })
  }
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>And my hobbies are Watch Movies</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
    
  );
    // return React.createElement('div', {className: 'App'},React.createElement('h1',null,'Hi, I\'m a React App!!!'))
}

export default app;

// switchNameHandler=()=>{
//   // console.log('Was clicked!);
//   // DON'T DO THIS 
//   //this .state.persons[0].name = 'Manuel Garisto';
//   this.setState({
//     persons:[
//       {name:'Manuel Garisto',age:25},
//       {name:'Claudia O',age:25},
//       {name:'Alejandra G',age:13}
//     ]
//   })
// }
// state = {
//   persons:[
//     {name:'Manuel',age:25},
//     {name:'Claudia',age:25},
//     {name:'Alejandra',age:13}
//   ],
//   otherState: 'Some other value'
// }