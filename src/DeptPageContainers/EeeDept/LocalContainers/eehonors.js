import React, { Component } from "react";
import HeadingOne from "../../../Components/Texts/HeadingOne";
import Honors from "../../../Components/honors";
import "./honors.css";
class EeHonors extends Component {
  state = {};
  EeHonorsHeading = {
    instanceID: "EeHonorsHeading",
    title: "Honors of Electrical & Electronics Engineering"
  };
  EeHonors1 = {
    instanceID: "eehonors1",
    image: "Honors/eehonors1.JPG",
    width: "30%",
    name: "Jeswin Jose",
    content:
      "Secured First Rank in B.Tech Electrical & Electronics Engineering May 2017"
  };
  EeHonors2 = {
    instanceID: "eehonors2",
    image: "Honors/eehonors2.JPEG",
    width: "30%",
    name: "Devika K B",
    content:
      "Secured Second Rank in B.Tech Electrical & Electronics Engineering May 2010"
  };
  EeHonors3 = {
    instanceID: "eehonors3",
    image: "Honors/eehonors3.JPEG",
    width: "30%",
    name: "Breeza Paoulose",
    content:
      "Secured Second Rank in B.Tech Electrical & Electronics Engineering May 2009"
  };
  EeHonors4 = {
    instanceID: "eehonors4",
    image: "Honors/eehonors4.JPEG",
    width: "30%",
    name: "Roseline Baby",
    content:
      "Secured Second Rank in B.Tech Electrical & Electronics Engineering May 2008"
  };
  EeHonors5 = {
    instanceID: "eehonors5",
    image: "Honors/eehonors5.JPEG",
    width: "30%",
    name: "Ashna Joseph",
    content:
      "Secured Third Rank in B.Tech Electrical & Electronics Engineering May 2008"
  };
  EeHonors6 = {
    instanceID: "eehonors6",
    image: "Honors/eehonors6.jpg",
    width: "30%",
    name: "Reshma Sajeev",
    content:
      "Secured Seventh Rank in B.Tech Electrical & Electronics Engineering May 2018"
  };

  render() {
    return (
      <div className="honors">
        <HeadingOne data={this.EeHonorsHeading} />
        <div className="photos">
        <div>
            <Honors data={this.EeHonors6} />
          </div>
          <div>
            <Honors data={this.EeHonors1} />
          </div>
          <div>
            <Honors data={this.EeHonors2} />
          </div>
          <div>
            <Honors data={this.EeHonors3} />
          </div>
          <div>
            <Honors data={this.EeHonors4} />
          </div>
          <div>
            <Honors data={this.EeHonors5} />
          </div>
        </div>
      </div>
    );
  }
}

export default EeHonors;
