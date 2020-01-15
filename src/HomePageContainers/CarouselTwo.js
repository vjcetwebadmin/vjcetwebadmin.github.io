import React, { Component } from "react";
import "./CarouselTwo.css";
import CustomOne from "../Components/Texts/CustomOne";

class CarouselTwo extends Component {
  state = { selected: 0 };
  data = [
    {
      instanceID: this.props.data.instanceID + "CustomOne",
      title: <a href="https://vjcet.org/#/newsone" target="_blank" rel="noopener noreferrer"><font color="FFFFF" size="4">Spark AR Program- An Unique Opportunity for Students</font></a>
    },
    {
      instanceID: this.props.data.instanceID + "CustomOne",
      title: <a href="https://vjcet.org/downloads/news/MG Internal re-do Jan 2020.pdf" target="_blank" rel="noopener noreferrer"><font color="FFFFF" size="4">M.G. University Internal Redo Examination Jan'20 Time-Table</font></a>
    },
   
   
    {
      instanceID: this.props.data.instanceID + "CustomOne",
      title: <font color="FFFFF" size="3">Statement issued as per rule 13(b) of Income Tax: No foreign contribution has been received by the DTET for the quarter ended on 31-12-2019</font>
    },
   
    
    {
      instanceID: this.props.data.instanceID + "CustomOne",
      title: <a href="https://vjcet.org/#/placement" target="_blank" rel="noopener noreferrer"><font color="FFFFF" size="4">402 Students Placed in 2018-19 AY</font></a>
    },
    
            
    
  ];
  rotateRight = () => {
    this.setState({
      selected:
        this.state.selected + 1 >= this.data.length
          ? 0
          : this.state.selected + 1
    });
  };
  rotateLeft = () => {
    console.log(this.state.selected);
    this.setState({
      selected:
        this.state.selected - 1 < 0
          ? this.data.length - 1
          : this.state.selected - 1
    });
  };
  componentDidMount(){
    this.autoRotate();
    setTimeout(()=>{
      this.setState({
        selected: 0
      });
    });
  }
  autoRotate() {
    setTimeout(()=>{
      this.setState({
        selected:
        this.state.selected + 1 >=this.data.length
        ? 0
        : this.state.selected+1
      });
      
      this.autoRotate();
  }, 4000);
  }
  render() {
    const { instanceID } = this.props.data;

    return (
      <div className="CarouselTwo" id={instanceID}>
        <div className="CarouselTwoSlider">
          <div className="CarouselTwoSlide" id={instanceID} >
            <CustomOne
              data={this.data[this.state.selected]}
              className="CarouselTwoText"
              
            />
          </div>
        </div>
        <div className="CarouselTwoPagination">
          {this.data.map((item, index, arr) => {
            return (
              <a
                href
                onFocus={e => {
                  console.log("testfunction");
                  this.setState({ selected: index });
                }}
                onClick={e => {
                  this.setState({ selected: index });
                }}
              >
                <div
                  style={{
                    height: "6px",
                    width: "6px",
                    borderRadius: "100%",
                    backgroundColor:
                      this.state.selected === index ? "#fff" : "#ffffff77",
                    margin: "0px 2px"
                  }}
                />
              </a>
            );
          })}
        </div>
        <div
          className="CarouselTwoRightArrow"
          onClick={e => {
            this.rotateRight();
          }}
        >
          <img
            src={require("../Assets/carousaltwoarrow.png")}
            style={{ height: "15px", width: "15px" }}
            alt="img"
          />
        </div>

        <div
          className="CarouselTwoLeftArrow"
          onClick={e => {
            this.rotateLeft();
          }}
        >
          {" "}
          <img
            src={require("../Assets/carousaltwoarrow.png")}
            style={{
              height: "15px",
              width: "15px",
              transform: "rotate(180deg)"
            }}
            alt="img"
          />
        </div>
      </div>
    );
  }
}

export default CarouselTwo;
