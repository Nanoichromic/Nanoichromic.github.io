const auth = firebase.auth();

function signIn(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		document.getElementById('SignInButton').innerHTML = 'Signed as ' + email;
		
		alert("Signed in as " + email);
	}