import React from 'react';

const Exercise = (props) => {

return (
  <div className="reminder-detail">
    <h4>{props.exercise.exerciseType}</h4>
    <p>Frequency: {props.exercise.frequency}</p>
  </div>
  )
}

export default Exercise;
