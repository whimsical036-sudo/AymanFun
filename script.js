// script.js

// Firebase Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getDatabase,
  ref,
  onValue,
  set,
  get
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCfISHeNs_TflqRy8BACKWTinbkWAXwXgc",
  authDomain: "counter-74305.firebaseapp.com",
  projectId: "counter-74305",
  storageBucket: "counter-74305.firebasestorage.app",
  messagingSenderId: "464772006188",
  appId: "1:464772006188:web:44edd41ec33d2d281d2c89",
  measurementId: "G-E6V54XYKVR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// HTML Elements
const button = document.getElementById("clickButton");
const countText = document.getElementById("clickCount");

// Database Reference
const countRef = ref(db, "counter");

// LIVE COUNTER UPDATES
onValue(countRef, (snapshot) => {
  const data = snapshot.val() || 0;

  countText.textContent = data;
});

// BUTTON CLICK
button.addEventListener("click", async () => {

  const snapshot = await get(countRef);

  let current = snapshot.val() || 0;

  current++;

  set(countRef, current);

});
