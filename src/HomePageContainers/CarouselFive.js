import React, { Component } from "react";
import "./CarouselThree.css";
import "./CarouselFive.css"
import HeadingTwo from "../Components/Texts/HeadingTwo";

import ImageOne from "../Components/Images/ImageOne";

// import ContactLink from "../Components/Texts/Contactlink";
import { Link } from "react-router-dom";
class Activities extends Component {
  state = { sliderSize: 3, currentPage: 0 };
  componentDidMount() {
    this.setState({ sliderSize: window.innerWidth < 768 ? 1 : 3 });
  }
  
  
  News = {
    instanceID: "CarouselThreeNews",
    title: "Professional Body Activities"
  };
  IeeeImage= {
    instanceID: "IeeeImage",
    image: "HomepageActivities/ieee.jpg",
    width: "150px",
    height: "110px"
  };
  IsteImage= {
    instanceID: "IsteImage",
    image: "HomepageActivities/ISTE1.png",
    width: "150px",
    height: "150px"
  };
  CsiImage= {
    instanceID: "CsiImage",
    image: "HomepageActivities/CSI.png",
    width: "150px",
    height: "150px"
  };
  IgbcImage= {
    instanceID: "IgbcImage",
    image: "HomepageActivities/IGBC.jpg",
    width: "150px",
    height: "150px"
  };
  NssindiaImage= {
    instanceID: "NssindiaImage",
    image: "HomepageActivities/NSS.png",
    width: "150px",
    height: "150px"
  };
  IiicImage= {
    instanceID: "IiicImage",
    image: "HomepageActivities/IIIC.jpg",
    width: "150px",
    height: "150px"
  };
  VbicImage= {
    instanceID: "VbicImage",
    image: "HomepageActivities/VBIC.jpg",
    width: "150px",
    height: "150px"
  };
  
  render() {    

    const { instanceID } = this.props.data;

    return (
      <div className="CarouselThree" id={instanceID}>
      <div className="CarouselThreeContentWrapper">
        <div className="CarouselThreeTop">
        
               <HeadingTwo data={this.News} />
           
         
          </div>
      <div className="row">
        <div className="column">
        <p>
            <Link
              to="/campus-life/professionalbodies/ieee"
              target="_blank"
              className="patch1"
            >
         <ImageOne data={this.IeeeImage} />
         </Link>
          </p>
         </div>
        <div className="column">
        <p>
            <Link
              to="/campus-life/professionalbodies/iste"
              target="_blank"
              className="patch1"
            >
        <ImageOne data={this.IsteImage} />
        </Link>
          </p>
         </div>
        <div className="column">
        <p>
            <Link
              to="/campus-life/professionalbodies/csi"
              target="_blank"
              className="patch1"
            >
        <ImageOne data={this.CsiImage} />
        </Link>
          </p>
       </div>
       <div className="column">
       <p>
            <Link
              to="/campus-life/professionalbodies/igbc"
              target="_blank"
              className="patch1"
            >
        <ImageOne data={this.IgbcImage} />
        </Link>
          </p>
       </div>
       <div className="column">
       <p>
            <Link
              to="/campus-life/nss"
              target="_blank"
              className="patch1"
            >
         <ImageOne data={this.NssindiaImage} />
         </Link>
          </p>
         </div>
         <div className="column">
         <p>
            <Link
              to="/ed/v-bic"
              target="_blank"
              className="patch1"
            >
         <ImageOne data={this.VbicImage} />
         </Link>
          </p>
         </div>
        

</div>

</div>
</div>



    );
  }
}
const imgStyle={
  width:'100px'
}
export default Activities;
