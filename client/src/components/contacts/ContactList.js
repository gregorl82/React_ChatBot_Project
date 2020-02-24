import React from 'react';
import Contact from './Contact.js';
import '../../App.css';

const ContactList = (props) => {

  if (props.length === 0){
      return "Waiting on Contact"
    }

  const contacts = props.contacts.map((contact, index) => {
    return (
      <li key={index} className="component-item">
      <div className="component">
      <Contact contact={contact}/>
      </div>
      </li>
    )
  })

  return (
    <div>
    <ul className="component-list">
      <h3>List of contacts</h3>
      {contacts}
    </ul>
    <div style={{'zIndex':99, 'position': 'absolute'}} className="navLinkHome">
      <a href="/" id="home" >Home</a>
    </div>
    </div>
  )
}

export default ContactList;
