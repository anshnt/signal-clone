import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACXshvMZi39Zsfb5Kf8L3Guh8rDnvtjvg",
  authDomain: "signal-clone-e7cc4.firebaseapp.com",
  projectId: "signal-clone-e7cc4",
  storageBucket: "signal-clone-e7cc4.appspot.com",
  messagingSenderId: "890975334841",
  appId: "1:890975334841:web:8f65a43cd5796f524dc668",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
