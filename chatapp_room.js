const firebaseConfig = {
      apiKey: "AIzaSyAzQyLTldklf0BitnC16rGZaprQamrorQ8",
      authDomain: "projetct-96.firebaseapp.com",
      projectId: "projetct-96",
      storageBucket: "projetct-96.appspot.com",
      messagingSenderId: "336681934740",
      appId: "1:336681934740:web:d4d1024ca2954dc237b981",
      measurementId: "G-FFQD2XHTFB"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

     document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

     function addRoom(){
           room_name = document.getElementById("room_name").value;

           firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
           });

           localStorage.setItem("room_name", room_name);

           window.location = "chatapp_page.html";
     }
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+ "</div><hr>";
document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "chatap_page.html";
}
function
 logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

