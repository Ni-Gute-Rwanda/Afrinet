const firebaseConfig = {
  apiKey: "AIzaSyB8Ms2Z36_Omo3p7tfysmGZ8MukFPqs1T0",
  authDomain: "afrinet-f6988.firebaseapp.com",
  databaseURL: "https://afrinet-f6988.firebaseio.com",
  projectId: "afrinet-f6988",
  storageBucket: "afrinet-f6988.appspot.com",
  messagingSenderId: "362732637545",
  appId: "1:362732637545:web:a457dd419813a6f4b881f8",
  measurementId: "G-00L79WCX5T",
};
firebase.initializeApp(firebaseConfig);

const loginForm = document.querySelector("#login-form");
const auth = firebase.auth();
