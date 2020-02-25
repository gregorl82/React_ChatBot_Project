import React from 'react';
import {Link} from 'react-router-dom';


const Appointment = (props) => {


return (
  <div>
    <h4>{props.appointment.name} ({props.appointment.date})</h4>
    <p>Location: {props.appointment.location}</p>
    <p>Time: {props.appointment.time}</p>
  </div>


)
}



export default Appointment;
