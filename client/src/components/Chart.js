import React, { Component } from "react";
import  { Bar, Line, Pie } from "react-chartjs-2"

export default class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['North Indian',
                         'Chinese',
                         'Fast Food',
                         'Mughlai',
                         'Bakery',
                         'South Indian',
                         'Street Food',
                         'Desserts',
                         'Italian',
                         'Continental',
                         'Cafe',
                         'Mithai',
                         'Pizza',
                         'Ice Cream',
                         'Beverages',
                         'American',
                         'Thai',
                         'Biryani',
                         'Asian',
                         'Burger',
                         'Healthy Food',
                         'Raw Meats',
                         'European',
                         'Finger Food',
                         'Mexican',
                         'Salad',
                         'Japanese',
                         'Lebanese',
                         'Mediterranean',
                         'Seafood',
                         'Tibetan',
                         'Tea'],
                datasets:[{
                    label: 'Restaurants',
                    data: [
                        2425,
                        1638,
                        1304,
                        628,
                        465,
                        411,
                        411,
                        383,
                        376,
                        373,
                        325,
                        282,
                        197,
                        148,
                        123,
                        116,
                        112,
                        99,
                        94,
                        90,
                        82,
                        79,
                        67,
                        67,
                        51,
                        49,
                        47,
                        39,
                        38,
                        38,
                        35,
                        18
                    ],
                    backgroundColor: [
                        'rgba(247 221 221 1)',
                        'rgba(247 176 176 1)',
                        'rgba(246 110 110 1)',
                        'rgba(250 66 66 1)',
                        'rgba(194 25 25 1)',
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


// Cities, Cuisines by Most Ratings (Optional:: Toggle for Lowest ratings)