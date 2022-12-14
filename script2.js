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

const refs = ["a", "b", "c", "d", "e"];

refs.forEach(function (ref) {
  var firebaseRef = firebase.database().ref(`Patient1/${ref}`);

  firebaseRef.on("value", function (snapshot) {
    snapshot.forEach(function (element) {
      console.log(element.val());
      var elementValueElement = document.getElementById(ref);
      elementValueElement.innerHTML = element.val();
    });
  });
});
