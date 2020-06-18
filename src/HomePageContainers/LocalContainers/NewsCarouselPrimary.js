import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./NewsCarousel.css";
import NewsImage from "./NewsImage";
//import CarouselCaption from "react-bootstrap/CarouselCaption";

//This is Carousal Component. Uses a library called react-bootstrap. Don't Mess with..

class NewsCarouselPrimary extends Component {
  Title1 = {
    instanceID: "NewsPrimaryOneTitle",
    title: "",
    link: ""
  };

  Image1 = {
    instanceID: "NewsPrimaryOneImage",
    image: "NewsSection/BigNews/BigNews4.jpg",
    //Recommended Image Size is 733px x 400px.
    width: "100%"
  };

  Title2 = {
    instanceID: "NewsPrimaryTwoTitle",
    title: "326 Students Placed",
    link: "/placement/"
  };

  Image2 = {
    instanceID: "NewsPrimaryTwoImage",
    image: "NewsSection/BigNews/BigNews2.jpg",
    //Recommended Image Size is 733px x 400px.
    width: "100%"
  };
  Title3 = {
    instanceID: "NewsPrimaryThreeTitle",
    title: "12 University Ranks(2014-18)",
    
  };

  Image3 = {
    instanceID: "NewsPrimaryThreeImage",
    image: "NewsSection/BigNews/BigNews3.jpg",
    //Recommended Image Size is 733px x 400px.
    width: "100%"
  };

  render() {
    //const { instanceID } = this.props.data;

    return (
      <Carousel>
        <Carousel.Item>
          <NewsImage data={this.Image1} />
          <a href={this.Title1.link}>
          <h3>{this.Title1.title}</h3>
            {/* <Carousel.Caption>
              
            </Carousel.Caption> */}
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <NewsImage data={this.Image2} />
          <a href={this.Title2.link}>
            <Carousel.Caption>
              <h3>{this.Title2.title}</h3>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <NewsImage data={this.Image3} />
          <a href={this.Title3.link}>
            <Carousel.Caption>
              <h3>{this.Title3.title}</h3>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default NewsCarouselPrimary;
