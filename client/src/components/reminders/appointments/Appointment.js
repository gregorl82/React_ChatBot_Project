import React from 'react';
import {Link} from 'react-router-dom';

const Appointment = (props) => {

return (
  <div>
    <h4>{props.appointment.appointmentName}</h4>
    <p>Location: {props.appointment.appointmentLocation}</p>
    <p>Date: {props.appointment.appointmentDate}</p>
    <p>Time: {props.appointment.appointmentTime}</p>
  </div>
  )
}

export default Appointment;
