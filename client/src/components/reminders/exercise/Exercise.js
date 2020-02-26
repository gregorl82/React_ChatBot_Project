import React from 'react';
import {Link} from 'react-router-dom';

const Exercise = (props) => {

return (
  <div>
    <h4>{props.exercise.exerciseType}</h4>
    <p>Frequency: {props.exercise.frequency}</p>
  </div>
  )
}

export default Exercise;
