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
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

// //HeartRate
var chart1;
function updateChart1() {
  // Retrieve the number of values entered by the user
  var numValues1 = document.getElementById("num-values1").value;

  // Retrieve the specified number of values from the database
  var values1 = [];
  database
    .ref("Patient1Data/a/HeartBeat")
    .limitToLast(parseInt(numValues1))
    .once("value")
    .then(function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        values1.push(childSnapshot.val());
      });

      // Create a new chart using the Chart.js library
      var ctx1 = document.getElementById("myChart1").getContext("2d");
      let gradient1 = ctx1.createLinearGradient(0, 0, 0, 400);
      gradient1.addColorStop(0, "rgba(103,23,201,1)");
      gradient1.addColorStop(1, "rgba(201,22,84,0.1)");
      chart1 = new Chart(ctx1, {
        type: "line",
        data: {
          labels: Array.from(Array(values1.length).keys()), // Use the indices of the values as labels
          datasets: [
            {
              label: "Heart Rate",
              data: values1,
              backgroundColor: gradient1,
              borderColor: "#380046",
              borderWidth: 1,
              tension: 0.4,
            },
          ],
        },
        options: {
          scales: {
            xAxes: [
              {
                ticks: {
                  fontColor: "white",
                  fontSize: 10,
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  fontColor: "white",
                  fontSize: 10,
                },
              },
            ],
          },
        },
      });
    });
}

function createExcelFile1() {
  // Get the data in the chart
  var labels1 = chart1.data.labels;
  var data1 = chart1.data.datasets[0].data;

  // Create an array of objects with the data
  var dataArray1 = labels1.map((label, index) => {
    return {
      x: label,
      y: data1[index],
    };
  });

  // Create a workbook
  var workbook1 = XLSX.utils.book_new();

  // Add the data array to a worksheet
  var worksheet1 = XLSX.utils.json_to_sheet(dataArray1);
  XLSX.utils.book_append_sheet(workbook1, worksheet1, "Data");

  // Create an Excel file and download it
  XLSX.writeFile(workbook1, "data.xlsx");
}

//SpO2
var chart2;
function updateChart2() {
  // Retrieve the number of values entered by the user
  var numValues2 = document.getElementById("num-values2").value;

  // Retrieve the specified number of values from the database
  var values2 = [];
  database
    .ref("Patient1Data/b/SpO2")
    .limitToLast(parseInt(numValues2))
    .once("value")
    .then(function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        values2.push(childSnapshot.val());
      });

      // Create a new chart using the Chart.js library
      var ctx2 = document.getElementById("myChart2").getContext("2d");
      let gradient2 = ctx2.createLinearGradient(0, 0, 0, 400);
      gradient2.addColorStop(0, "rgba(38,139,14,1)");
      gradient2.addColorStop(1, "rgba(148,245,125,0.3)");
      chart2 = new Chart(ctx2, {
        type: "line",
        data: {
          labels: Array.from(Array(values2.length).keys()), // Use the indices of the values as labels
          datasets: [
            {
              label: "SpO2",
              data: values2,
              backgroundColor: gradient2,
              borderColor: "#066900",
              tension: 0.4,
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            xAxes: [
              {
                ticks: {
                  fontColor: "white",
                  fontSize: 10,
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  fontColor: "white",
                  fontSize: 10,
                },
              },
            ],
          },
        },
      });
    });
}

function createExcelFile2() {
  // Get the data in the chart
  var labels2 = chart2.data.labels;
  var data2 = chart2.data.datasets[0].data;

  // Create an array of objects with the data
  var dataArray2 = labels2.map((label, index) => {
    return {
      x: label,
      y: data2[index],
    };
  });

  // Create a workbook
  var workbook2 = XLSX.utils.book_new();

  // Add the data array to a worksheet
  var worksheet2 = XLSX.utils.json_to_sheet(dataArray2);
  XLSX.utils.book_append_sheet(workbook2, worksheet2, "Data");

  // Create an Excel file and download it
  XLSX.writeFile(workbook2, "data.xlsx");
}

//BodyTemperature
var chart3;
function updateChart3() {
  // Retrieve the number of values entered by the user
  var numValues3 = document.getElementById("num-values3").value;

  // Retrieve the specified number of values from the database
  var values3 = [];
  database
    .ref("Patient1Data/e/BodyTemperature")
    .limitToLast(parseInt(numValues3))
    .once("value")
    .then(function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        values3.push(childSnapshot.val());
      });

      // Create a new chart using the Chart.js library
      var ctx3 = document.getElementById("myChart3").getContext("2d");
      let gradient3 = ctx3.createLinearGradient(0, 0, 0, 400);
      gradient3.addColorStop(0, "rgba(181,61,0,1)");
      gradient3.addColorStop(1, "rgba(240,144,85,0.3)");
      chart3 = new Chart(ctx3, {
        type: "line",
        data: {
          labels: Array.from(Array(values3.length).keys()), // Use the indices of the values as labels
          datasets: [
            {
              label: "Body Temperature",
              data: values3,
              backgroundColor: gradient3,
              borderColor: "#743700",
              tension: 0.4,
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            xAxes: [
              {
                ticks: {
                  fontColor: "white",
                  fontSize: 10,
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  fontColor: "white",
                  fontSize: 10,
                },
              },
            ],
          },
        },
      });
    });
}

