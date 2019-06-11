import React, { Component } from "react";
import FacultyData from "../../Components/FacultyData";
class ITFaculty extends Component {
  state = {};
  Cefaculty1 = {
    instanceID: "Cefaculty1",
    image: "itfac001.jpg",
    width: "50%",
    name: "Mrs. Anju Susan George",
    content: "Associate Professor and Head of Department"
  };
  Cefaculty2 = {
    instanceID: "Cefaculty2",
    image: "181.jpg",
    width: "50%",
    name: "Mrs. Jesline Joseph",
    content: "Assistant Professor"
  };
  Cefaculty3 = {
    instanceID: "Cefaculty3",
    image: "itfac003.jpeg",
    width: "50%",
    name: "Mrs. Juliet A Murali",
    content: "Assistant Professor"
  };
  Cefaculty4 = {
    instanceID: "Cefaculty4",
    image: "itfac002.jpg",
    width: "50%",
    name: "Mrs. Ann Preetha Jose",
    content: "Assistant Professor"
  };
  Cefaculty5 = {
    instanceID: "Cefaculty5",
    image: "itfac006.jpg",
    width: "50%",
    name: "Mrs. Tiny Molly V",
    content: "Assistant Professor"
  };
  Cefaculty6 = {
    instanceID: "Cefaculty6",
    image: "186.jpg",
    width: "50%",
    name: "Mr. Prince Kurian",
    content: "Assistant Professor"
  };
  Cefaculty7 = {
    instanceID: "Cefaculty7",
    image: "itfac005.jpg",
    width: "50%",
    name: "Mrs. Salini Dev P V",
    content: "Assistant Professor"
  };
  Cefaculty8 = {
    instanceID: "Cefaculty8",
    image: "188.jpg",
    width: "50%",
    name: "Mr. Santhanu P Mohan",
    content: "Assistant Professor"
  };
  Cefaculty9 = {
    instanceID: "Cefaculty",
    image: "189.jpg",
    width: "50%",
    name: "Mrs. Diana Baby",
    content: "Assistant Professor"
  };
  Cefaculty10 = {
    instanceID: "Cefaculty10",
    image: "354.jpg",
    width: "50%",
    name: "Dr. Sheela V.K.",
    content: "Assistant Professor"
  };
  Cefaculty11 = {
    instanceID: "Cefaculty10",
    image: "Sr.RecyVarghese.jpg",
    width: "50%",
    name: "Sr. Recy Varghese",
    content: "Assistant Professor"
  };
  

  render() {
    return (
      <div className="faculty">
        <div className="facultyContent">
          <div>
            <FacultyData data={this.Cefaculty1} />
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
          <div>
            <FacultyData data={this.Cefaculty11} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty10} />
          </div>
        </div>
      </div>
    );
  }
}

export default ITFaculty;
