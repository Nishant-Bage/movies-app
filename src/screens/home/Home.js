import React, { Component } from "react";
import "./Home.css";

//Component Imports
import Header from "../../common/header/Header";
import ImageList from "../../common/ImageList";
import ReleasedList from "../../common/ReleasedList";

//Data Imports
import { moviesData } from "../../common/moviesData";

//material UI Imports


export class Home extends Component {

    render () {
    return (
      <div className="home-container">
        <Header />
        <div className="upcoming-movies">
          <span>Upcoming Movies</span>
        </div>
        <ImageList moviesData={moviesData} />
        <div className="flex-container">
                <div className="left">
                    <ReleasedList moviesData={moviesData}/>
                </div>
          <div className="right"></div>
        </div>
      </div>
    );
  }
}

export default Home;
