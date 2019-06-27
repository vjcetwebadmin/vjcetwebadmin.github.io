import React, { Component } from "react";
import HeadingOne from "../../../Components/Texts/HeadingOne";
import Honors from "../../../Components/honors";
import "./honors.css";
class MeHonors extends Component {
  state = {};
  MeHonorsHeading = {
    instanceID: "MeHonorsHeading",
    title: "Honors of Mechanical Engineering"
  };
  MeHonors1 = {
    instanceID: "mehonors1",
    image: "Honors/mehonors1.jpg",
    width: "30%",
    name: "Deepu P",
    content: "Secured 1st Rank in B.Tech Mechanical Engineering May 2006"
  };
  MeHonors2 = {
    instanceID: "mehonors2",
    image: "Honors/mehonors2.JPEG",
    width: "30%",
    name: "Ms. Anju Joy",
    content: "Secured 2nd Rank in M.Tech May 2013"
  };
  MeHonors3 = {
    instanceID: "mehonors3",
    image: "Honors/mehonors3.JPEG",
    width: "30%",
    name: "Ms. Shari S Nair",
    content: "Secured 3rd Rank in M.Tech May 2013"
  };
  MeHonors4 = {
    instanceID: "mehonors4",
    image: "Honors/mehonors4.jpg",
    width: "30%",
    name: "Jyothin Mohan",
    content: "Secured 7th Rank in B.Tech Mechanical Engineering May 2018"
  };
  render() {
    return (
      <div className="honors">
        <HeadingOne data={this.MeHonorsHeading} />
        <div className="photos">
          <div>
          <Honors data={this.MeHonors4} />
          </div>
          <div>
            <Honors data={this.MeHonors2} />
          </div>
          <div>
            <Honors data={this.MeHonors3} />
          </div>
          <div>
            <Honors data={this.MeHonors1} />
          </div>
        </div>
      </div>
    );
  }
}

export default MeHonors;
