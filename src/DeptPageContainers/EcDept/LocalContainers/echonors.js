import React, { Component } from "react";
import HeadingOne from "../../../Components/Texts/HeadingOne";
import Honors from "../../../Components/honors";
import "./honors.css";
class EcHonors extends Component {
  state = {};
  EcHonorsHeading = {
    instanceID: "EcHonorsHeading",
    title: "Honors of Electronics & Communication Engineering"
  };
  EcHonors1 = {
    instanceID: "echonors1",
    image: "echonors1.JPEG",
    width: "30%",
    name: "Meera M Nair",
    content: "Secured First Rank in M.Tech VLSI in May 2011"
  };
  EcHonors2 = {
    instanceID: "echonors2",
    image: "echonors2.JPEG",
    width: "30%",
    name: "Jayaprasad K V",
    content:
      "Secured First Rank in B.Tech Electronics and Communication Engineering in May 2012"
  };
  EcHonors3 = {
    instanceID: "echonors3",
    image: "echonors3.jpg",
    width: "30%",
    name: "Gayathri Anil",
    content:
      "Secured First Rank in B.Tech Electronics and Communication Engineering in May 2012"
  };
  EcHonors4 = {
    instanceID: "echonors4",
    image: "echonors4.jpg",
    width: "30%",
    name: "Haripriya P",
    content: "Secured First Rank in M.Tech VLSI in May 2013"
  };
  EcHonors5 = {
    instanceID: "echonors5",
    image: "echonors5.jpg",
    width: "30%",
    name: "Seena V P",
    content: "Secured Third Rank in M.Tech VLSI in May 2013"
  };
  EcHonors6 = {
    instanceID: "echonors6",
    image: "echonors6.jpg",
    width: "30%",
    name: "Neenu Saju",
    content:
      "Secured First Rank in B.Tech Electronics and Communication Engineering in May 2016"
  };
  EcHonors7 = {
    instanceID: "echonors7",
    image: "echonors7.jpg",
    width: "30%",
    name: "Deona Noble",
    content:
      "Secured Third Rank in B.Tech Electronics and Communication Engineering in May 2017"
  };
  EcHonors8 = {
    instanceID: "echonors8",
    image: "echonors8.jpg",
    width: "30%",
    name: "Anjana Shaji",
    content:
      "Secured First Rank in B.Tech Electronics and Communication Engineering in May 2018"
  };
  EcHonors9 = {
    instanceID: "echonors9",
    image: "echonors9.jpg",
    width: "30%",
    name: "Minni Shaji",
    content:
      "Secured Seventh Rank in B.Tech Electronics and Communication Engineering in May 2018"
  };
  EcHonors10 = {
    instanceID: "echonors10",
    image: "echonors10.jpg",
    width: "30%",
    name: "Deepa S",
    content:
      "Secured Tenth Rank in B.Tech Electronics and Communication Engineering in May 2018"
  };
  EcHonors11 = {
    instanceID: "echonors11",
    image: "echonors11.jpg",
    width: "30%",
    name: "Minna Shaji",
    content:
      "Secured Tenth Rank in B.Tech Electronics and Communication Engineering in May 2018"
  };
  render() {
    return (
      <div className="honors">
        <HeadingOne data={this.EcHonorsHeading} />
        <div className="photos">
          <div>
            <Honors data={this.EcHonors8} />
          </div>
          <div>
            <Honors data={this.EcHonors9} />
          </div>
          <div>
            <Honors data={this.EcHonors10} />
          </div>
          <div>
            <Honors data={this.EcHonors11} />
          </div>
          <div>
            <Honors data={this.EcHonors7} />
          </div>
          <div>
            <Honors data={this.EcHonors6} />
          </div>
          <div>
            <Honors data={this.EcHonors4} />
          </div>
          <div>
            <Honors data={this.EcHonors5} />
          </div>
          <div>
            <Honors data={this.EcHonors2} />
          </div>
          <div>
            <Honors data={this.EcHonors3} />
          </div>
          <div>
            <Honors data={this.EcHonors1} />
          </div>
        </div>
      </div>
    );
  }
}

export default EcHonors;
