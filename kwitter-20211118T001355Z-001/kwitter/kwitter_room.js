
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

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}
function getData() {
     firebase.database().ref("/").on('value', function(snapshot)
     {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    
     Room_names = childKey;
     //Start Code
     console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
     //End Code
     });});}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "index_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
