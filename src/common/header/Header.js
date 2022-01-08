import React, { Component } from 'react';
import "./Header.css";
import logo from "../../assets/logo.svg";


export class Header extends Component {
    render() {
        return (
            <div className="header-container" >
                <div className="logo-container">
                    <img height="35px" src={logo} alt="logo" />
                </div>
            </div>
        )
    }
}

export default Header;
