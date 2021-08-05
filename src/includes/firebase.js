import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDinNcOKT6Pym_6uda7VsYGRkEE-Ry_IkY',
  authDomain: 'music-c8572.firebaseapp.com',
  projectId: 'music-c8572',
  storageBucket: 'music-c8572.appspot.com',
  messagingSenderId: '713966526811',
  appId: '1:713966526811:web:8cfa5d8db4f3098492ba7e',
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`);
});

const userCollections = db.collection('users');
const songCollections = db.collection('songs');
const commentCollections = db.collection('comments');

export {
  auth,
  db,
  userCollections,
  songCollections,
  commentCollections,
  storage,
};
