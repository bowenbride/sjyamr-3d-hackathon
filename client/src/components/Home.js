import React, { Component } from 'react'
import Hero from './home/Hero'
import Chart from './Chart'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Hero />
                <Chart />
            </div>
        )
    }
}
