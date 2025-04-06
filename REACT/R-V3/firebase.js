// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBZOorwEYT_Xh_lHGufmx4CONT4X1pl03E",
//   authDomain: "naphotieb.firebaseapp.com",
//   projectId: "naphotieb",
//   storageBucket: "naphotieb.firebasestorage.app",
//   messagingSenderId: "915314202145",
//   appId: "1:915314202145:web:7fdf0cbd6e74595f95f560"
// };
const firebaseConfig = {
  apiKey: "AIzaSyDwVCE4iKF-qboQgXR5BP2l0weqWMmmJFA",
  authDomain: "naphotie.firebaseapp.com",
  projectId: "naphotie",
  storageBucket: "naphotie.firebasestorage.app",
  messagingSenderId: "177394085962",
  appId: "1:177394085962:web:d81706aac35b58bb4af6b3",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
