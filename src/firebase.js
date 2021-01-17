import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDx0OURO4iDPIxStaDJOboEyNRvqU1NwWI",
    authDomain: "productify-htn.firebaseapp.com",
    projectId: "productify-htn",
    storageBucket: "productify-htn.appspot.com",
    messagingSenderId: "1006637576633",
    appId: "1:1006637576633:web:894e1b6347214877bd0668",
    measurementId: "G-YKW8XKLS53"
};
  
firebase.initializeApp(firebaseConfig);
export default firebase;