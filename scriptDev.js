const ctx= document.querySelector('#myChart').getContext("2d");

let delayed; 

//gradient fill
let gradient = ctx.createLinearGradient(0,0,0,400)
gradient.addColorStop(0, 'rgba(58,123,213,1)');
gradient.addColorStop(1, "rgba(0,210,255, 0.3)")

//labels x or/and y
const labels = [
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020'
];

const data = {
    labels,
    datasets: [{
        data: [
            211,323,165,350,420,370,500,375,415,
        ],
        label: "Minecrafts Sales",
        fill: true,
        backgroundColor: gradient,
        borderColor: "#fff",
        pointBackgroundColor:"rgba(189,195,199)",
        //set up the shapes og the chart (1 is roundish, 0is straight)
        tension:0.25,
    }]
}

const config = {
    type: 'line',
    data: data,
    options: {
        //set up period circle size
        radius:5,
        //set up points hover dont need to be on it but near its ok
        hitRadius: 30,
        //increase the size of the point on hover
        hoverRadius:12,
        //follow his parent
        responsive: true,
        //animation delay in the documentation
        animation: {
            onComplete: () => {
                delayed = true;
            },
            delay: (context) => {
                let delay = 0;
                if(context.type==="data" && context.mode === "default" && !delayed) {
                    delay = context.dataIndex * 300 + context.datasetIndex * 100;
                }
                return delay
            },
        },
        scales:{
            y:{
                ticks:{
                    //allow to add description at y ticks, for these example -> $200m
                    callback: function (value){
                        return "$" + value + "m";
                    }
                }
            }
        }
    }
}

const myChart = new Chart(ctx, config)