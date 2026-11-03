// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDBlXHuc682eJ3wiGEVYWiUpi0wv6jwEco",
    authDomain: "myweb-id.firebaseapp.com",
    projectId: "myweb-id",
    storageBucket: "myweb-id.firebasestorage.app",
    messagingSenderId: "273192370569",
    appId: "1:273192370569:web:0156d6fad96522e30c2158",
    measurementId: "G-EDW1MCYTME"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
