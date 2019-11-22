import React, { Component } from "react";
import newdel from "../../assets/city-photo/newdel.jpg";
import noida from "../../assets/city-photo/noida.jpg";
import gurgaon from "../../assets/city-photo/gurgaon.jpg";

export default class Cities extends Component {
  render() {
    return (
      <div className="select-city">
        <h1 className="select-city__h1">Choose City</h1>
        <div className="img-container">
          <img className="city-img" src={newdel} alt="new delhi"></img>
          <img className="city-img" src={noida} alt="gurgaon"></img>
          <img className="city-img" src={gurgaon} alt="some city"></img>
        </div>
      </div>
    );
  }
}
