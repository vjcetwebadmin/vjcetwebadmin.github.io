import React, { Component } from "react";
import "./CarouselFour.css";
import ImageOne from "../Components/Images/ImageOne";
import HeadingTwo from "../Components/Texts/HeadingTwo";
import HeadingFive from "../Components/Texts/HeadingFive";

class CarouselFour extends Component {
  state = { currentPage: 0, sliderSize: 3 };
  componentDidMount() {
    this.setState({ sliderSize: window.innerWidth < 768 ? 1 : 7 });
  }
  rotateLeft = () => {
    console.log("rotateLeft");
    console.log(this.state.currentPage);
    if (this.state.currentPage - 1 < 0) {
      this.setState({
        currentPage: Math.floor(this.slides.length / this.state.sliderSize) - 1
      });
    } else {
      this.setState({
        currentPage: this.state.currentPage - 1
      });
    }
  };
  rotateRight = () => {
    console.log("rotateRight");
    console.log(this.state.currentPage);
    if (
      this.state.currentPage + 1 >
      Math.floor(this.slides.length / this.state.sliderSize) - 1
    ) {
      this.setState({
        currentPage: 0
      });
    } else {
      this.setState({
        currentPage: this.state.currentPage + 1
      });
    }
  };
  
  Events = {
    instanceID: "CarouselFourEvents",
    title: "VJCET Chapters"
  };
  Previous = {
    instanceID: "CarouselFourPreviousArrow",
    image: "carousalthreeprevious.png",
    width: "20px"
  };

  Next = {
    instanceID: "CarouselFourNextArrow",
    image: "carousalthreenext.png",
    width: "20px"
  };
 
  slides = [
    {
      Title: {
        instanceID: "EventOneTitle",
        title:<a href="/campus-life/professionalbodies/ieee" target="_blank" rel="noopener noreferrer"><font color="maroon">IEEE</font></a>
        
      },

      Image: {
        instanceID: "EventOneImage",
        image: "HomepageActivities/ieee.jpg",
        width: "120px",
       
        
      }
    },
    
    {
      Title: {
        instanceID: "EventTwoTitle",
        title:<a href="/campus-life/professionalbodies/iste" target="_blank" rel="noopener noreferrer"><font color="maroon" >ISTE</font></a>
      },

      Image: {
        instanceID: "EventTwoImage",
        image: "HomepageActivities/ISTE1.png",
        width: "120px"
      }
    },
    {
      Title: {
        instanceID: "EventThreeTitle",
        title: <a href="/campus-life/professionalbodies/igbc" target="_blank" rel="noopener noreferrer"><font color="maroon">IGBC</font></a>
      },

      Image: {
        instanceID: "EventThreeImage",
        image: "HomepageActivities/IGBC.jpg",
        width: "120px"
      }
    },
    {
      Title: {
        instanceID: "EventFourTitle",
        title: <a href="/campus-life/professionalbodies/csi" target="_blank" rel="noopener noreferrer"><font color="maroon">CSI</font></a>
      },

      Image: {
        instanceID: "EventFourImage",
        image: "HomepageActivities/CSI.png",
        width: "120px"
      }
    },
    {
      Title: {
        instanceID: "EventFiveTitle",
        title: <a href="/campus-life/professionalbodies/iete" target="_blank" rel="noopener noreferrer"><font color="maroon">IETE</font></a>
      },

      Image: {
        instanceID: "EventFiveImage",
        image: "HomepageActivities/iete.jpg",
        width: "120px"
      }
    },
    {
      Title: {
        instanceID: "EventSixTitle",
        title: <a href="/campus-life/professionalbodies/sae" target="_blank" rel="noopener noreferrer"><font color="maroon">SAE INDIA</font></a>
      },

      Image: {
        instanceID: "EventSixImage",
        image: "HomepageActivities/SAEINDIA.jpg",
        width: "200px"
      }
    },
    {
      Title: {
        instanceID: "EventFourTitle",
        title: <a href="/campus-life/nss" target="_blank" rel="noopener noreferrer"><font color="maroon">NSS</font></a>
      },

      Image: {
        instanceID: "EventThreeImage",
        image: "HomepageActivities/NSS.png",
        width: "110px"
      }
    }
    
    

  ];

  render() {
    const { instanceID } = this.props.data;
    window.addEventListener("resize", () => {
      // console.log(window.innerWidth);
      if (window.innerWidth < 768 && this.state.sliderSize > 1) {
        this.setState({ sliderSize: 1 });
      } else if (window.innerWidth >= 768 && this.state.sliderSize < 7) {
        this.setState({ sliderSize: 7 });
      }
    });

    return (
      <div className="CarouselFour" id={instanceID}>
        <div className="CarouselFourContentWrapper">
          <div className="CarouselFourTop">
            <HeadingTwo data={this.Events} />
            <div className="CarouselFourArrows" id="CarouselFourArrows">
              <ImageOne data={this.Previous} onClickAction={this.rotateLeft} />
              <ImageOne
                className="CarouselFourArrowRight"
                data={this.Next}
                onClickAction={this.rotateRight}
              />
            </div>
          </div>

          <div className="CarouselFourSlider">
            {this.slides.map((item, index, arr) => {
              if (
                index < this.state.sliderSize + this.state.currentPage &&
                index >= this.state.currentPage * this.state.sliderSize
              ) {
                return (
                  <div
                    className="CarouselFourSlide"
                    id={instanceID + "SlideThree"}
                  >
                    <ImageOne data={item.Image} />
                    <HeadingFive data={item.Title} />
                    </div>
                );
              }
            })}
          </div>
        </div>

        <div className="CarouselFourPaginationContainer">
          <div className="CarouselFourPagination">
            {this.slides.map((item, index, arr) => {
              if (index % this.state.sliderSize === 0)
                return (
                  <div
                    style={{
                      height: "6px",
                      width: "6px",
                      backgroundColor:
                        index === this.state.currentPage ? "#880D1E" : "#aaa",
                      margin: "5px",
                      borderRadius: "100%"
                    }}
                  />
                );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default CarouselFour;
