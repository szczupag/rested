import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';
import Ad from './Ad'
import spanko from '../assets/spanko.jpg'

const datasets = [
    {
        labels: ['24', '1', '2', '3', '4', '5', '6', '7'],
        datasets: [
            {
                label: 'Sleep depth',
                backgroundColor: 'rgba(134, 255, 234, 0.2)',
                borderColor: 'red',
                borderWidth: 1,
                data: [1, 2, 2, 3, 4, 3, 2, 1],
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
            }
        ],
        data_text: {
            className: "sleep-summary-bad",
            text: "BAD"
        }
    }, {
        labels: ['15:45', '16:00', '16:15', '16:30', '16:45'],
        datasets: [
            {
                label: 'Sleep depth',
                backgroundColor: 'rgba(134, 255, 234, 0.2)',
                borderColor: 'greenyellow',
                borderWidth: 1,
                data: [8, 10, 8, 9, 9],
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
            }
        ], data_text: {
            className: "sleep-summary-good",
            text: "EXCELLENT"
        }
    }
];


class SleepEnded extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h2>Sleep depth</h2>
                <div className="chart-wrapper">
                    <Line
                        legend={null}
                        data={datasets[this.props.n]}
                        width={300}
                        height={250}
                        options={{
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true,
                                        min: 0,
                                        max: 10
                                    },
                                    gridLines: {
                                        display: false,
                                    },
                                }],
                                xAxes: [{
                                    gridLines: {
                                        display: false,
                                    },
                                }],
                            },
                            maintainAspectRatio: false
                        }}
                    />
                </div>
                <div className="avg-wrapper">
                    <p className="avg-title">SLEEP RATING</p>
                    <p className={datasets[this.props.n].data_text.className}>{datasets[this.props.n].data_text.text}</p>
                </div>
                {this.props.children}
                <Ad
                    img={spanko}
                    title="PODUSZKA SPANKO"
                    description="Nowe wzory już dostępne"
                />
            </>
        )
    }
}

export default SleepEnded;