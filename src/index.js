// document.addEventListener("DOMContentLoaded", function (event) {
    let elem = document.getElementById('myChart');
    let ctx = elem.getContext('2d');
    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Artichoke", "Arugula", "Basil", "Beans", "Beets", "Bokchoy", "Broccoli", "Brussel sprout", "Cabbage", "Carrots", "Cauliflower", "Celery", "Chard", "Cilantro", "Corn", "Cucumber", "Eggplant", "Fava bean", "Garlic", "Kale", "Leek", "Lettuce", "Melon", "Mustard", "Okra", "Onion", "Parsley", "Peas", "Pepper", "Potato", "Pumpkin", "Radish", "Spinach", "Squash", "Watermelon", "Tomato", "Turnip", "Zucchini"],
            datasets: [{
                label: 'seed depth',
                data: [0.5, 0.5, 0.25, 1, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.25, 0.25, 0.5, 2, 1, 2, 1, 3, 0.5, 0.25, 0.25, 1, 0.5, 0.5, 0.5, 1, 1, 0.25, 6, 1, 1, 0.5, 1, 1, 0.5, 0.5, 1],
                backgroundColor: [
                    'rgba(255, 26, 104, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(0, 0, 0, 0.2)',
                    'rgba(200, 25, 102, 0.2)',
                    'rgba(255, 26, 104, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(0, 0, 0, 0.2)',
                    'rgba(200, 25, 102, 0.2)',
                    'rgba(255, 26, 104, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(0, 0, 0, 0.2)',
                    'rgba(200, 25, 102, 0.2)',
                    'rgba(255, 26, 104, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(0, 0, 0, 0.2)',
                    'rgba(200, 25, 102, 0.2)',
                    'rgba(255, 26, 104, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(0, 0, 0, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 26, 104, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 2)',
                    'rgba(255, 26, 104, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 2)',
                    'rgba(255, 26, 104, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 2)',
                    'rgba(255, 26, 104, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 2)',
                    'rgba(255, 26, 104, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(0, 0, 0, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            maintainAspectRatio: false,
            indexAxis: 'y',
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }

    });

const winterCrops = ["Bokchoy", "Broccoli", "Brussel sprout", "Cabbage", "Garlic", "Kale", "Mustard", "Onion", "Parsley", "Peas", "Potato", "Radish"]
const springCrops = ["Arugula", "Basil", "Beans", "Beets", "Bokchoy", "Broccoli", "Brussel Sprout", "Cabbage", "Carrots", "Cauliflower", "Celery", "Chard", "Cilantro", "Cucumber", "Eggplant", "Fava bean", "Lettuce", "Melon", "Mustard", "Parsley", "Peas", "Peppers", "Potato", "Pumpkin", "Radish", "Spinach", "Squash", "Watermelon", "Tomatoes", "Turnip", "Zucchini"]
const fallCrops = ["Artichoke", "Beets", "Bokchoy", "Broccoli", "Brussel sprout", "Cabbage", "Carrots", "Cauliflower", "Chard", "Cilantro", "Fava bean", "Leek", "Lettuce", "Mustard", "Onion", "Radish", "Spinach", "Turnip"]
const summerCrops =  ["Beans", "Corn", "Cucumber", "Eggplant", "Leek", "Melon", "Okra", "Pepper", "Pumpkin", "Squash", "Watermelon", "Tomato", "Zucchini"]
    function filterChart(array){
            let filterLabels = [];
        let length = myChart.data.labels.length;
        for (let i = 0; i < length; i++){
            if (array.includes(myChart.data.labels[i])){
                filterLabels.push(myChart.data.labels[i])
            }
        }
        let filterData = [];
        let filterColors = [];
        let filterBorder = [];

        for (let j = 0; j < filterLabels.length; j++){
            let index = myChart.data.labels.indexOf(filterLabels[j]);
            filterData.push(myChart.data.datasets[0].data[index])
            filterColors.push(myChart.data.datasets[0].backgroundColor[index]);
            filterBorder.push(myChart.data.datasets[0].borderColor[index]);
        }
        myChart.data.datasets[0].data = filterData;
        myChart.data.labels = filterLabels;
        myChart.data.datasets[0].backgroundColor = filterColors;
        myChart.data.datasets[0].borderColor = filterBorder;
        myChart.update();
        }

// });


