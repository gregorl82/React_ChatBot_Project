import React from 'react';
import Appointment from "./Appointment.js"
import '../../../App.css';

const AppointmentList = (props) => {

  if (props.length === 0){
    return "Waiting on Appointments"
  }

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
      <ul className="component-list">
      <h4>List of appointments</h4>
      {appointments}
      </ul>


    </div>
  )
}

export default AppointmentList;
