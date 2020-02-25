import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import Contact from './Contact.js';
import '../../App.css';

const ContactDetail = (props) => {
  console.log(props.contact);
  if(!props.contact){
    return"Loading..."
  }

return (
<div>
<div>

<p>{props.contact.name}</p>
<p>{props.contact.address}</p>
<p>{props.contact.nickname}</p>
  // <Contact contact = {props.contact}/>
  </div>
  <div style={{'zIndex':99, 'position': 'absolute'}} className="navLinkHome">
    <a href="/" id="home" >Home</a>
  </div>
  </div>

)
}
export default ContactDetail;

// className="component-item"
// className="component"
