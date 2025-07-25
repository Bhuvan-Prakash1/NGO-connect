// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGIY6ZrkTWUhq9sgu3ZHLxhaHRLhoCAfc",
  authDomain: "ngoconnect-86fb7.firebaseapp.com",
  projectId: "ngoconnect-86fb7",
  storageBucket: "ngoconnect-86fb7.firebasestorage.app",
  messagingSenderId: "458333895387",
  appId: "1:458333895387:web:127e1cedb8ce30b39e6afe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

document.addEventListener('DOMContentLoaded', function() {
  const signupForm = document.getElementById('signupForm');
  
  if (signupForm) {
    signupForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          alert('User created successfully');
          window.location.href = 'login.html';
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        });
    });
  } else {
    console.error('Signup form not found');
  }
});