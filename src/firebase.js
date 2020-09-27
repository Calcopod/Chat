import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBbFAX2ZIxMT8BB15mFNgAHP5EuDk6s488",
  authDomain: "chatapp-b27e7.firebaseapp.com",
  databaseURL: "https://chatapp-b27e7.firebaseio.com",
  projectId: "chatapp-b27e7",
  storageBucket: "chatapp-b27e7.appspot.com",
  messagingSenderId: "685993746464",
  appId: "1:685993746464:web:54f8cab6c00f8d1682dc45"
};

firebase.initializeApp(firebaseConfig)

const provider = new firebase.auth.GoogleAuthProvider();

export { provider }