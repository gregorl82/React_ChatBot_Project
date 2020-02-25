import React from 'react';
import Appointment from "./Appointment.js"

const AppointmentList = (props) => {
  return "Waiting on Appointments and moths"

  const appointments = props.appointments.map((appointment, index) => {
    return (
         <li key={index} className="component-item">
        <div className="component">
        <Appointment appointment={appointment}/>
        </div>
        </li>
      )
    })




  return (
    <div>
      <div>
      <ul className="component-list">
      <h4>List of appointments</h4>
      {appointments}
      </ul>
          <h4>{props.appointment.name} ({props.appointment.date})</h4>
          <p>Location: {props.appointment.location}</p>
          <p>Time: {props.appointment.time}</p>
       </div>
    </div>
  )




}

export default AppointmentList;
