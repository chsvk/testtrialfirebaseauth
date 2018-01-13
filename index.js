window.alert('ey');

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC-E_D1FrhJYB0KhsvhDkkMxzm-h3d8CPU",
    authDomain: "webtrial-dd846.firebaseapp.com",
    databaseURL: "https://webtrial-dd846.firebaseio.com",
    projectId: "webtrial-dd846",
    storageBucket: "webtrial-dd846.appspot.com",
    messagingSenderId: "251276809454"
  };
  firebase.initializeApp(config);




function execute(){
    firebase.auth().signOut().then(function() {
        location.href =  "main.html"
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
        // try again
});
}