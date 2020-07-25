const auth = firebase.auth();

function signOut() {
	auth.signOut();
	alert("Signed Out");
}