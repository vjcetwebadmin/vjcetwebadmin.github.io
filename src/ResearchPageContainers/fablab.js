import React, { Component } from "react";
import HeadingOne from "../Components/Texts/HeadingOne"; 
import Bodythree from "../Components/Texts/BodyThree";

class fablab extends Component {
  state = {};
  
  FablabHeading = {
    instanceID: "FablabHeading",
    title:       "FABRICATION LAB"
  };
  FablabContent1 = {
    instanceID: "FablabContent1",
    title:
      "A Fabrication Laboratory (FabLab) provides a scientific prototyping platform for novelty and invention. Fab lab also helps in providing stimulus for local entrepreneurship and serves as a platform for learning and innovation."
  };
  FablabContent2 = {
    instanceID: "FablabContent2",
    title:
      "It is a miniature scale workshop offering digital fabrication which enables the clients to craft smart devices for themselves which can be tailored to local or personal needs. The FabLab also becomes a channel for linking to a global community of technologists, researchers and innovators."
  };
  FablabContent3 = {
    instanceID: "FablabContent3",
    title:
      "The Fab Lab established at VJCET mainly comprises of the following inventories."
  };
  

  render() {
    return (
      <div className="Program" id="program">
         <HeadingOne data={this.FablabHeading} />
        <Bodythree data={this.FablabContent1} />
        <Bodythree data={this.FablabContent2} />
        <Bodythree data={this.FablabContent3} />
        <ul>
          <p align="left"><li>Laser Cutter</li></p>
          <p align="left"> <li>Shopbot</li></p>
          <p align="left"><li>3D printers: Ultimaker 2+</li></p>
          <p align="left"><li>Vinyl Cutter</li></p>
          <p align="left"><li>Electronic Components and Tools</li></p>

        </ul>
      </div>
    );
  }
}

export default fablab;
