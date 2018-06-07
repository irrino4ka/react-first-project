import React from 'react';
import classesCss from './Cockpit.css';

const cockpit = (props) => {

    const classes = [];
    let btnClass ='';
    if(props.showPersons) {
        btnClass = classesCss.Red;
    }

    if (props.persons.length <=2) {
      classes.push(classesCss.Red);
    }

    if (props.persons.length <=1) {
      classes.push(classesCss.Bold);
    }

    return (
        <div className={classesCss.cockpit}>
            <h1>{props.appTitle}</h1>
            <p className={classes.join(' ')}>Magic here</p>
            <button className = {btnClass}
            onClick={props.clicked} >Toggle Persons</button>
        </div>
    );
};

export default cockpit;
