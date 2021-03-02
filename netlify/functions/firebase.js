const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyCTBwOx0mUW9Mdzl_KFY98AckRspxNHIhs",
  authDomain: "kiei-451-8e9d5.firebaseapp.com",
  projectId: "kiei-451-8e9d5",
  storageBucket: "kiei-451-8e9d5.appspot.com",
  messagingSenderId: "599849097914",
  appId: "1:599849097914:web:9698241e883af5750fc083"  
} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase