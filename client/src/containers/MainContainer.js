import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ChatbotContainer from './ChatbotContainer';
import DisplayContainer from './DisplayContainer';
import ContactList from '../components/contacts/ContactList';
import Home from '../home.js';
import Request from '../helpers/request.js';

class MainContainer extends Component{

constructor(props) {
  super(props);
  this.state = {
    contacts: [],
    appointments: [],
    exercises: [],
    medicines: [],
    photos: [],
    listOfSites: String,
    userDetails: String
  }
}

componentDidMount(){
  const request = new Request();
  const contactPromise = request.get('/api/contacts')
  const photoPromise = request.get('/api/photos')


Promise.all([contactPromise, photoPromise])
.then((data) => {
  this.setState({
    contacts: data[0],
    photos: data[1]
  })
})
}


// displays the navigation options if displayType is true
displayNavigation(){
  //const display = props.displayType;
  if (this.state) {
    return <DisplayContainer stuff ={this.state}/>
  }
  return <ChatbotContainer/>;
}




  render(){

    return (
    <div className ="main-container">
    <h2>I am a Main Container</h2>
    {this.displayNavigation()}

  </div>
  );
  }
}

// <ChatbotContainer/>
// <DisplayContainer stuff ={this.state.contacts}/>

export default MainContainer;
