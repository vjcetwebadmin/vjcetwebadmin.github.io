import React, { Component } from "react";
import HeadingOne from "../../../Components/Texts/HeadingOne";
import Honors from "../../../Components/honors";
import "./honors.css";
class ItHonors extends Component {
  state = {};
  ItHonorsHeading = {
    instanceID: "ItHonorsHeading",
    title: "Honors of Information Technology"
  };
  ItHonors1 = {
    instanceID: "ithonors1",
    image: "ithonors1.jpg",
    width: "30%",
    name: "Sonam Susan Mathews",
    content: "Secured Second Rank in B.Tech IT May 2018"
  };
  ItHonors2 = {
    instanceID: "ithonors2",
    image: "ithonors2.jpeg",
    width: "30%",
    name: " Jeesmon Johny",
    content: "2013-2017"
  };
  ItHonors3 = {
    instanceID: "ithonors3",
    image: "ithonors3.jpg",
    width: "30%",
    name: "Maria Jolly",
    content: "2012-2016"
  };
  ItHonors4 = {
    instanceID: "ithonors4",
    image: "ithonors4.jpg",
    width: "30%",
    name: "Nimitha Joy",
    content: "2011-2015"
  };
  ItHonors5 = {
    instanceID: "ithonors5",
    image: "ithonors5.png",
    width: "30%",
    name: "Akshay Aggarwal",
    content: "2010-2014"
  };
  ItHonors6 = {
    instanceID: "ithonors6",
    image: "ithonors6.JPEG",
    width: "30%",
    name: "Dincy Devasia",
    content: "Secured Third rank in B.Tech Information Technology May 2013"
  };
  ItHonors7 = {
    instanceID: "ithonors7",
    image: "ithonors7.jpg",
    width: "30%",
    name: "Rhimi KX",
    content: "Secured Second Rank in B.Tech IT May 2012"
  };
  
  ItHonors8 = {
    instanceID: "ithonors8",
    image: "ithonors8.JPEG",
    width: "30%",
    name: "Soumya Joseph",
    content: "Secured First Rank in B.Tech Information Technology May 2011"
  };
  ItHonors9 = {
    instanceID: "ithonors9",
    image: "ithonors9.JPEG",
    width: "30%",
    name: "Neethu Devassy",
    content: "Secured First Rank in B.Tech Information Technology May 2010"
  };
  ItHonors10 = {
    instanceID: "ithonors10",
    image: "ithonors10.JPEG",
    width: "30%",
    name: "Priya Joseph",
    content: "Secured First Rank in B.Tech Information Technology May 2009"
  };
  ItHonors11 = {
    instanceID: "ithonors11",
    image: "ithonors11.JPG",
    width: "30%",
    name: "Mithun B Mathew",
    content: "2004-2008"
  };
  ItHonors12 = {
    instanceID: "ithonors12",
    image: "ithonors12.JPG",
    width: "30%",
    name: "Veena Kunju",
    content: "2003-2007"
  };
  ItHonors13 = {
    instanceID: "ithonors13",
    image: "ithonors13.jpg",
    width: "30%",
    name: "Vanitha K",
    content: "2002-2006"
  };
  ItHonors14 = {
    instanceID: "ithonors14",
    image: "ithonors14.JPEG",
    width: "30%",
    name: "Jithin Joy",
    content: "Secured First Rank in B.Tech Information Technology May 2005"
  };
  ItHonors15 = {
    instanceID: "ithonors15",
    image: "ithonors15.jpg",
    width: "30%",
    name: "Swathi Krishna",
    content: "Secured Third Rank in B.Tech IT May 2018"
  };
  ItHonors16 = {
    instanceID: "ithonors16",
    image: "ithonors16.jpg",
    width: "30%",
    name: "Manya Kurian",
    content: "Secured Seventh Rank in B.Tech IT May 2018"
  };

  render() {
    return (
      <div className="honors">
        <HeadingOne data={this.ItHonorsHeading} />
        <div className="photos">
          <div>
            <Honors data={this.ItHonors1} />
          </div>
          <div>
            {<Honors data={this.ItHonors15} />}
          </div>
          <div>
            {<Honors data={this.ItHonors16} />}
          </div>
          <div>
            <Honors data={this.ItHonors2} />
          </div>
          <div>
            <Honors data={this.ItHonors3} />
          </div>
          <div>
            <Honors data={this.ItHonors4} />
          </div>
          <div>
            <Honors data={this.ItHonors5} />
          </div>
          <div>
            <Honors data={this.ItHonors6} />
          </div>
          <div>
            <Honors data={this.ItHonors7} />
          </div>
          <div>
            <Honors data={this.ItHonors8} />
          </div>
          <div>
            <Honors data={this.ItHonors9} />
          </div>
          <div>
            <Honors data={this.ItHonors10} />
          </div>
          <div>
            {<Honors data={this.ItHonors11} />}
          </div>
          <div>
            {<Honors data={this.ItHonors12} />}
          </div>
          <div>
            {<Honors data={this.ItHonors13} />}
          </div>
          <div>
            {<Honors data={this.ItHonors14} />}
          </div>
        </div>
      </div>
    );
  }
}

export default ItHonors;
