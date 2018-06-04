import React, { Component } from 'react';

const person = (props) => {
    return (
        <div onClick={props.click}>
        <p>I am {props.name} a Person! {props.age}</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    )
}

export default person;