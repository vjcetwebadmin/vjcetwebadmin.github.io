import React, { Component } from "react";
import FacultyData from "../../Components/FacultyData";
class CSStaff extends Component {
  state = {};
  Cestaff1 = {
    instanceID: "Cestaff1",
    image: "brightyjose.jpg",
    width: "50%",
    name: "Mrs. Brighty Jose",
    content: "Librarian"
  };
  Cefaculty2 = {
    instanceID: "Cefaculty2",
    image: "binopaul.JPG",
    width: "50%",
    name: "Mr. Bino Paul",
    content: "Librarian Grade III"
  };
  Cefaculty3 = {
    instanceID: "Cefaculty3",
    image: "jintoaugustine.jpg",
    width: "50%",
    name: "Mr. Jinto Augustine",
    content: "Librarian Grade IV"
  };
  Cefaculty4 = {
    instanceID: "Cefaculty4",
    image: "leenalisabraham.jpeg",
    width: "50%",
    name: "Mrs. Leena Lis Abraham",
    content: "Library Assistant"
  };
  Cefaculty5 = {
    instanceID: "Cefaculty5",
    image: "marinashajan.jpeg",
    width: "50%",
    name: "Mrs. Marina Shajan",
    content: "Class IV"
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
          
        </div>
      </div>
    );
  }
}

export default CSStaff;
