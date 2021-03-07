import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyChmb3TMv_Vj2jgTFvv0IbyLBSB4VNCBHo",
  authDomain: "codeelectra-d3786.firebaseapp.com",
  databaseURL: "https://codeelectra-d3786.firebaseio.com",
  projectId: "codeelectra-d3786",
  storageBucket: "codeelectra-d3786.appspot.com",
  messagingSenderId: "494932367372",
  appId: "1:494932367372:web:8c5a94634b3dd7585f3629",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
