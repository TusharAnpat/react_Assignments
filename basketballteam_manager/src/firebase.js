import firebase from 'firebase/app';
import 'firebase/database';

firebase.initializeApp({
    apiKey: "AIzaSyBEkBtin-4D4bs1ac33pjzpKDbCQfmUNQU",
    authDomain: "reactform-89994.firebaseapp.com",
    databaseURL: "https://reactform-89994-default-rtdb.firebaseio.com",
    projectId: "reactform-89994",
    storageBucket: "reactform-89994.appspot.com",
    messagingSenderId: "22844765765",
    appId: "1:22844765765:web:845d4e8c8667c27ebfd52c"
});

//   const fireDB = firebase.initializeApppp(firebaseConfig);
//   export default fireDB.database().ref();
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// export default firebaseApp;
const database = firebase.database();
const dataRef = database.ref('composeteamform');
export {firebase, dataRef ,database};
