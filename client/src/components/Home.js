import React, { Component } from "react";
import Hero from "./home/Hero";
import Chart from "./Chart";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Hero />
        <div className="home__destination">
          <h1 className="home__destination--header">Select your destination</h1>
          <div className="home__destination--item"></div>
        </div>
        <div className="home__cuisine">
          <h1 className="home__cuisine--header">CHOOSE A CUISINE TYPE</h1>
          <div className="home__cuisine--selector"></div>
        </div>
        <div className="home__result">
          <h1 className="home__result--header">RESTAURANTS AVAILABLE WITH</h1>
          <div className="home__result--return"></div>
        </div>
      </div>
    );
  }
}
