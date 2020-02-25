import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../../App.css'
import AppointmentList from './appointments/AppointmentList.js';
import ExerciseList from './exercise/ExerciseList.js';
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

          <Route exact path="/reminders" component={ReminderNavigation}/>

            <Route exact path="/reminders/appointments" render={() => {
              return <AppointmentList appointments={this.props.appointments} />
            }}>
            </Route>

            <Route exact path="/reminders/exercises" render={() => {
              return <ExerciseList exercises={this.props.exercises} />
            }}>
            </Route>



          </Switch>
      </div>
    </Router>
    )
  }
}
export default ReminderSelect;
