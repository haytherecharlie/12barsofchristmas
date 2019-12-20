import firebase from "firebase/app"
import "firebase/firestore"

firebase.initializeApp({
  apiKey: "AIzaSyBpmzYEujfQR0l6OPg_1pgiv12lrx-UQOo",
  authDomain: "barsofchristmas.firebaseapp.com",
  databaseURL: "https://barsofchristmas.firebaseio.com",
  projectId: "barsofchristmas",
  storageBucket: "barsofchristmas.appspot.com",
  messagingSenderId: "575746980088",
  appId: "1:575746980088:web:d5d30fab73657ca9aba30d",
  measurementId: "G-2XPSWBTY53",
})

export default firebase.firestore()
