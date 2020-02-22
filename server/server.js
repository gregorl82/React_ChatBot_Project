const express = require('express');
const app = express();
const cors = require('cors');
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

app.use(parser.json());
app.use(cors());

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('project_database');

  const contactsCollection = db.collection('contacts');
  const contactsRouter = createRouter(contactsCollection);
  app.use('/api/contacts', contactsRouter);

  const appointmentRemindersCollection = db.collection('appointment_reminders');
  const appointmentRemindersRouter = createRouter(appointmentRemindersCollection);
  app.use('/api/appointmentreminders', appointmentRemindersRouter);

  const tabletRemindersCollection = db.collection('tablet_reminders');
  const tabletRemindersRouter = createRouter(tabletRemindersCollection);
  app.use('/api/tabletreminders', tabletRemindersRouter);

  const photosCollection = db.collection('photos');
  const photosRouter = createRouter(photosCollection);
  app.use('/api/photos', photosRouter);

  const userDetailsCollection = db.collection('user_details');
  const userDetailsRouter = createRouter(userDetailsCollection);
  app.use('/api/userdetails', userDetailsRouter);

  const websiteLinksCollection = db.collection('website_links');
  const websiteLinksRouter = createRouter(websiteLinksCollection);
  app.use('/api/websitelinks', websiteLinksRouter);
})

app.listen(3000, function(){
  console.log(`Listening on port ${ this.address().port }`);
})
