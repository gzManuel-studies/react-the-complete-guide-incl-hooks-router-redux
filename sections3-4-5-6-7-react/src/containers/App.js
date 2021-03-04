import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: 'fasd1', name: 'Manuel', age: 25 },
      { id: 'asdf1', name: 'Claudia Ortega', age: 25 },
      { id: 'sfd1', name: 'Alejandra', age: 13 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props,state) {
    console.log('[App.js] getDerivedStateFromProps',props,state);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount ');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate')
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => { 
      return p.id === id 
    })
    //Don't get the object directly, this is a bad practice because is referenced not copied
    //const person = this.state.persons[personIndex]
    const person = { ...this.state.persons[personIndex] }

    //Also you can do this 
    //const person = Object.assign({},this.state.persons[personIndex]);

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }
  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons })
  }

  render() {
    console.log('[App.js] render')
    let persons = null;
    if (this.state.showPersons) {
      persons = (
          <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
          />
      );
    }

    

    return (
      <div className={classes.App}>
        <button onClick={()=>{
          this.setState({showCockpit:false});
        }}>Remove cockpit</button>
        {this.state.showCockpit?<Cockpit
        title={this.props.appTitle}
        showPersons={this.state.showPersons}
        personsLength= {this.state.persons.length}
        clicked={this.togglePersonsHandler}
        />:null}
        {persons}
      </div>
    );
  }
}

export default App;