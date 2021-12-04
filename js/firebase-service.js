const firebaseConfig = {
  apiKey: "AIzaSyA5Km7PRa3jrZRSTolSuaKxOeMcEUt9ius",

  authDomain: "den-gule-cafe.firebaseapp.com",

  projectId: "den-gule-cafe",

  storageBucket: "den-gule-cafe.appspot.com",

  messagingSenderId: "365916633510",

  appId: "1:365916633510:web:fbb4b9874d16463d563767",

  measurementId: "G-3P1NE0VQSM"
};
firebase.initializeApp(firebaseConfig);

export const firebaseDB = firebase.firestore();