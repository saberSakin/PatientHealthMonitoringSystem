// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD4lgJ2n148LHJnZ_Kvu5MBq5a9VqV2bfM",
  authDomain: "iot-patient-health-monit-d9332.firebaseapp.com",
  databaseURL:
    "https://iot-patient-health-monit-d9332-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "iot-patient-health-monit-d9332",
  storageBucket: "iot-patient-health-monit-d9332.appspot.com",
  messagingSenderId: "176711764142",
  appId: "1:176711764142:web:545b9d6e9364943290453f",
  measurementId: "G-DD5HYPHN0K",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var firebaseRef = firebase.database().ref().child("login");

firebaseRef.once("value").then(function (snapshot) {
  var loginInfo = snapshot.val();
  document.getElementById("login").addEventListener("click", function () {
    var username = document.getElementById("email");
    var password = document.getElementById("pass");
    if (
      username.value == loginInfo.username &&
      password.value == loginInfo.password
    ) {
      location.replace("index.html");
    } else if (username.value != loginInfo.username) {
      username.style.borderColor = "red";
    } else if (password.value != loginInfo.password) {
      password.style.borderColor = "red";
    }
  });
});

document.getElementById("pass").addEventListener("input", function () {
  document.getElementById("pass").style.borderColor = "#ccc";
});
document.getElementById("username").addEventListener("input", function () {
  document.getElementById("username").style.borderColor = "#ccc";
});
