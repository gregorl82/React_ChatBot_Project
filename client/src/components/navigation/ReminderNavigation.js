import React from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';

const ReminderNavigation = (props) => {
  return (

    <ul>
    <li classname = "remAppRem">
    <Link to="/reminders/appointments" id="appointments">Appointments</Link>
    </li>



    </ul>
  )
}

export default ReminderNavigation;
