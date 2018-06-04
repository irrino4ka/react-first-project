import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 21},
      {name: 'Anna', age: 13},
      {name: 'Lolla', age: 11},
      {name: 'Billy', age: 10}
    ],
    otherState: 'other value',
    showPersons: false
  }

  swithcNameHandler = (newName) => {
    this.setState({persons:
      [
        {name: newName, age: 21},
        {name: 'An', age: 23},
        {name: 'Lolla', age: 11},
        {name: 'Billy', age: 100}
      ] }) 
  }

  nameChangedHandler = (event) => {
    this.setState({persons:
      [{name: 'Max', age: 21},
        {name: event.target.value, age: 23},
        {name: 'Lolla', age: 11},
        {name: 'Billy', age: 100}
      ] }) 
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }


  render() {
    const style= {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    return (
      <div className="App">
        <h1>I am react file</h1>
        <button 
          style= {style}
          onClick={this.togglePersonHandler} >Toggle Persons</button>
        {
          this.state.showPersons ? 
            <div >
              <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age}/>
              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}/>
              <Person
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age}
                click = {this.swithcNameHandler.bind(this, 'Rose')}
                changed ={this.nameChangedHandler}>My hobbies: Racing</Person>
              <Person 
                name={this.state.persons[3].name} 
                age={this.state.persons[3].age}/>
            </div> : null
        }
      </div>
    );
  }
}

export default App;
