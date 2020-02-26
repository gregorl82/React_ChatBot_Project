import React from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';



const Contact = (props) => {
  if(!props.contact){
    return "Loading contact..."
  }

  const url = "/contacts/" + props.contact.name


  return (
    <div>

    <Link to= {url} ><h4>{props.contact.name} ({props.contact.nickname})</h4></Link>

    </div>
  )
  }
  // <p>Phone Number: {props.contact.phoneNumber} </p>
  // <p>Address: {props.contact.address}</p>
  // <p>email: {props.contact.email}</p>
  // <p>Relationship: {props.contact.relationship}</p>

export default Contact;
