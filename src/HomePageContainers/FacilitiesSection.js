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
    title: "Hostels"
  };

  FacilityListTwo = {
    instanceID: "FacilityListTwo",
    image: "FacilitiesTwo.png",
    title: "Fitness Center"
  };

  FacilityListThree = {
    instanceID: "FacilityListThree",
    image: "FacilitiesThree.svg",
    title: "Networking and Internet facilities. 100 Mbps Wi-Fi Speeds."
  };

  FacilityListFour = {
    instanceID: "FacilityListFour",
    image: "FacilitiesFour.png",
    title: "On-Campus Canteens, Cafeteria, ATMs, Store and Hospital"
  };

  render() {
    const { instanceID } = this.props.data;

    return (
      <div className="FacilitiesSection" id={instanceID}>
        <div className="FacilitiesSectionCard">
          <HeadingOne data={this.FacilitySectionTitle} />
          <BodyOne data={this.FacilitySectionDescription} />
          <a href="https://vjcet.org/#/facilities/hostel" target="_blank" rel="noopener noreferrer"><font color="FFFFF" size="4"><FacilitiesList data={this.FacilityListOne} /></font></a>
          <a href="https://vjcet.org/#/facilities/healthandfitness" target="_blank" rel="noopener noreferrer"><font color="FFFFF" size="4"><FacilitiesList data={this.FacilityListTwo} /></font></a>
          <a href="https://vjcet.org/#/facilities/ccc" target="_blank" rel="noopener noreferrer"><font color="FFFFF" size="4"><FacilitiesList data={this.FacilityListThree} /></font></a>
          <a href="https://vjcet.org/#/facilities/campusamenities" target="_blank" rel="noopener noreferrer"><font color="FFFFF" size="4"><FacilitiesList data={this.FacilityListFour} /></font></a>
        </div>
      </div>
    );
  }
}

export default FacilitiesSection;
