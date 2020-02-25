
import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance

let firebaseConfig = {
  apiKey: "AIzaSyDI3lbpkHHMj8084s_Jd1SaCeKXNKxONhM",
  authDomain: "via-firestore-2020.firebaseapp.com",
  databaseURL: "https://via-firestore-2020.firebaseio.com",
  projectId: "via-firestore-2020",
  storageBucket: "via-firestore-2020.appspot.com",
  messagingSenderId: "259828398385",
  appId: "1:259828398385:web:65392799b639a1a3ffd810",
  measurementId: "G-L0LC8BYB91"
};

export const db = firebase
.initializeApp(firebaseConfig)
  .firestore()



