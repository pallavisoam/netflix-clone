import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB6HY3wSLnA_XzpNv_2skKhbSkR02k3Ubc",
  authDomain: "netflix-clone-7c74a.firebaseapp.com",
  projectId: "netflix-clone-7c74a",
  storageBucket: "netflix-clone-7c74a.appspot.com",
  messagingSenderId: "927381703194",
  appId: "1:927381703194:web:3f19b3306edd7a4cc29fa3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
