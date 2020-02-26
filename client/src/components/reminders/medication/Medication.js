import React from 'react';

const Medication = (props) => {

return (
<div className="reminder-detail">
    <h4>{props.medication.tablet}</h4>
    <p>Frequency: {props.medication.frequency}</p>
  </div>
  )
}

export default Medication;
