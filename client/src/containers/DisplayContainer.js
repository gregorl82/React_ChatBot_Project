import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ContactList from '../components/contacts/ContactList';
import Puzzle from '../components/puzzles/Puzzle';
import Navigation from '../components/navigation/Navigation.js';
import PhotoSlider from '../components/photos/photo.js';
import ContactDetail from '../components/contacts/ContactDetail.js';
import ReminderSelect from '../components/reminders/ReminderSelect';
import '../App.css';

class DisplayContainer extends Component{
    super(props){};

  findContactByName(name){
  return this.props.data.contacts.find((contact) => {
    return contact.name === name;
  });
}

  render (){
  return (
    <div className="router">
  <div>
    <Router >
     <div>
       {/* A <Switch> looks through its children <Route>s and
           renders the first one that matches the current URL. */}
       <Switch>
         <Route exact path="/contacts/" render={(props) => {
           return <ContactList contacts={this.props.data.contacts}/>
         }}>
          </Route>

          <Route exact path="/contacts/:name" render={(props) =>{
            const name = props.match.params.name;
            const contact = this.findContactByName(name);
            return <ContactDetail contact={contact} />
          }}>
          </Route>

          <Route path="/photos" render={() => {
            return <PhotoSlider photos={this.props.data.photos}/>
          }}>
          </Route>

          <Route exact path="/puzzles" component={Puzzle}>
           </Route>

           <Route path="/reminders" render={(props) => {
             return <ReminderSelect appointments={this.props.data.appointments} medicines={this.props.data.medicines} exercises={this.props.data.exercises}/>
           }}>
           </Route>

           <Route path="/" component={Navigation} />

       </Switch>
     </div>
   </Router>
    </div>
    <div className="container">
      <div className="sky"></div>
      <div className="sea">
      <div className="light"></div>
      </div>
      <div className="sun"></div>
      <div className="bird1"></div>
      <div className="birdr1"></div>
      <div className="bird"></div>
      <div className="birdr"></div>
      </div>


    </div>

)
}

}


export default DisplayContainer;
