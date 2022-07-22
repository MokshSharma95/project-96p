//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyANX2PbUTDX0J2iA_g2u7fuR6Ag6p9aYHk",
      authDomain: "project-93-62c05.firebaseapp.com",
      databaseURL: "https://project-93-62c05-default-rtdb.firebaseio.com",
      projectId: "project-93-62c05",
      storageBucket: "project-93-62c05.appspot.com",
      messagingSenderId: "890394856281",
      appId: "1:890394856281:web:249ae47f63406826575a48",
      measurementId: "G-MK5H9X79HM"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     user_name = localStorage.getItem("user_name");
     room_name = localStorage.getItem("room_name");

     console.log("user name" + user_name);

     function send(){
      msg = document.getElementByI("msg").value;
      console.log("Message" +msg);
     
           firebase.database().ref(room_name).push({
           name:user_name,
           message:msg,
           like:0
           });

           document.getElementById("msg").value = "";
     }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
Like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+"onclick='updateLike(thid.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

row = name_with_tag + message_with_tag + Like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id)
{
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) +1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
like : updated_likes
      });
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}
