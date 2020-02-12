import React, { Component } from "react";
import "./FacilitiesSection.css";
import HeadingOne from "../Components/Texts/HeadingOne";
import BodyOne from "../Components/Texts/BodyOne";
import FacilitiesList from "./LocalContainers/FacilitiesList";

class FacilitiesSection extends Component {
  FacilitySectionTitle = {
    instanceID: "FacilitySectionTitle",
    title: "Enjoy all these Facilities"
  };

  FacilitySectionDescription = {
    instanceID: "FacilitySectionDescription",
    title: "Students are welcome to use these facilities on their own time"
  };

  FacilityListOne = {
    instanceID: "FacilityListOne",
    image: "FacilitiesOne.png",
    title:  <a href="https://vjcet.org/#/facilities/hostel" target="_blank" rel="noopener noreferrer"><font color="000000">Hostels</font></a>
  };

  FacilityListTwo = {
    instanceID: "FacilityListTwo",
    image: "FacilitiesTwo.png",
    title: <a href="https://vjcet.org/#/facilities/healthandfitness" target="_blank" rel="noopener noreferrer"><font color="000000">Fitness Center</font></a>
  };

  FacilityListThree = {
    instanceID: "FacilityListThree",
    image: "FacilitiesThree.svg",
    title: <a href="https://vjcet.org/#/facilities/ccc" target="_blank" rel="noopener noreferrer"><font color="000000">Networking and Internet facilities. 100 Mbps Wi-Fi Speeds</font></a>
  };

  FacilityListFour = {
    instanceID: "FacilityListFour",
    image: "FacilitiesFour.png",
    title: <a href="https://vjcet.org/#/facilities/campusamenities" target="_blank" rel="noopener noreferrer"><font color="000000">On-Campus Canteens, Cafeteria, ATMs, Store and Hospital</font></a>
  };

  render() {
    const { instanceID } = this.props.data;

    return (
      <div className="FacilitiesSection" id={instanceID}>
        <div className="FacilitiesSectionCard">
          <HeadingOne data={this.FacilitySectionTitle} />
          <BodyOne data={this.FacilitySectionDescription} />
          <FacilitiesList data={this.FacilityListOne} />
          <FacilitiesList data={this.FacilityListTwo} />
          <FacilitiesList data={this.FacilityListThree} />
          <FacilitiesList data={this.FacilityListFour} />
        </div>
      </div>
    );
  }
}

export default FacilitiesSection;
