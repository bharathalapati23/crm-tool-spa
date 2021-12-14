import firebase from "firebase";
import "firebase/storage";

export const app = firebase.initializeApp({
  projectId: "pdf-upld-dwnld",
  appId: "1:299388948395:web:1bd40c324823ec414dccee",
  storageBucket: "pdf-upld-dwnld.appspot.com",
  locationId: "us-central",
  apiKey: "AIzaSyAVWhG8HQ0GndpvYQ0gXSa_8ZLN5Zj9ow8",
  authDomain: "pdf-upld-dwnld.firebaseapp.com",
  messagingSenderId: "299388948395",
  measurementId: "G-B9063TZ24D",
});
