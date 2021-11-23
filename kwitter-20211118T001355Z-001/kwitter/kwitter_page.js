
const firebaseConfig = {
    apiKey: "AIzaSyAUCM3xHTnWQId8gJE4rO49zM3-Tff3ERg",
    authDomain: "twitterapp-20.firebaseapp.com",
    databaseURL: "https://twitterapp-20-default-rtdb.firebaseio.com",
    projectId: "twitterapp-20",
    storageBucket: "twitterapp-20.appspot.com",
    messagingSenderId: "898542898074",
    appId: "1:898542898074:web:163c8b424e42c8a8f78823"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0  
    });

    document.getElementById("msg").value = "";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }

