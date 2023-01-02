 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

 import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries


 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyBQs0wGfQ9zqb-I9tTQU-ayq4Yoo6M4Pa0",
   authDomain: "democtto.firebaseapp.com",
   projectId: "democtto",    
   storageBucket: "democtto.appspot.com",
   messagingSenderId: "34675610766",
   appId: "1:34675610766:web:50230ca44bb002382b65df"
 };

 // Initialize Firebase
 export const app = initializeApp(firebaseConfig);

 //app tiene activado la forma de autenticar, y me da un nuevo objeto que se llama auth, es exportado como una constante
 export const auth = getAuth(app)