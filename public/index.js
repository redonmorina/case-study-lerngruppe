import "./styles.scss";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlWOrEF184l4o8jwnPfAx8Fs-ugqu9nVs",
  authDomain: "case-study-66fcd.firebaseapp.com",
  projectId: "case-study-66fcd",
  storageBucket: "case-study-66fcd.appspot.com",
  messagingSenderId: "228693940237",
  appId: "1:228693940237:web:1f14d119651ebb9077dd44",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let email = document.getElementById("email");
let matrikelnummer = document.getElementById("matrikelnummer");

//if email ends with @haw-landshut.de alert (Login successfully)
//else alert (Login failed)
function login() {
  if (email.value.endsWith("@haw-landshut.de")) {
    alert("Login successfully");
  } else {
    alert("Login failed");
  }
  if (
    (matrikelnummer.value.length != 7 && matrikelnummer.value.length < 6) ||
    matrikelnummer.value.startsWith("L")
  ) {
    alert("Login failed");
  }
}
