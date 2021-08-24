import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyAsW2WD3hH_rek18BtMjIMRFmJngwclrKQ",
	authDomain: "bibliotech-a10cc.firebaseapp.com",
	projectId: "bibliotech-a10cc",
	storageBucket: "bibliotech-a10cc.appspot.com",
	messagingSenderId: "938811057785",
	appId: "1:938811057785:web:a01a45c294e07229f596a8",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
