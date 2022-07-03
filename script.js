
const barCanvas = document.getElementById("barCanvas");

//1er paramètre l'objet en question sur lequel on veut afficher le graphique
//2eme paramètre la configuration
const barChart = new Chart(barCanvas,{
    type:"bar",
    data: {
        labels: ["beijing", "Tokyo", "Seoul", "Hong Kong"],
        datasets: [{
            data:[240,120,140,130],
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(54, 162, 205)',
            ],
        }]
    },
    //modifications des axes
    options: {
        scales: {
            y:{
                //taille max de y
                suggestedMax: 500,
                //modification axe y (siez, padding...)
                ticks: {
                    font:{
                        size: 20
                    }
                }
            },
            x:{
                ticks: {
                    font:{
                        size: 25
                    }
                }
            }

        }
    }
})

const pieCanvas = document.getElementById("barCanvas2");
const pieChart = new Chart(pieCanvas,{
    type:"pie",
    data: {
        //labels = titre du documents avec les labels un logo avec couleur + nom correspondant
        labels: ["beijing", "Tokyo", "Seoul"],
        datasets: [{
            data:[300,150,100],
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)'
            ],
            //décalage du fromage au hover
            hoverOffset: 40
        }]
    },
})

const lineCanvas = document.getElementById("barCanvas3");
const lineChart = new Chart(lineCanvas, {
    type:'line',
    data: {
        labels: ["2019","2020","2021"],
        datasets: [{
            label: 'Kilograms',
            data:[75,85,80],
            //remplissage du graph ou non  fill:false
            fill: true,
            backgroundColor: [
                'rgba(54, 162, 235)'
            ],
            tension: 0.1
        }]
    },
    options: {
        elements:{
            point:{
                pointBorderColor:'rgba(0,0,0)'
            }
        },
        scales: {
            y:{
                ticks: {
                    color:'rgba(0,0,0)'
                },
                suggestedMin: 50,
                suggestedMax:100
            },
            x:{
                ticks: {
                    color:'rgba(0,0,0)'
                }
            }
        }
    }
})