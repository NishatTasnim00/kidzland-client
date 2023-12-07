// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	// apiKey: import.meta.env.VITE_APIKEY,
	// authDomain: import.meta.env.VITE_AUTHDOMAIN,
	// projectId: import.meta.env.VITE_PROJECTID,
	// storageBucket: import.meta.env.VITE_STORAGEBUCKET,
	// messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
	// appId: import.meta.env.VITE_APPID,

	apiKey: "AIzaSyDMlYfbKvhK-78m_bfvdmhyC7kpRwtQhzI",
	authDomain: "kidzland-dfb3b.firebaseapp.com",
	projectId: "kidzland-dfb3b",
	storageBucket: "kidzland-dfb3b.appspot.com",
	messagingSenderId: "962417437850",
	appId: "1:962417437850:web:25c50d59eb4c77b3ea0323"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;