import React, { Component } from 'react'
import Select from 'react-select'
import { Bar } from 'react-chartjs-2';


const customStyles = {
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? '#fff' : '#8d9fab',
        backgroundColor: state.isSelected ? '#1d3a4f' : '#1d3f57',
        padding: 20,
    }),
    container: (provided) => ({
        ...provided,
        width: '200px',
    }),
    menu: (provided) => ({
        ...provided,
        backgroundColor: '#1d3f57',
    }),
    control: (provided) => ({
        ...provided,
        backgroundColor: '#171f2a',
        border: 'transparent',
        color: "#fff !important",
    }),
    placeholder: (provided) => ({
        ...provided,
        color: "#fff !important"
    }),
    indicatorSeparator: () => ({
        display: 'none',
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return { ...provided, opacity, transition, color: "#fff" };
    }
}

const options = [
    { value: 'thisWeek', label: 'This Week' },
    { value: 'lastWeek', label: 'Last Week' },
    { value: 'thisMonth', label: 'This Month' },
    { value: 'lastMonth', label: 'Last Month' },
];

const data = {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: '#86FFEA',
            borderColor: '#86FFEA',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
        }
    ]
};

class Report extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: options[0],
            data: {
                thisWeek: [6, 5, 8, 11, 5, 4, 8, 11],
                lastWeek: [9, 7, 6, 6, 8, 7, 6, 11],
                thisMonth: [3, 10, 9, 9, 8, 6, 3, 7],
                lastMonth: [7, 10, 7, 7, 8, 9, 10, 11],
            },
            avg: {
                thisWeek: "6H 46M",
                lastWeek: "7H 20M",
                thisMonth: "8H 10M",
                lastMonth: "7H 38M"
            }
        };
    }

    setSelectedOption = (selectedOption) => this.setState({ selectedOption })

    render() {
        return (
            <>
                <div className="select-wrapper">
                    <Select
                        styles={customStyles}
                        value={this.state.selectedOption}
                        onChange={this.setSelectedOption}
                        options={options}
                        isSearchable={false}
                    />
                </div>
                <div>
                    <h2>Sleep duration</h2>
                    <Bar
                        legend={null}
                        data={{
                            ...data,
                            datasets: [{
                                ...data.datasets[0],
                                data: this.state.data[this.state.selectedOption.value]
                            }]
                        }}
                        width={100}
                        height={250}
                        options={{
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true,
                                        min: 0,
                                        max: 12
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
                    <p className="avg-title">Average</p>
                    <p className="avg-value">{this.state.avg[this.state.selectedOption.value]}</p>
                </div>
            </>
        )
    }
}

export default Report