import React, { Component } from "react";
import aditya_boat from "../../photos/aditya_boat.jpg";
import { Zoom } from "react-reveal";

class AboutContent extends Component {
  state = {};
  render() {
    return (
      <div id="mainAboutWrapper">
        <div id="mainAboutContent">
          <Zoom>
            <img src={aditya_boat} id="mainAboutImage" alt="aditya random" />
            <div id="mainAboutTextWrapper">
              <div className="mainHeader" id="mainAboutHeader">
                About
              </div>
              <div className="mainText" id="mainAboutText">
                Hailing from Orlando, Florida, Aditya Mahendru raps about the
                bullshit that goes on in his life, and the world.
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default AboutContent;
