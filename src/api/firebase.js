import firebase from "firebase/app"
import "firebase/firestore"

firebase.initializeApp({
  apiKey: "AIzaSyCRd6wImjDQyPBE6_Ef9Z6TdQMP1sqAb-U",
  authDomain: "twelvebars.firebaseapp.com",
  projectId: "twelvebars",
  storageBucket: "twelvebars.appspot.com",
  messagingSenderId: "114394178036",
  appId: "1:114394178036:web:655247cd1dcdb0af6e99a1"
})

export default firebase.firestore()
