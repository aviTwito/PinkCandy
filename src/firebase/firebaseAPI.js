import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDNZkOv8BmZu0qLnDs8KszicDlUDbb0rH0",
  authDomain: "pinkcandy-88b44.firebaseapp.com",
  databaseURL: "https://pinkcandy-88b44.firebaseio.com",
  projectId: "pinkcandy-88b44",
  storageBucket: "pinkcandy-88b44.appspot.com",
  messagingSenderId: "960571149800",
  appId: "1:960571149800:web:8415c58943fc03ffa4a85d",
  measurementId: "G-T4EEE2T0VC"
};

// Get a Firestore instance
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();
export const firestorage = firebase.storage().ref();
// export const auth = firebase.initializeApp(firebaseConfig).auth();

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore;
export { Timestamp, GeoPoint };
