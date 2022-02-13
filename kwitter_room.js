const firebaseConfig = {
      apiKey: "AIzaSyCEhRNyElqlLG8DYJG0v-Ibjqhohpxvva4",
      authDomain: "kwitter-c93-71dee.firebaseapp.com",
      projectId: "kwitter-c93-71dee",
      storageBucket: "kwitter-c93-71dee.appspot.com",
      messagingSenderId: "636670213553",
      appId: "1:636670213553:web:d2b3b329b1d34dbe4b1190"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
