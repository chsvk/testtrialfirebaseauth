  var config = {
    apiKey: "AIzaSyC-E_D1FrhJYB0KhsvhDkkMxzm-h3d8CPU",
    authDomain: "webtrial-dd846.firebaseapp.com",
    databaseURL: "https://webtrial-dd846.firebaseio.com",
    projectId: "webtrial-dd846",
    storageBucket: "webtrial-dd846.appspot.com",
    messagingSenderId: "251276809454"
  };
  firebase.initializeApp(config);



function signup() {
    
    email = "vamshi@cyrrup.com"
    password = "random"
    
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function (){
        firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      location.href = "index.html"
    // User is signed in.
  } else {
      location.href = "login.html"
    // No user is signed in.
  }
});
    });
    
}

function login(){
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
        
        // fail
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
}).then( function() {
        
        // sucess
         firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      location.href = "index.html"
    // User is signed in.
  } else {
      location.href = "login.html"
    // No user is signed in.
  }
});
    });

}