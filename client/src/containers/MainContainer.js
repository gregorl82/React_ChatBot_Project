import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ChatbotContainer from './ChatbotContainer';
import DisplayContainer from './DisplayContainer';
import ContactList from '../components/contacts/ContactList';
import Request from '../helpers/request.js';
import firebase from '../firebase/firestore.js'

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
  const db= firebase.firestore();
//  const userNamesPromise=db.collection('usernames').get()
  const contacts=db.collection('contacts').get()
  .then(snapshot => {
    const contactsRetreived = [];
    snapshot.forEach(doc =>{
      contactsRetreived.push(doc.data());
    })
    this.setState({contacts: contactsRetreived})
  })
  .catch(err =>{
    console.log('error getting docs', err);
  })

  const appointment_reminders=db.collection('appointment_reminders').get()
  .then(snapshot => {
    const appointmentsRetreived = [];
    snapshot.forEach(doc =>{
      appointmentsRetreived.push(doc.data());
    })
    this.setState({appointments: appointmentsRetreived})
  })
  .catch(err =>{
    console.log('error getting docs', err);
  })

  const tablet_reminders=db.collection('tablet_reminders').get()
  .then(snapshot => {
    const medicinesRetreived = [];
    snapshot.forEach(doc =>{
      medicinesRetreived.push(doc.data());
    })
    this.setState({medicines: medicinesRetreived})
  })
  .catch(err =>{
    console.log('error getting docs', err);
  })

  const photos=db.collection('photos').get()
  .then(snapshot => {
    const photosRetreived = [];
    snapshot.forEach(doc =>{
      photosRetreived.push(doc.data());
    })
    this.setState({photos: photosRetreived})
  })
  .catch(err =>{
    console.log('error getting docs', err);
  })

  const usernames=db.collection('usernames').get()
  .then(snapshot => {
    const userNamesRetreived = [];
    snapshot.forEach(doc =>{
      userNamesRetreived.push(doc.data());
    })
    this.setState({userDetails: userNamesRetreived})
  })
  .catch(err =>{
    console.log('error getting docs', err);
  })

  const website_links=db.collection('website_links').get()
  .then(snapshot => {
    const puzzleSitesRetreived = [];
    snapshot.forEach(doc =>{
      puzzleSitesRetreived.push(doc.data());
    })
    this.setState({listOfSites: puzzleSitesRetreived})
  })
  .catch(err =>{
    console.log('error getting docs', err);
  })

  const exercise_reminders=db.collection('exercise_reminders').get()
  .then(snapshot => {
    const exercisesRetreived = [];
    snapshot.forEach(doc =>{
      exercisesRetreived.push(doc.data());
    })
    this.setState({exercises: exercisesRetreived})
  })
  .catch(err =>{
    console.log('error getting docs', err);
  })

}


  render(){

    return (
    <div className ="main-container">
    <ChatbotContainer/>
    <DisplayContainer data ={this.state} />
  </div>
  );
  }

}

export default MainContainer;
