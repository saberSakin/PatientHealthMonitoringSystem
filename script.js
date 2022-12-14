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

var firebaseRef1 = firebase.database().ref("Patient1/a");

firebaseRef1.on("value", function (snapshot) {
  snapshot.forEach(function (element) {
    console.log(element.val());
    var elementValueElement = document.getElementById("a");
    elementValueElement.innerHTML = element.val();
  });
});

var firebaseRef2 = firebase.database().ref("Patient1/b");
firebaseRef2.on("value", function (snapshot) {
  snapshot.forEach(function (element) {
    console.log(element.val());
    var elementValueElement = document.getElementById("b");
    elementValueElement.innerHTML = element.val();
  });
});

var firebaseRef3 = firebase.database().ref("Patient1/c");
firebaseRef3.on("value", function (snapshot) {
  snapshot.forEach(function (element) {
    console.log(element.val());
    var elementValueElement = document.getElementById("c");
    elementValueElement.innerHTML = element.val();
  });
});

var firebaseRef4 = firebase.database().ref("Patient1/d");
firebaseRef4.on("value", function (snapshot) {
  snapshot.forEach(function (element) {
    console.log(element.val());
    var elementValueElement = document.getElementById("d");
    elementValueElement.innerHTML = element.val();
  });
});

var firebaseRef5 = firebase.database().ref("Patient1/e");
firebaseRef5.on("value", function (snapshot) {
  snapshot.forEach(function (element) {
    console.log(element.val());
    var elementValueElement = document.getElementById("e");
    elementValueElement.innerHTML = element.val();
  });
});
