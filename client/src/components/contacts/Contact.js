import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const Contact = (props) => {
  if(!props.contact){
    return "Loading contact..."
  }
  // const url ="/contacts/" = props.contact.id;
//
  return (
    <div>
    <p>{props.contact.name}</p>
    <p>Phone Number: {props.contact.phoneNumber} </p>
    <p>Address: {props.contact.address}</p>
    <p>email: {props.contact.email}</p>
    <p>Relationship: {props.contact.relationship}</p>
    <p>Nickname: {props.contact.nickname}</p>
    </div>
  )
  }




export default Contact;
