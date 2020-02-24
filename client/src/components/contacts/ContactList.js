import React from 'react';
import Contact from './Contact.js';

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
    <ul className="component-list">
      <h3>List of contacts</h3>
      {contacts}
    </ul>
  )
}

export default ContactList;
