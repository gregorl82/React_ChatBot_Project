import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ContactList from '../components/contacts/ContactList';
import Navigation from '../components/navigation/Navigation.js';
import {Link} from 'react-router-dom';

const DisplayContainer = (props) => {

  return (
    <div>
    <div>

    <ContactList contacts = {props.contacts}/>
    <Router>
     <div>
       <nav>
         <ul>
           <li>
             <Link to="/">Puzzles</Link>
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
         <Route path="/photos">
           <Photos />
         </Route>
         <Route path="/reminders">
           <Reminders />
         </Route>
         <Route path="/puzzles">
           <Puzzles />
         </Route>
         <Route path="/contacts">
           <Contacts />
         </Route>
       </Switch>
     </div>
   </Router>
    </div>


<div>

</div>
</div>
)
}

function Photos() {
  return <h2>Photos</h2>;
}

function Puzzles() {
  return <h2>Puzzles</h2>;
}

function Reminders() {
  return <h2>Reminders</h2>;
}

function Contacts() {
  return <h2>Contacts</h2>;
}

export default DisplayContainer;

// if(!props.contacts) {
//   return "loading contacts...."
// }

    //   <Route path="/navigation"  >
      // "hello"
      // </Route>
      // <Route path="/contacts" component={ContactList} />
