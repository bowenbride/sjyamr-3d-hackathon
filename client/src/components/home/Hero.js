import React, { Component } from "react";
import Nav from "./Nav";

export default class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="hero__container">
            <Nav />
          <h1 className="hero__slogan">
            Bringing you closer to local experiences
          </h1>
        </div>
      </div>
    );
  }
}
