import React, { PureComponent } from 'react';
import classesCss from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js]', props);
    this.state = {
      persons: [
        {id: 'tre1', name: 'Max', age: 21},
        {id: 'grdtgr2', name: 'Anna', age: 13},
        {id: 'trt3', name: 'Lolla', age: 11},
        {id: 'rtter4', name: 'Billy', age: 10}
      ],
      otherState: 'other value',
      showPersons: false
    }
  }

  componentWillMount(){
    console.log('will mount')
  }

  componentDidMount() {
    console.log('did mount');
  }

  // shouldComponentUpdate ( nextProps, nextState ) {
  //   console.log( '[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState );
  //   return nextState.persons !== this.state.persons ||
  //   nextState.showPersons !== this.state.showPersons;
  // }


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
    console.log('app inside render');
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    // }

    let persons = null;

    if (this.state.showPersons){
      persons = (
            <div >
              <Persons
                persons = {this.state.persons}
                clicked = {this.deletePersonHandler}
                changed = {this.nameChangedHandler}
              />
            </div>
      );

    }
    return (
        <WithClass classesCss={classesCss.App}>
        <button onClick ={ () => {this.setState({showPersons: true})}}>Show Persons </button>
        <Cockpit 
          appTitle = {this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked = {this.togglePersonHandler}/>
            {persons}
        </WithClass>
    );
  }
}

export default App;
