import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../../App.css'
import AppointmentList from './appointments/AppointmentList.js';
import ExerciseList from './exercise/ExerciseList.js';
import MedicationList from './medication/MedicationList.js'
import {Link} from 'react-router-dom';
import ReminderNavigation from '../navigation/ReminderNavigation';

class ReminderSelect extends Component {
  constructor(props){
  super(props);
}

render(){
  return  (
    <div className="router">
    <Router>
      <div>
          <Switch>

          <Route exact path="/reminders/" component={ReminderNavigation}/>

            <Route exact path="/reminders/appointments" render={() => {
              return <AppointmentList appointments={this.props.appointments} />
            }}>
            </Route>

            <Route exact path="/reminders/exercises" render={() => {
              return <ExerciseList exercises={this.props.exercises} />
            }}>
            </Route>

            <Route exact path="/reminders/medication" render={() => {
              return <MedicationList medications={this.props.medicines} />
            }}>
            </Route>



          </Switch>
      </div>
    </Router>
    </div>
    )
  }
}
export default ReminderSelect;
