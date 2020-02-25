import React from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';

const ReminderNavigation = (props) => {
  return (

    <ul>
    <li className = "remAppRem">
    <a href="/reminders/appointments" id="appointments" style={{'z-index': 99}}>Appointments</a>
    </li>



    </ul>
  )
}

export default ReminderNavigation;
