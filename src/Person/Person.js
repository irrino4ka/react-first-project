import React from 'react';
import classes from './Person.css';

const person = (props) => {
    const rnd = Math.random();
    if (rnd > 0.7) {
        throw new Error('something wrong');
    }
    return (

        <div className={classes.Person}>
        <p  onClick={props.click}> I am {props.name} a Person! {props.age}</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    )
}

export default person;