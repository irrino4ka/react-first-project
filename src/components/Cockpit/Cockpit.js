import React from 'react';
import classesCss from './Cockpit.css';
import Aux from './../../hoc/Aux';

const cockpit = (props) => {

    const classes = [];
    let btnClass =classesCss.Button;
    if(props.showPersons) {
        btnClass =[classesCss.Button, classesCss.Red].join(' ') ;
    }

    if (props.persons.length <=2) {
      classes.push(classesCss.Red);
    }

    if (props.persons.length <=1) {
      classes.push(classesCss.Bold);
    }

    return (
        <div>
            <h1>{props.appTitle}</h1>
            <p className={classes.join(' ')}>Magic here</p>
            <button className = {btnClass}
            onClick={props.clicked} >Toggle Persons</button>
    </div>
    );
};

export default cockpit;
