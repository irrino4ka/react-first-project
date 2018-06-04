import React, { Component } from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div onClick={props.click} className='Person'>
        <p>I am {props.name} a Person! {props.age}</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    )
}

export default person;