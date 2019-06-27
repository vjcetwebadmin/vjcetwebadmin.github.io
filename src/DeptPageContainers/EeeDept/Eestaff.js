import React, { Component } from "react";
import FacultyData from "../../Components/FacultyData";
class EEStaff extends Component {
  state = {};
  Cestaff1 = {
    instanceID: "Cestaff1",
    image: "Allstaffphoto/EE/STAF/EESTF101.jpg",
    width: "50%",
    name: "Mr. Sabu Valiamattom",
    content: "Instructor Grade I"
  };
  Cefaculty2 = {
    instanceID: "Cefaculty2",
    image: "Allstaffphoto/EE/STAF/129.jpg",
    width: "50%",
    name: "Mr. Dhinu Paul",
    content: "Instructor Grade II"
  };
  Cefaculty3 = {
    instanceID: "Cefaculty3",
    image: "Allstaffphoto/EE/STAF/130.jpg",
    width: "50%",
    name: "Mrs. Binumol George",
    content: "Computer Programmer"
  };
  Cefaculty4 = {
    instanceID: "Cefaculty4",
    image: "Allstaffphoto/EE/STAF/131.jpg",
    width: "50%",
    name: "Mr. Biju Joseph",
    content: "Trade Instructor"
  };
  Cefaculty5 = {
    instanceID: "Cefaculty5",
    image: "Allstaffphoto/EE/STAF/132.jpg",
    width: "50%",
    name: "Mr. Bijo Joseph",
    content: "Trade Instructor"
  };
  Cefaculty6 = {
    instanceID: "Cefaculty6",
    image: "Allstaffphoto/EE/STAF/133.jpg",
    width: "50%",
    name: "Mr. Dayas M Edassery",
    content: "Trade Instructor"
  };
  Cefaculty7 = {
    instanceID: "Cefaculty7",
    image: "Allstaffphoto/EE/STAF/134.jpg",
    width: "50%",
    name: "Mr. Gince Kurian",
    content: "Tradesman"
  };
  Cefaculty8 = {
    instanceID: "Cefaculty8",
    image: "Allstaffphoto/EE/STAF/135.jpg",
    width: "50%",
    name: "Mr. Shiju P Mathew",
    content: "Tradesman"
  };
  Cefaculty9 = {
    instanceID: "Cefaculty9",
    image: "Allstaffphoto/EE/STAF/136.jpg",
    width: "50%",
    name: "Mr. Bijo Jose",
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
          <div>
            <FacultyData data={this.Cefaculty9} />
          </div>
        </div>
      </div>
    );
  }
}

export default EEStaff;
