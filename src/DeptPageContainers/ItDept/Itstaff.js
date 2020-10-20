import React, { Component } from "react";
import FacultyData from "../../Components/FacultyData";
class ITStaff extends Component {
  state = {};
  Cestaff1 = {
    instanceID: "Cestaff1",
    image: "Allstaffphoto/IT/STAF/4.jpg",
    width: "50%",
    name: "Mrs. Preethy Joseph",
    content: "Computer Programmer"
  };
  Cefaculty2 = {
    instanceID: "Cefaculty2",
    image: "Allstaffphoto/IT/STAF/194.jpg",
    width: "50%",
    name: "Mr. Shaji A Varghese",
    content: "Trade Instructor"
  };
  Cefaculty11 = {
    instanceID: "Cefaculty11",
    image: "Allstaffphoto/IT/FAC/Sr.RecyVarghese.jpg",
    width: "50%",
    name: "Sr. Recy Varghese",
    content: "Computer Programmer"
  };

  render() {
    return (
      <div className="faculty">
        <div className="facultyContent">
          <div>
          <FacultyData data={this.Cestaff1} />
          </div>
          <div>
          <FacultyData data={this.Cefaculty11} />
          </div>          
          <div>
            <FacultyData data={this.Cefaculty2} />
          </div>
        </div>
      </div>
    );
  }
}

export default ITStaff;
