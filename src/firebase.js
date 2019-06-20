import firebase from 'firebase'
// change lines below with your own Firebase snippets!
const firebaseConfig = {
  apiKey: "AIzaSyDQp6Mdcop2BwzyWgZorNE6OBucbf-RVlQ",
  authDomain: "trackken-v2.firebaseapp.com",
  databaseURL: "https://trackken-v2.firebaseio.com",
  projectId: "trackken-v2",
  storageBucket: "trackken-v2.appspot.com",
  messagingSenderId: "510395493812",
  appId: "1:510395493812:web:f0d2b17bbcac631c"
};
const fire = firebase.initializeApp(firebaseConfig);
export default fire;