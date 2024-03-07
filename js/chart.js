'use strict';


let state = new AppState();
state.loadItems(); // Load items from localStorage

let canvasElem = document.getElementById('chart');

function renderChart() {
// Prepare the data for Chart.js
let labels = [];
let timesShownData = [];
let timesClickedData = [];

for (let i = 0; i < state.allProducts.length; i++) {
    labels.push(state.allProducts[i].name);
    timesShownData.push(state.allProducts[i].timesShown);
    timesClickedData.push(state.allProducts[i].timesClicked);
}

let data = {
    labels: labels,
    datasets: [{
      label: 'Times Shown',
      data: timesShownData,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }, {
      label: 'Times Clicked',
      data: timesClickedData,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
};

// Configuration object for Chart.js
let config = {
    type: 'bar', // Type of chart
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
};

// Instantiate a new Chart
new Chart(canvasElem, config);
}

renderChart();