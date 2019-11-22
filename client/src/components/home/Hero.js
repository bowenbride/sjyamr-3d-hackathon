import React, { Component } from "react";

export default class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="hero__container">
          <div className="hero__topbar">
            <div className="hero__avatar">
              <img className="hero__avatar--img" />
            </div>
            <ul className="hero__topbar--list">
              <li className="hero__topbar--item">About Us</li>
              <li className="hero__topbar--item">Contact</li>
              <li className="hero__topbar--item">My Account</li>
            </ul>
          </div>
          <h1 className="hero__header">
            Bringing you closer to local experiences
          </h1>
        </div>
      </div>
    );
  }
}
