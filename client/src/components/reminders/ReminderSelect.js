import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../../App.css'
import AppointmentList from './appointments/AppointmentList.js';
import {Link} from 'react-router-dom';
import ReminderNavigation from '../navigation/ReminderNavigation';

class ReminderSelect extends Component {
  constructor(props){
  super(props);
}

render(){
  return  (
    <Router>
      <div>
          <Switch>

          // Add a route for /reminders/appointments to render appointment list with data.appointments passed in as a propd

            <Route exact path="/reminders" component={ReminderNavigation}/>

            // <Route exact path="/reminders/appointments" render={(props) => {
            //   return <ReminderSelect appointments={this.props.data.appointments}/>
            // }}>
            // </Route>

          </Switch>
          </div>
    </Router>
)



}
}
export default ReminderSelect;
