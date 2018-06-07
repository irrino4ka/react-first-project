import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[person.js]', props);
      }
    
      componentWillMount(){
        console.log('person will mount')
      }
    
      componentDidMount() {
        console.log('pe4rson did mount');
      }

    render() {
        console.log('person inside render');
        return <div className={classes.Person}>
        <p  onClick={this.props.click}> I am {this.props.name} a Person! {this.props.age}</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
    </div>
    }
}

export default Person;