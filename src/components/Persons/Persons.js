import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

    constructor(props) {
        super(props);
        console.log('[persons.js]', props);
      }
    
      componentWillMount(){
        console.log('persons will mount')
      }
    
      componentDidMount() {
        console.log('pe4rsons did mount');
      }

    render() {
        console.log('persons inside render');
        return  this.props.persons.map((person, key) => {
            return <Person 
            click = {() => this.props.clicked(key)}
            key={person.id}
            name = {person.name}
            age={person.age}
            changed ={(event) => this.props.changed(event, person.id)}/>
          });
    }
}
  export default Persons;