 import firebase from 'firebase';
 
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCvcgQMWdIhWGKMGi4CaL_G3IoaPp0gfbM",
    authDomain: "hygiearecycle.firebaseapp.com",
    databaseURL: "https://hygiearecycle.firebaseio.com",
    projectId: "hygiearecycle",
    storageBucket: "hygiearecycle.appspot.com",
    messagingSenderId: "655439825933"
  }
try {
  // ingialize firebase
  firebase.initializeApp(config);

} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase error', err.stack)
  }
}

const fire = firebase;
export default fire