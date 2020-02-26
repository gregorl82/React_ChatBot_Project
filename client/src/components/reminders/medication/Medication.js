import React from 'react';
import {Link} from 'react-router-dom';

const Medication = (props) => {

return (
  <div>
    <h4>{props.medication.tablet}</h4>
    <p>Frequency: {props.medication.frequency}</p>
  </div>
  )
}

export default Medication;
