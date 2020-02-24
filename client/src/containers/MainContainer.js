import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ChatbotContainer from './ChatbotContainer';
import DisplayContainer from './DisplayContainer';
import ContactList from '../components/contacts/ContactList';
import Home from '../home.js';

class MainContainer extends Component{

  constructor(props) {
    super(props);
    this.state = {
      contacts: [{
        name: "bob",
        phoneNumber: "09999",
        address: " form street",
        email: "mrbob@gmail.com",
        relationship: "sister",
        nickname: "bobby"
      }],
      appointments: [],
      exercises: [],
      medicines: [],
      photos: [],
      listOfSites: String,
      userDetails: String
    }
  }




  render(){

    return (
      <div className ="main-container">
      <h2>I am a Main Container</h2>
      <ChatbotContainer/>
      <DisplayContainer contacts={this.state.contacts} listOfSites={this.state.listOfSites}/>
      </div>

    )}
  }

  export default MainContainer;
