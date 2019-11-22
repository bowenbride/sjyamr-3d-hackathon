import React, { Component } from "react";
import  { Bar, Line, Pie } from "react-chartjs-2"

export default class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['City1', 'City2', 'City3', 'SamCity', 'JenSadsville'],
                datasets: [{
                    label: 'Population',
                    data: [
                        873852,
                        843925,
                        584226,
                        691337,
                        111111,
                    ],
                    backgroundColor: [
                        'rgba(255 249 120 0.6)',
                        'rgba(155 49 220 0.6)',
                        'rgba(55 149 20 0.6)',
                        'rgba(144 89 28 0.6)',
                        'rgba(255 249 120 0.6)',
                    ]
                }]
            }
        }
    }
  render() {
    return (
      <div className="chart__wrap">
       <Bar data={this.state.chartData}
       options={{maintainAspectRatio: false}}
       />
      </div>
    );
  }
}

// Three cities, most popular cuisine types, from there we'll filter
// Through highest ratings, most reviews
