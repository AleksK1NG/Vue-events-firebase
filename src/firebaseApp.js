import firebase from 'firebase';


const config = {
  apiKey: "AIzaSyBX_MZ3G1wQXd389VJqWzGzTRIyigaRJtU",
  authDomain: "vue-events-app-7569b.firebaseapp.com",
  databaseURL: "https://vue-events-app-7569b.firebaseio.com",
  projectId: "vue-events-app-7569b",
  storageBucket: "vue-events-app-7569b.appspot.com",
  messagingSenderId: "224957064410"
};

export const firebaseApp = firebase.initializeApp(config);
export const eventsRefs = firebaseApp.database().ref().child('events');

// Firebase settings
