
import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance

var firebaseConfig = {
  apiKey: "AIzaSyAWjTqxahIILfU3q_kRxxxxxxxxx",
  authDomain: "projectName.firebaseapp.com",
  databaseURL: "https://projectName.firebaseio.com",
  projectId: "projectName",
  storageBucket: "projectName.appspot.com",
  messagingSenderId: "1111111115734926",
  appId: "1:22222222734926:web:3333333925dc1919edf",
  measurementId: "G-XXXXXX70TZQ"
};

export const db = firebase
.initializeApp(firebaseConfig)
  .firestore()



