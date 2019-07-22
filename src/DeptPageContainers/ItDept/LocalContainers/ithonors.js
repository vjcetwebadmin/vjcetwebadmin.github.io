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
    image: "Honors/ithonors1.jpg",
    width: "30%",
    name: "Sonam Susan Mathews",
    content: "Secured Second Rank in B.Tech IT May 2018"
  };
  ItHonors2 = {
    instanceID: "ithonors2",
    image: "Honors/ithonors2.jpeg",
    width: "30%",
    name: " Jeesmon Johny",
    content: "Secured Sixth Rank in B.Tech IT May 2017"
  };
  
  ItHonors5 = {
    instanceID: "ithonors5",
    image: "Honors/ithonors5.png",
    width: "30%",
    name: "Akshay Aggarwal",
    content: "Secured First Rank in B.Tech IT May 2014"
  };
  ItHonors6 = {
    instanceID: "ithonors6",
    image: "Honors/ithonors6.JPEG",
    width: "30%",
    name: "Dincy Devasia",
    content: "Secured Third rank in B.Tech Information Technology May 2013"
  };
  ItHonors7 = {
    instanceID: "ithonors7",
    image: "Honors/ithonors7.jpg",
    width: "30%",
    name: "Rhimi KX",
    content: "Secured Second Rank in B.Tech IT May 2012"
  };
  
  ItHonors8 = {
    instanceID: "ithonors8",
    image: "Honors/ithonors8.JPEG",
    width: "30%",
    name: "Soumya Joseph",
    content: "Secured First Rank in B.Tech Information Technology May 2011"
  };
  ItHonors9 = {
    instanceID: "ithonors9",
    image: "Honors/ithonors9.JPEG",
    width: "30%",
    name: "Neethu Devassy",
    content: "Secured First Rank in B.Tech Information Technology May 2010"
  };
  ItHonors10 = {
    instanceID: "ithonors10",
    image: "Honors/ithonors10.JPEG",
    width: "30%",
    name: "Priya Joseph",
    content: "Secured First Rank in B.Tech Information Technology May 2009"
  };
 
  ItHonors14 = {
    instanceID: "ithonors14",
    image: "Honors/ithonors14.JPEG",
    width: "30%",
    name: "Jithin Joy",
    content: "Secured First Rank in B.Tech Information Technology May 2005"
  };
  ItHonors15 = {
    instanceID: "ithonors15",
    image: "Honors/ithonors15.jpg",
    width: "30%",
    name: "Swathi Krishna",
    content: "Secured Third Rank in B.Tech IT May 2018"
  };
  ItHonors16 = {
    instanceID: "ithonors16",
    image: "Honors/ithonors16.jpg",
    width: "30%",
    name: "Manya Kurian",
    content: "Secured Seventh Rank in B.Tech IT May 2018"
  };
  ItHonors17 = {
    instanceID: "ithonors17",
    image: "Honors/ithonors17.jpg",
    width: "30%",
    name: "Daya Philip",
    content: "Secured Fourth Rank in B.Tech IT May 2013"
  };
  ItHonors18 = {
    instanceID: "ithonors18",
    image: "Honors/ithonors18.jpg",
    width: "30%",
    name: "Nimitha Joy",
    content: "Secured First Rank in B.Tech IT May 2015"
  };
  ItHonors19 = {
    instanceID: "ithonors19",
    image: "Honors/ithonors19.jpg",
    width: "30%",
    name: "Maria Jolly",
    content: "Secured Fifth Rank in B.Tech IT May 2016"
  };
  ItHonors20 = {
    instanceID: "ithonors20",
    image: "Honors/ithonors20.jpg",
    width: "30%",
    name: "Anjana Krishnan",
    content: "Secured Seventh Rank in B.Tech IT May 2016"
  };
  ItHonors21 = {
    instanceID: "ithonors21",
    image: "Honors/ithonors21.jpg",
    width: "30%",
    name: " Reshma Saju",
    content: "Secured Third Rank in B.Tech IT May 2015"
  };
  ItHonors22 = {
    instanceID: "ithonors22",
    image: "Honors/ithonors22.jpg",
    width: "30%",
    name: " Noyal Wilson",
    content: "Secured Seventh Rank in B.Tech IT May 2015"
  };
  ItHonors23 = {
    instanceID: "ithonors23",
    image: "Honors/ithonors23.jpg",
    width: "30%",
    name: " Amalraj Vidhyadharan",
    content: "Secured Fifth Rank in B.Tech IT May 2019(KTU)"
  };



  render() {
    return (
      <div className="honors">
        <HeadingOne data={this.ItHonorsHeading} />
        <div className="photos">
        <div>
            <Honors data={this.ItHonors23} />
          </div>
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
            <Honors data={this.ItHonors19} />
          </div>
          <div>
            <Honors data={this.ItHonors20} />
          </div>
          <div>
            <Honors data={this.ItHonors18} />
          </div>
          <div>
            <Honors data={this.ItHonors21} />
          </div>
          <div>
            <Honors data={this.ItHonors22} />
          </div>
          <div>
            <Honors data={this.ItHonors5} />
          </div>
          <div>
            <Honors data={this.ItHonors6} />
          </div>
          <div>
            <Honors data={this.ItHonors17} />
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
            {<Honors data={this.ItHonors14} />}
          </div>
        </div>
      </div>
    );
  }
}

export default ItHonors;
