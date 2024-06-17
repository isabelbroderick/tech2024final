const firebaseConfig = {
    apiKey: "AIzaSyDW9v17UJm3ry7ccV7bz1To2NZdOdYBBV0",
    authDomain: "tech-2024.firebaseapp.com",
    databaseURL: "https://tech-2024-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "tech-2024",
    storageBucket: "tech-2024.appspot.com",
    messagingSenderId: "80121578021",
    appId: "1:80121578021:web:48769f1b25026aec4675cc",
    measurementId: "G-YK4JKH5603"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

var email = "...@gmail.com";
var password = "...";

function signIn() {
	firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then((userCredential) => {
			// Signed in
			var user = userCredential.user;
			console.log("Sign In SuccessFul!");
			// ...
		})
		.catch((error) => {
			var errorCode = error.code;
			var errorMessage = error.message;
		});
}

function showUserProfile1() {
	const user = firebase.auth().currentUser;

	if (user !== null) {
		user.providerData.forEach((profile) => {
			console.log("Sign-in provider: " + profile.providerId);
			console.log(" Provider-specific UID: " + profile.uid);
			console.log(" Name: " + profile.displayName);
			console.log(" Email: " + profile.email);
			console.log(" Photo URL: " + profile.photoURL);
		});
	}
}

// Method to update the password
function UpdatePassword() {
	const user = firebase.auth().currentUser;
	const newPassword = document.getElementById('newPassword').value;

	user.updatePassword(newPassword).then(() => {
		// Update successful.

		console.log('Update SuccessFul');

	}).catch((error) => {
		// An error occurred
		// ...
	});
}
