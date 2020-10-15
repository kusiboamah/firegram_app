import *  as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
      apiKey: "AIzaSyDz05a1f3OA4VZg2fkJge8sUr6b2epUMro",
      authDomain: "firegram-30010.firebaseapp.com",
      databaseURL: "https://firegram-30010.firebaseio.com",
      projectId: "firegram-30010",
      storageBucket: "firegram-30010.appspot.com",
      messagingSenderId: "226820470874",
      appId: "1:226820470874:web:c0ceb32634a9a573b08063",
      measurementId: "G-5Y5DWQXE8N"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timeStamp };
