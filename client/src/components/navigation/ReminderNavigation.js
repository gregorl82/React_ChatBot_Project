import React from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';

const ReminderNavigation = (props) => {
  return (

    <ul>

    <li className = "remAppRem">
      <a href="/reminders/appointments" id="appointments" style={{'z-index': 99}}>Appointments</a>
    </li>

    <li className = "remExRem">
      <a href="/reminders/exercises" id="appointments" style={{'z-index': 99}}>Exercise</a>
    </li>

    <li className = "remMedRem">
      <a href="/reminders/medication" id="appointments" style={{'z-index': 99}}>Medication</a>
    </li>
    </ul>
  )
}

export default ReminderNavigation;
