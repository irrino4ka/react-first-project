import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';
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
    const style= {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;

    if (this.state.showPersons){
      persons = (
            <div >
              {this.state.persons.map((person, key) => {
                return <Person 
                click = {() => this.deletePersonHandler(key)} // this.deletePersonHandler.bind(this, key)
                name = {person.name}
                age={person.age}
                key={person.id}
                changed ={(event) => this.nameChangedHandler(event, person.id)}/>
              })}
            </div>
      );
      style.backgroundColor ="red";
      style[":hover"] = {
        backgroundColor: '#e45a10',
        color: 'black'
      }
    }

    // let classes = ['red', 'bold'].join(' ');
    const classes = [];
    if (this.state.persons.length <=2) {
      classes.push('red');
    }

    if (this.state.persons.length <=1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>I am react file</h1>
          <p className={classes.join(' ')}>Magic here</p>
          <button 
            style= {style}
            onClick={this.togglePersonHandler} >Toggle Persons</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
