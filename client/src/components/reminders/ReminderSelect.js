import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../../App.css'
import AppointmentList from './appointments/AppointmentList.js';
import {Link} from 'react-router-dom';

const ReminderSelect =(props) => {

    return (

      <div>
        <Router>
          <Switch>
            <Route path="/appointments" render={(props) => {
              return <AppointmentList appointments ={this.props.appointments}/>
            }
          }>
            </Route>
          </Switch>
        </Router>
        <li className ="navLinkAppointment">
        <Link to="/reminders/appointments">Appointments</Link>
        </li>
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
