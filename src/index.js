import React from 'react'
import ReactDOM from 'react-dom'

//Components
import App from './client/components/App'

// Firestore
const admin = require('firebase-admin');
const functions = require('firebase-functions');
admin.initializeApp(functions.config().firebase);

let db = admin.firestore();
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root'))
})