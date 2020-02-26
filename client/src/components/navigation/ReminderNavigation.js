import React from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';

const ReminderNavigation = (props) => {
  return (
    <div>
    <ul>

    <li className = "remAppRem">
      <a href="/reminders/appointments" className="link wobble-vertical-on-hover" style={{'z-index': 99}}>Appointments</a>
    </li>

    <li className = "remExRem">
      <a href="/reminders/exercises" className="link wobble-vertical-on-hover" style={{'z-index': 99}}>Exercise</a>
    </li>

    <li className = "remMedRem">
      <a href="/reminders/medication" className="link wobble-vertical-on-hover" style={{'z-index': 99}}>Medication</a>
    </li>
    </ul>
    <div style={{'zIndex':99, 'position': 'absolute'}} className="navLinkHome">
      <a href="/" id="home" >Home</a>
    </div>
    </div>
  )
}

export default ReminderNavigation;
