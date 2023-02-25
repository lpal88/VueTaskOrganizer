import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import './assets/main.css'
import store from './store/index'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBugAVnQdCXhFtcoxW36ig2Tb_bX3yBpi0",
  authDomain: "taskorganizerasd.firebaseapp.com",
  projectId: "taskorganizerasd",
  storageBucket: "taskorganizerasd.appspot.com",
  messagingSenderId: "707289102945",
  appId: "1:707289102945:web:741de966286dc4a667c820"
};

initializeApp(firebaseConfig);

createApp(App).use(router).use(store).mount('#app')

