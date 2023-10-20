import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm1yJ3S4MejwgpPhGFeLFCDCD5oGUcxxc",
  authDomain: "coder-react-27486.firebaseapp.com",
  projectId: "coder-react-27486",
  storageBucket: "coder-react-27486.appspot.com",
  messagingSenderId: "652356525749",
  appId: "1:652356525749:web:e0904915861f0e672628fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
