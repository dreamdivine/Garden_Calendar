const allCrops = ["Artichoke", "Arugula", "Asparagus", "Basil", "Beans", "Beets", "Bokchoy", "Broccoli", "Brussel sprout", "Cabbage", "Carrots", "Cauliflower", "Celery", "Chard", "Cilantro", "Corn", "Cucumber", "Eggplant", "Fava bean", "Garlic", "Kale", "Leek", "Lettuce", "Melon", "Mustard", "Okra", "Onion", "Parsley", "Peas", "Pepper", "Potato", "Pumpkin", "Radish", "Spinach", "Squash", "Watermelon", "Tomato", "Turnip", "Zucchini"]
const allDepths = [0.5, 0.5, 0.5, 0.25, 1, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.25, 0.25, 0.5, 2, 1, 2, 1, 3, 0.5, 0.25, 0.25, 1, 0.5, 0.5, 0.5, 1, 1, 0.25, 6, 1, 1, 0.5, 1, 1, 0.5, 0.5, 1]
const winterCrops = ["Bokchoy", "Broccoli", "Brussel sprout", "Cabbage", "Garlic", "Kale", "Mustard", "Onion", "Parsley", "Peas", "Potato", "Radish"]
const springCrops = ["Arugula", "Asparagus", "Basil", "Beans", "Beets", "Bokchoy", "Broccoli", "Brussel Sprout", "Cabbage", "Carrots", "Cauliflower", "Celery", "Chard", "Cilantro", "Cucumber", "Eggplant", "Fava bean", "Lettuce", "Melon", "Mustard", "Parsley", "Peas", "Peppers", "Potato", "Pumpkin", "Radish", "Spinach", "Squash", "Watermelon", "Tomatoes", "Turnip", "Zucchini"]
const fallCrops = ["Artichoke", "Asparagus", "Beets", "Bokchoy", "Broccoli", "Brussel sprout", "Cabbage", "Carrots", "Cauliflower", "Chard", "Cilantro", "Fava bean", "Leek", "Lettuce", "Mustard", "Onion", "Radish", "Spinach", "Turnip"]
const summerCrops = ["Beans", "Corn", "Cucumber", "Eggplant", "Leek", "Melon", "Okra", "Pepper", "Pumpkin", "Squash", "Watermelon", "Tomato", "Zucchini"]
const color = [
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
]

const border = [
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
]

const plantSpacing = [48, 4, 6, 12, 8, 4, 7, 20, 30, 24, 4, 24, 12, 18, 8, 10, 48, 24, 6, 8, 18, 6, 12, 48, 8, 24, 6, 5, 6, 18, 15, 
     60, 3, 4, 48, 60, 24, 6, 48]

const rowSpacing = [72, 12, 18, 20, 24, 12, 7, 30, 36, 36, 24, 36, 36, 24, 10, 30, 36, 24, 36, 12, 24, 16, 15, 48, 12, 36, 24, 12, 21, 21, 36, 60, 8, 12, 48, 60, 36, 15, 48]


let elem = document.getElementById('myChart');
let ctx = elem.getContext('2d');
let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: allCrops,
            datasets: [{
                label: 'inches',
                data: allDepths,
                backgroundColor: color,
                borderColor: border,
                borderWidth: 2,

                
            }]
        },
        options: {
            maintainAspectRatio: false,
            indexAxis: 'y',
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        font: {
                            size: 11
                        },
                        autoSkip: false
                    }
                }
            }
        }

    });

    function filterChart(array){
        let filterLabels = [];

        for (let i = 0; i < allCrops.length; i++){
            if (array.includes(allCrops[i])){
                filterLabels.push(allCrops[i])
            }
        }
        let filterData = [];
        let filterColors = [];
        let filterBorder = [];

        for (let j = 0; j < filterLabels.length; j++){
            const result = allCrops.indexOf(filterLabels[j]);

            const dataresult = allDepths[result];
            const colorsresult = color[result];
            const borderresult = border[result];

            filterData.push(dataresult);
            filterColors.push(colorsresult);
            filterBorder.push(borderresult);
        }

        myChart.data.datasets[0].data = filterData;
        myChart.data.labels = filterLabels;
        myChart.data.datasets[0].backgroundColor = filterColors;
        myChart.data.datasets[0].borderColor = filterBorder;
        myChart.update();
        }

        function filterSpacing(array){

            let filterLabels = [];

            for (let i = 0; i < allCrops.length; i++) {
                if (array.includes(allCrops[i])) {
                    filterLabels.push(allCrops[i])
                }
            }
            let filterData = [];
            let filterColors = [];
            let filterBorder = [];

            for (let j = 0; j < filterLabels.length; j++) {
                const result = allCrops.indexOf(filterLabels[j]);

                const dataresult = plantSpacing[result];
                const colorsresult = color[result];
                const borderresult = border[result];

                filterData.push(dataresult);
                filterColors.push(colorsresult);
                filterBorder.push(borderresult);
            }

            myChart.data.datasets[0].data = filterData;
            myChart.data.labels = filterLabels;
            myChart.data.datasets[0].backgroundColor = filterColors;
            myChart.data.datasets[0].borderColor = filterBorder;
            myChart.update();

        }

function filterRow(array) {

    let filterLabels = [];

    for (let i = 0; i < allCrops.length; i++) {
        if (array.includes(allCrops[i])) {
            filterLabels.push(allCrops[i])
        }
    }
    let filterData = [];
    let filterColors = [];
    let filterBorder = [];

    for (let j = 0; j < filterLabels.length; j++) {
        const result = allCrops.indexOf(filterLabels[j]);

        const dataresult = rowSpacing[result];
        const colorsresult = color[result];
        const borderresult = border[result];

        filterData.push(dataresult);
        filterColors.push(colorsresult);
        filterBorder.push(borderresult);
    }

    myChart.data.datasets[0].data = filterData;
    myChart.data.labels = filterLabels;
    myChart.data.datasets[0].backgroundColor = filterColors;
    myChart.data.datasets[0].borderColor = filterBorder;
    myChart.update();
}









