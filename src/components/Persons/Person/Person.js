import React, { Component } from 'react';
import classes from './Person.css';
import WithClass from './../../../hoc/WithClass';

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

    componentWillReceiveProps(nextProps) {
        console.log('update persons', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldCOMPONENt uPDATE', nextProps, nextState);
        return true// nextProps.persons  !== this.props.persons;
    }

    render() {
        console.log('person inside render');
        return <WithClass classesCss={classes.Person}>
        <p  onClick={this.props.click}> I am {this.props.name} a Person! {this.props.age}</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
    </WithClass>
    }
}

export default Person;