import React, { Component } from "react";
import FacultyData from "../../Components/FacultyData";
class Faculty extends Component {
  state = {};
  Cestaff1 = {
    instanceID: "Cestaff1",
    image: "Allstaffphoto/EC/STAF/171.jpg",
    width: "50%",
    name: "Mr. Thankachan P J",
    content: "Instructor Grade II"
  };
  Cefaculty2 = {
    instanceID: "Cefaculty2",
    image: "Allstaffphoto/EC/STAF/172.jpg",
    width: "50%",
    name: "Mr. Ginu Jose",
    content: "Instructor Grade I"
  };
  Cefaculty3 = {
    instanceID: "Cefaculty3",
    image: "Allstaffphoto/EC/STAF/173.jpg",
    width: "50%",
    name: "Mr. Denny Joseph",
    content: "Instructor Grade II"
  };
  Cefaculty4 = {
    instanceID: "Cefaculty4",
    image: "Allstaffphoto/EC/STAF/174.JPG",
    width: "50%",
    name: "Mr. Renji Issac",
    content: "Trade Instructor"
  };
  Cefaculty5 = {
    instanceID: "Cefaculty5",
    image: "Allstaffphoto/EC/STAF/175.jpg",
    width: "50%",
    name: "Mr. Shiju Jose",
    content: "Trade Instructor"
  };
  Cefaculty6 = {
    instanceID: "Cefaculty6",
    image: "Allstaffphoto/EC/STAF/176.jpg",
    width: "50%",
    name: "Mr. Jekson George",
    content: "Tradesman"
  };
  Cefaculty7 = {
    instanceID: "Cefaculty7",
    image: "Allstaffphoto/EC/STAF/177.jpg",
    width: "50%",
    name: "Mr. Thomas Mathew",
    content: "Tradesman"
  };
  Cefaculty8 = {
    instanceID: "Cefaculty8",
    image: "Allstaffphoto/EC/STAF/178.jpg",
    width: "50%",
    name: "Mr. Anish George",
    content: "Tradesman"
  };
  
  render() {
    return (
      <div className="faculty">
        <div className="facultyContent">
          <div>
            <FacultyData data={this.Cestaff1} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty2} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty3} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty4} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty5} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty6} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty7} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty8} />
          </div>
        </div>
      </div>
    );
  }
}

export default Faculty;
