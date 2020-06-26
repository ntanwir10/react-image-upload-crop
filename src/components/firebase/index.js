import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDrjTxtZG8o1227DUqi2sbr0BxDCHfDaho",
  authDomain: "react-image-upload-and-c-bbd0f.firebaseapp.com",
  databaseURL: "https://react-image-upload-and-c-bbd0f.firebaseio.com",
  projectId: "react-image-upload-and-c-bbd0f",
  storageBucket: "react-image-upload-and-c-bbd0f.appspot.com",
  messagingSenderId: "73677178427",
  appId: "1:73677178427:web:149704e87714eff275fe1e",
  measurementId: "G-89WQ7XLYQK",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const storage = firebase.storage();

export { storage, firebase as default };
