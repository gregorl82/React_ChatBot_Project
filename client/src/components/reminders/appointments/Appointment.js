import React from 'react';
import '../../../App.css';


const Appointment = (props) => {

return (
  <div className="reminder-detail">
    <h4>{props.appointment.appointmentName}</h4>
    <p>Location: {props.appointment.appointmentLocation}</p>
    <p>Date: {props.appointment.appointmentDate}</p>
    <p>Time: {props.appointment.appointmentTime}</p>
  </div>
  )
}

export default Appointment;
