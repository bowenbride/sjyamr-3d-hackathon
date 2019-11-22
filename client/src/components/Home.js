import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Hero from "./home/Hero";
import Cities from "./home/Cities";
import Chart from "./Chart";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Cities />
        <Chart />
      </div>
    );
  }
}
