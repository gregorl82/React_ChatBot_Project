import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../../App.css'
import AppointmentList from './AppointmentList.js';

const ReminderSelect =(props) => {

    return (

      <div>
        <Router>
          <Switch>
            <Route path="/reminders/appointments" render={(props) => {
              return <AppointmentList appointments ={this.props.appointments}/>
            }
          }>
            </Route>
          </Switch>
        </Router>
      </div>

      // <div>
      // <ul className="component-list">
      // <h3>List of Appointments</h3>
      // {this.props.appointments}
      // </ul>
      // </div>
    )
}

export default ReminderSelect;
