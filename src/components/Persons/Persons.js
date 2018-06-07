import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

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
      
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('shouldCOMPONENt uPDATE', nextProps, nextState);
    //     return nextProps.persons  !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked;
    // }

    render() {
        console.log('persons inside render');
        return  this.props.persons.map((person, index) => {
            return <Person 
            click = {() => this.props.clicked(index)}
            key={person.id}
            name = {person.name}
            age={person.age}
            changed ={(event) => this.props.changed(event, person.id)}/>
          });
    }
}
  export default Persons;