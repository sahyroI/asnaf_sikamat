firebase.auth().onAuthStateChanged(function(user) {

  if (user) {
    // User is signed in.
    var user = firebase.auth().currentUser;

    if(user != null){
      alert("Selamat Datang!");
      window.location.href = 'Asnaf_main.html';
    }
    else{
      window.location.href = 'index.html';
    }

  } else {
    // No user is signed in.
  }
});

function login(){

  var userEmail = document.getElementById("emailI").value;
  var userPass = document.getElementById("passwordI").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Ralat : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
  window.location.href = 'index.html';
}
