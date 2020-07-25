  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCfuRp_zi27fqIcZzvJrvrEVAI0IF9t74w",
    authDomain: "nano-world-bfabd.firebaseapp.com",
    databaseURL: "https://nano-world-bfabd.firebaseio.com",
    projectId: "nano-world-bfabd",
    storageBucket: "nano-world-bfabd.appspot.com",
    messagingSenderId: "830719309449",
    appId: "1:830719309449:web:585f99c08c9bdaa623f858",
    measurementId: "G-PT6MZ9WN9P"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const auth = firebase.auth();

  function signUp() {
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var passwordConfirm = document.getElementById('passwordConfirm');


    const promise = auth.createUserWithEmailAndPassword(email.value, password.value)
    if password.value != passwordConfirm.value{
      alert("Confirm It");
    }
  }