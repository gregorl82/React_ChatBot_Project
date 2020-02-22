import React, {Component} from 'react';

class ContactsCreateContact extends Component{

  constructor(props){
    super(props);
    this.state = {
      name: "",
      phoneNumber: "",
      address: "",
      email: "",
      relationship: "",
      nickname: ""

    }
    this.handleName = this.handleName.bind(this);
    this.handlePhoneNumber = this.handlePhoneNumber.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleRelationship = this.handleRelationship.bind(this);
    this.handleNickname = this.handleNickname.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleName(event) {
    this.setState({name: event.target.value})
  }

  handlePhoneNumber(event) {
    this.setState({phoneNumber: event.target.value})
  }
  handleAddress(event) {
    this.setState({address: event.target.value})
  }
  handleEmail(event) {
    this.setState({email: event.target.value})
  }
  handleRelationship(event) {
    this.setState({relationship: event.target.value})
  }
  handleNickname(event) {
    this.setState({nickname: event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault();
    const newContact = {
      name: this.state.name,
      phoneNumber: this.state.phoneNumber,
      address: this.state.address,
      email: this.state.email,
      relationship: this.state.relationship,
      nickname: this.state.nickname
    }
    this.props.onPost(newContact)
  }
  render(){
    const contactOptions = this.props.contacts.map((contact, index) => {
      return <option key={contact.id} value={index}>{contact.name}</option>

    });
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <input type="text" placeholder="Name"name="name" onChange={this.handleName} value={this.state.name}/>
      <input type="text" placeholder="Phone Number" name="phoneNumber" onChange={this.handlePhoneNumber} value={this.state.phoneNumber}/>
      <input type="text" placeholder="Address" name="address" onChange={this.handleAddress} value={this.state.address}/>
      <input type="text" placeholder="Email" name="email" onChange={this.handleEmail} value={this.state.email}/>
      <input type="text" placeholder="Relationship" name="relationship" onChange={this.handleRelationship} value={this.state.relationship}/>
      <input type="text" placeholder="Nickname" name="nickname" onChange={this.handleNickname} value={this.state.nickname}/>
      <select name="contact" onChange={this.handleContact}>
        <option disabled selected> Select a Contact</option>
        {contactOptions}
        </select>
        <button type="submit">Save Contact</button>
        </form>
      </div>
    )
  }
}

export default ContactsCreateContact;
