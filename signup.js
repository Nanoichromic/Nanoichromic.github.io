	const auth = firebase.auth();
	
	
	function signUp(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));

		document.getElementById('SignInButton').innerHTML = 'Signed as ' + email;
		else{
			alert("Signed Up");
		}
	}
