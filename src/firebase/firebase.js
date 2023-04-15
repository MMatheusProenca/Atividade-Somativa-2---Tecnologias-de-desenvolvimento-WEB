
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

let firebaseConfig = {
  apiKey: "AIzaSyDskOcfLcb95Wuvi_Zp61MUMlcDuKOWD0w",
  authDomain: "as2-mhrp.firebaseapp.com",
  projectId: "as2-mhrp",
  storageBucket: "as2-mhrp.appspot.com",
  messagingSenderId: "62739659995",
  appId: "1:62739659995:web:6d9caf3653d4ea0511a0fe"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
