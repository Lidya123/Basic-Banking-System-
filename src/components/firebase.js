// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDOxd_dZMvBmXyM2TjF2Gv0tQHq-tMeu3w",
  authDomain: "basic-banking-system-72d68.firebaseapp.com",
  databaseURL: "https://basic-banking-system-72d68-default-rtdb.firebaseio.com",
  projectId: "basic-banking-system-72d68",
  storageBucket: "basic-banking-system-72d68.appspot.com",
  messagingSenderId: "735251133391",
  appId: "1:735251133391:web:4d0024d6c15f5c246818ba",
  //measurementId: "${config.measurementId}"
};

firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default } ;