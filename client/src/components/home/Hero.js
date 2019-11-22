import React, { Component } from 'react'

export default class Hero extends Component {
    render() {
        return (
            <div className="hero">
                <div className="hero__container">
                    <div className="hero__topbar">
                        <img className="hero__topbar--img"/>
                        <h1 className="hero__topbar--about">ABOUT</h1>
                    </div>
                </div>
            </div>
        )
    }
}
