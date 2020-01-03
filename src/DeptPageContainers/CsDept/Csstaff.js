import React, { Component } from "react";
import FacultyData from "../../Components/FacultyData";
class CSStaff extends Component {
  state = {};
  Cestaff1 = {
    instanceID: "Cestaff1",
    image: "Allstaffphoto/CS/STAF/93.jpg",
    width: "50%",
    name: "Mr. James R Alex",
    content: "System Engineer"
  };
  Cefaculty2 = {
    instanceID: "Cefaculty2",
    image: "Allstaffphoto/CS/STAF/94.jpg",
    width: "50%",
    name: "Mr. Lijo Mathew",
    content: "Computer Programmer"
  };
  Cefaculty3 = {
    instanceID: "Cefaculty3",
    image: "Allstaffphoto/CS/STAF/95.jpg",
    width: "50%",
    name: "Mr. Sijo Jose",
    content: "Computer Programmer"
  };
  Cefaculty4 = {
    instanceID: "Cefaculty4",
    image: "Allstaffphoto/CS/STAF/96.jpg",
    width: "50%",
    name: "Mr. Manoj Francis",
    content: "Computer Programmer"
  };
  Cefaculty5 = {
    instanceID: "Cefaculty5",
    image: "Allstaffphoto/CS/STAF/97.PNG",
    width: "50%",
    name: "Mrs. Neethu Joseph",
    content: "Computer Programmer"
  };
   Cefaculty7 = {
    instanceID: "Cefaculty7",
    image: "Allstaffphoto/CS/STAF/99.jpg",
    width: "50%",
    name: "Mrs. K G Sindhu",
    content: "Instructor Grade II"
  };
  Cefaculty8 = {
    instanceID: "Cefaculty8",
    image: "Allstaffphoto/CS/STAF/100.jpg",
    width: "50%",
    name: "Mrs. Sheepa Cyriac",
    content: "Instructor Grade II"
  };
  Cefaculty9 = {
    instanceID: "Cefaculty9",
    image: "Allstaffphoto/CS/STAF/101.jpg",
    width: "50%",
    name: "Mr. Sijo Mathew",
    content: "Network Technician"
  };
  Cefaculty10 = {
    instanceID: "Cefaculty10",
    image: "Allstaffphoto/CS/STAF/102.jpg",
    width: "50%",
    name: "Mrs. Joicy K Jose",
    content: "Instructor Grade II"
  };
  Cefaculty11 = {
    instanceID: "Cefaculty11",
    image: "Allstaffphoto/CS/STAF/103.jpg",
    width: "50%",
    name: "Mr. Jose Thomas",
    content: "Hardware Technician"
  };
  Cefaculty12 = {
    instanceID: "Cefaculty12",
    image: "Allstaffphoto/CS/STAF/104.JPG",
    width: "50%",
    name: "Mr. Justin Peter",
    content: "Hardware Technician"
  };
  Cefaculty13 = {
    instanceID: "Cefaculty13",
    image: "Allstaffphoto/CS/STAF/CSSTF113.jpg",
    width: "50%",
    name: "Mr. Eldhose Paul K",
    content: "Hardware Technician"
  };
  Cefaculty14 = {
    instanceID: "Cefaculty14",
    image: "Allstaffphoto/CS/STAF/106.jpg",
    width: "50%",
    name: "Mr. Anoop C",
    content: "Hardware Technician"
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
            <FacultyData data={this.Cefaculty7} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty8} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty9} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty10} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty11} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty12} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty13} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty14} />
          </div>
        </div>
      </div>
    );
  }
}

export default CSStaff;
