import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBe619nVaNbqzLJtU2I0mgJsowhsk1VA2Q",
  authDomain: "react-slack-clone-e7160.firebaseapp.com",
  databaseURL: "https://react-slack-clone-e7160.firebaseio.com",
  projectId: "react-slack-clone-e7160",
  storageBucket: "react-slack-clone-e7160.appspot.com",
  messagingSenderId: "47756960043",
  appId: "1:47756960043:web:aa7e4c58b7ee197577a56e",
  measurementId: "G-M0XEZP0DK1",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
