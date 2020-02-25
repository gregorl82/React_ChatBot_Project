import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';



const Contact = (props) => {
  if(!props.contact){
    return "Loading contact..."
  }
  // const url ="/contacts/" = props.contact.id;
//

  return (
    <div>
      <h4>
{props.contact.name} ({props.contact.nickname})
    </h4>

    </div>
  )
  }
  // <p>Phone Number: {props.contact.phoneNumber} </p>
  // <p>Address: {props.contact.address}</p>
  // <p>email: {props.contact.email}</p>
  // <p>Relationship: {props.contact.relationship}</p>

// <a href="#" onClick={handleClick(props)}></a>
//
//   handleClick(props){
//   <ContactDetail contact={this.props.contact}
//   };


export default Contact;
