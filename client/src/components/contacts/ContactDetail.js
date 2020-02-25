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
<div className="contact-heading">
<h1>{props.contact.nickname}</h1>
</div>
<div className="contact-detail">
<p>{props.contact.name}  </p>
<br/>
<p>{props.contact.address}</p>
<br/>
<p>{props.contact.email}</p>
<br/>
<p>{props.contact.phoneNumber}</p>
<br/>
<p>{props.contact.relationship}</p>

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
