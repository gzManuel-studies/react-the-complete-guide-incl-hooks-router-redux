import React, { useEffect } from 'react';

import classes from './Cockpit.css'

const cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    const timer = setTimeout(() => {
      alert('Saved data to cloud!')
    }
      , 1000);
    return () => {
      console.log('[Cockpit.js] Cleanup work in useEffect');// When Cockpit is clenaed.
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] Cleanup work in 2nd useEffect');
    };
  });

  const assignedClases = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  btnClass = classes.Red;

  if (props.personsLength <= 2) {
    assignedClases.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClases.push(classes.bold);
  }

  return (<div className={classes.Cockpit}>
    <h1>{props.title}</h1>
    <p className={assignedClases.join(' ')}>This is really working!</p>
    <button
      className={btnClass}
      onClick={props.clicked}>
      Switch name
        </button>
  </div>)
}

export default React.memo(cockpit);