import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import classes from './App.css';

class App extends Component {
  state = {
    persons: [
      { id: 'sadssd', name: 'Marko', age: 23 },
      { id: 'asssd', name: 'Anica', age: 19 },
      { id: 'a12ddd', name: 'Milan', age: 32 }
    ],
    showPersons: false
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    const togglePersons = this.state.showPersons;
    this.setState({
      showPersons: !togglePersons
    });
  }

  render() {
    let persons = null;

    if(this.state.showPersons){
      persons = <Persons 
          persons={this.state.persons}
          click={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>
      ;
    }

    return (
      <div className={classes.App}>
        <Cockpit 
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}
export default App;
