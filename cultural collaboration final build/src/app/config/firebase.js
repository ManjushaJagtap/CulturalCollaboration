import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC8VxNCfpxcgommNGjEJyyNFPU16_46f4I",
  authDomain: "culturalcollaborationcs692.firebaseapp.com",
  databaseURL: "https://culturalcollaborationcs692.firebaseio.com",
  projectId: "culturalcollaborationcs692",
  storageBucket: "culturalcollaborationcs692.appspot.com",
  messagingSenderId: "746646343297",
  appId: "1:746646343297:web:f83887e3ace746dde40780"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;