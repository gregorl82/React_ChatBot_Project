import React from 'react';
import Contact from './Contact.js';

const ContactList = (props) => {
  if (props.contacts.length === 0){
    return <p>Waiting for Contact</p>
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
      {contacts}
      </ul>
  )
}

export default ContactList;
