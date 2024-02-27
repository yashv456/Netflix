// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAkhXgEyebnWkUexmpKeSezM4C7b-YG6fQ',
  authDomain: 'react-netflix-clone-16b29.firebaseapp.com',
  projectId: 'react-netflix-clone-16b29',
  storageBucket: 'react-netflix-clone-16b29.appspot.com',
  messagingSenderId: '658622737162',
  appId: '1:658622737162:web:d9b5c1bfe8e99a59dd28f3',
  measurementId: 'G-LCY8S8S3LM',
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
