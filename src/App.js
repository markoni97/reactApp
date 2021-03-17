import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';
//import styled from 'styled-components';
//import Radium, {StyleRoot} from 'radium';

class App extends Component {
  state = {
    persons: [
      { id: 'sadssd', name: 'Marko', age: 23 },
      { id: 'asssd', name: 'Anica', age: 19 },
      { id: 'a12ddd', name: 'Milan', age: 32 }
    ],
    otherState: 'some other value',
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
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            name={person.name} 
            age={person.age}
            click={() => this.deletePersonHandler(index)}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}
          
        </div>
      );
    }

    let classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    } 
    if(this.state.persons.length <=1){
      classes.push('bold');
    }

    return (
      //<StyleRoot>
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}>Toggle Persons</button> 
        {persons}
      </div>
      //</StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

//export default Radium(App);
export default App;
