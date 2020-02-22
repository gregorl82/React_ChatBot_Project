import React, {Component} from 'react';
import ContactList from '../components/contacts/ContactList';


const DisplayContainer = (props) => {
  if(!props.contacts) {
    return "loading contacts...."
  }
  return (
    <div
><p> I am the DisplayContainer!</p>
  <ContactList contacts = {props.contacts}/>
  </div>
)
}

export default DisplayContainer;
