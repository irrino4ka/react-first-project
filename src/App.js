import React, { Component } from 'react';
import classesCss from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      {id: '1', name: 'Max', age: 21},
      {id: '2', name: 'Anna', age: 13},
      {id: '3', name: 'Lolla', age: 11},
      {id: '4', name: 'Billy', age: 10}
    ],
    otherState: 'other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  deletePersonHandler = (personIndex) =>{
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons){
      persons = (
            <div >
              {this.state.persons.map((person, key) => {
                return <ErrorBoundary key={person.id}>
                 <Person 
                click = {() => this.deletePersonHandler(key)} // this.deletePersonHandler.bind(this, key)
                name = {person.name}
                age={person.age}
                changed ={(event) => this.nameChangedHandler(event, person.id)}/>
                </ErrorBoundary>
              })}
            </div>
      );

      btnClass = classesCss.Red;
    }

    // let classes = ['red', 'bold'].join(' ');
    const classes = [];
    if (this.state.persons.length <=2) {
      classes.push(classesCss.Red);
    }

    if (this.state.persons.length <=1) {
      classes.push(classesCss.Bold);
    }

    return (
        <div className={classesCss.App}>
          <h1>I am react file</h1>
          <p className={classes.join(' ')}>Magic here</p>
          <button className = {btnClass}
            onClick={this.togglePersonHandler} >Toggle Persons</button>
          {persons}
        </div>
    );
  }
}

export default App;
