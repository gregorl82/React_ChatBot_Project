import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ContactList from '../components/contacts/ContactList';
import Navigation from '../components/navigation/Navigation.js';
import {Link} from 'react-router-dom';
import PhotoSlider from '../components/photos/photo.js';
import '../App.css';

class DisplayContainer extends Component{
constructor(props){
    super(props);



  }

  Puzzles() {
    //document.getElementById('router').className="router";
    return <h2>Puzzles</h2>;
  }

  Reminders() {
    return <h2>Reminders</h2>;
  }

  render (){
////////////////////////////
    console.log(this.props.stuff);
    const stuffOne = this['props']['stuff'][1];
  console.log(stuffOne);
  let json = JSON.stringify(stuffOne);
  console.log(json);
  return (
    <div id="router">
    <h1>hello</h1>
    <h2>{json}</h2>

<h2>{this.props.stuff.address}</h2>;
///////////////////////////
<div>
    <Router >
     <div>
       <nav>
         <ul>
         <li>
           <Link to="/contacts">Contacts</Link>
         </li>
           <li>
             <Link to="/puzzles">Puzzles</Link>
           </li>
           <li>
             <Link to="/photos">Photos</Link>
           </li>
           <li>
             <Link to="/reminders">Reminders</Link>
           </li>
         </ul>
       </nav>

       {/* A <Switch> looks through its children <Route>s and
           renders the first one that matches the current URL. */}
       <Switch>
         <Route path="/contacts" render={(props) => {
           const contacts = props.contacts;
          return <ContactList contacts = {contacts}/>}}>
          </Route>
         <Route path="/photos" component={PhotoSlider}>

          </Route>
          <Route path="/puzzles" render={() => this.Puzzles()}>

           </Route>
           <Route path="/reminders" render={() => this.Reminders()}>

           </Route>

       </Switch>
     </div>
   </Router>
    </div>
</div>

)
}

// function Contacts(props) {
//
//   return <ContactList contacts = {props.contacts}/>;
// }
}


export default DisplayContainer;

// if(!props.contacts) {
//   return "loading contacts...."
// }

    //   <Route path="/navigation"  >
      // "hello"
      // </Route>
      // <Route path="/contacts" component={ContactList} />
