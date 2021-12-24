import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBPJMuM9L2DbCtD7dWn4d3wwF6jAQqK5UY",
  authDomain: "hope-pet-shop.firebaseapp.com",
  projectId: "hope-pet-shop",
  storageBucket: "hope-pet-shop.appspot.com",
  messagingSenderId: "985031501635",
  appId: "1:985031501635:web:b6c33ac7c6e09c79cd71f6"
};

const firestoreApp = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
  return firestoreApp;
};  