function createExcelFile3() {
  // Get the data in the chart
  var labels3 = chart3.data.labels;
  var data3 = chart3.data.datasets[0].data;

  // Create an array of objects with the data
  var dataArray3 = labels3.map((label, index) => {
    return {
      x: label,
      y: data3[index],
    };
  });

  // Create a workbook
  var workbook3 = XLSX.utils.book_new();

  // Add the data array to a worksheet
  var worksheet3 = XLSX.utils.json_to_sheet(dataArray3);
  XLSX.utils.book_append_sheet(workbook3, worksheet3, "Data");

  // Create an Excel file and download it
  XLSX.writeFile(workbook3, "data.xlsx");
}

//RoomHumidity
var chart4;
function updateChart4() {
  // Retrieve the number of values entered by the user
  var numValues4 = document.getElementById("num-values4").value;

  // Retrieve the specified number of values from the database
  var values4 = [];
  database
    .ref("Patient1Data/d/RoomHumidity")
    .limitToLast(parseInt(numValues4))
    .once("value")
    .then(function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        values4.push(childSnapshot.val());
      });

      // Create a new chart using the Chart.js library
      var ctx4 = document.getElementById("myChart4").getContext("2d");
      let gradient4 = ctx4.createLinearGradient(0, 0, 0, 400);
      gradient4.addColorStop(0, "rgba(40,130,173,1)");
      gradient4.addColorStop(1, "rgba(171,227,254,0.3)");
      chart4 = new Chart(ctx4, {
        type: "line",
        data: {
          labels: Array.from(Array(values4.length).keys()), // Use the indices of the values as labels
          datasets: [
            {
              label: "Room Humidity",
              data: values4,
              backgroundColor: gradient4,
              borderColor: "#00057C",
              tension: 0.4,
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            xAxes: [
              {
                ticks: {
                  fontColor: "white",
                  fontSize: 10,
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  fontColor: "white",
                  fontSize: 10,
                },
              },
            ],
          },
        },
      });
    });
}

function createExcelFile4() {
  // Get the data in the chart
  var labels4 = chart4.data.labels;
  var data4 = chart4.data.datasets[0].data;

  // Create an array of objects with the data
  var dataArray4 = labels4.map((label, index) => {
    return {
      x: label,
      y: data4[index],
    };
  });

  // Create a workbook
  var workbook4 = XLSX.utils.book_new();

  // Add the data array to a worksheet
  var worksheet4 = XLSX.utils.json_to_sheet(dataArray4);
  XLSX.utils.book_append_sheet(workbook4, worksheet4, "Data");

  // Create an Excel file and download it
  XLSX.writeFile(workbook4, "data.xlsx");
}

//RoomTemperature
var chart5;
function updateChart5() {
  // Retrieve the number of values entered by the user
  var numValues5 = document.getElementById("num-values5").value;

  // Retrieve the specified number of values from the database
  var values5 = [];
  database
    .ref("Patient1Data/c/RoomTemperature")
    .limitToLast(parseInt(numValues5))
    .once("value")
    .then(function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        values5.push(childSnapshot.val());
      });

      // Create a new chart using the Chart.js library
      var ctx5 = document.getElementById("myChart5").getContext("2d");
      let gradient5 = ctx5.createLinearGradient(0, 0, 0, 400);
      gradient5.addColorStop(0, "rgba(224,56,56,1)");
      gradient5.addColorStop(1, "rgba(251,152,152,0.3)");
      chart5 = new Chart(ctx5, {
        type: "line",
        data: {
          labels: Array.from(Array(values5.length).keys()), // Use the indices of the values as labels
          datasets: [
            {
              label: "Room Temperature",
              data: values5,
              backgroundColor: gradient5,
              borderColor: "#8A0101",
              tension: 0.4,
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            xAxes: [
              {
                ticks: {
                  fontColor: "white",
                  fontSize: 10,
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  fontColor: "white",
                  fontSize: 10,
                },
              },
            ],
          },
        },
      });
    });
}

function createExcelFile5() {
  // Get the data in the chart
  var labels5 = chart5.data.labels;
  var data5 = chart5.data.datasets[0].data;

  // Create an array of objects with the data
  var dataArray5 = labels5.map((label, index) => {
    return {
      x: label,
      y: data5[index],
    };
  });

  // Create a workbook
  var workbook5 = XLSX.utils.book_new();

  // Add the data array to a worksheet
  var worksheet5 = XLSX.utils.json_to_sheet(dataArray5);
  XLSX.utils.book_append_sheet(workbook5, worksheet5, "Data");

  // Create an Excel file and download it
  XLSX.writeFile(workbook5, "data.xlsx");
}
