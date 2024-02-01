// const Mychart = document.getElementById('chart')

// const data = {
//     labels: ['jan' , 'feb' , 'march' , 'april' , 'may' , 'june' , 'july' , 'aug'],
//     datasets: [{
//         label: 'My age',
//         data: [65, 59, 80, 81, 56, 55, 40 , 10],
//         fill: false,
//         borderColor: 'rgb(75, 192, 192)',
//         tension: 0.1
//     }]
// }

// const config = {
//     type: 'line',
//     data: data,
// }

// const linechart = new Chart(Mychart,config);

// linechart.data.labels.push('sep');
// linechart.data.datasets[0].data.push(99);
// linechart.update();

const ctx = document.getElementById('chart').getContext('2d');

 // Initial data
 const initialData = {
    labels: [],
    datasets: [{
        label: 'Value',
        data: [],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        fill: false,
    }],
};

// Chart configuration
const chartConfig = {
    type: 'line',
    data: initialData,
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                title: {
                    display: true,
                    text: 'Time',
                },
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Value',
                },
            },
        },
        animation: false,
    },
};

let chart = new Chart(ctx, chartConfig);

function  addData() {
    const newData = Math.random() * 100;
    chart.data.labels.push(chart.data.labels.length);
    chart.data.datasets[0].data.push(newData);
    chart.update();
}

setInterval(addData, 1000);