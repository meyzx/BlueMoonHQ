// Configuración de Firebase de Blue Moon HQ
const firebaseConfig = {
  apiKey: "AIzaSyBqUUz2fe7koIrSPch3egXRoKUOcQIn71E",
  authDomain: "bluemoonhq-bfd5f.firebaseapp.com",
  projectId: "bluemoonhq-bfd5f",
  storageBucket: "bluemoonhq-bfd5f.firebasestorage.app",
  messagingSenderId: "273232524142",
  appId: "1:273232524142:web:d79ba10cb01b7be503477f"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
