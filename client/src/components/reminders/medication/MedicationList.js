import React from 'react';
import Medication from "./Medication.js"
import '../../../App.css';

const MedicationList = (props) => {

  if (props.length === 0){
    return "Waiting on medication reminders..."
  }

  const medications = props.medications.map((medication, index) => {
    return (
         <li key={index} className="component-item">
        <div className="component">
        <Medication medication={medication}/>
        </div>
        </li>
      )
    })

  return (
    <div>
    <div className="reminder-heading">
      <ul className="component-list">
      <h4>List of medication reminders</h4>
      {medications}
      </ul>
      </div>
      <div style={{'zIndex':99, 'position': 'absolute'}} className="navLinkHome">
        <a href="/" id="home" >Home</a>
      </div>
    </div>
  )
}

export default MedicationList;
