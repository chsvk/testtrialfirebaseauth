  var config = {
    apiKey: "AIzaSyC-E_D1FrhJYB0KhsvhDkkMxzm-h3d8CPU",
    authDomain: "webtrial-dd846.firebaseapp.com",
    databaseURL: "https://webtrial-dd846.firebaseio.com",
    projectId: "webtrial-dd846",
    storageBucket: "webtrial-dd846.appspot.com",
    messagingSenderId: "251276809454"
  };
  firebase.initializeApp(config);


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      location.href = "index.html"
    // User is signed in.
  } else {
      location.href = "login.html"
    // No user is signed in.
  }
});