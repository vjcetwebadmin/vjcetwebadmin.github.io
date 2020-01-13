import React, { Component } from "react";
import FacultyData from "../../Components/FacultyData";
class ITFaculty extends Component {
  state = {};
  Cefaculty1 = {
    instanceID: "Cefaculty1",
    image: "Allstaffphoto/IT/FAC/itfac001.jpg",
    width: "50%",
    name: <a href="http://117.239.154.84:8000/profile/FacultyProfileWeb/56/itfac001.jpg" target="_blank" rel="noopener noreferrer">Mrs. Anju Susan George</a>,
    content: "Associate Professor and Head of Department"
  };
  Cefaculty2 = {
    instanceID: "Cefaculty2",
    image: "Allstaffphoto/IT/FAC/181.jpg",
    width: "50%",
    name: <a href="http://117.239.154.84:8000/profile/FacultyProfileWeb/57/181.jpg" target="_blank" rel="noopener noreferrer">Mrs. Jesline Joseph</a>,
    content: "Assistant Professor"
  };
  Cefaculty3 = {
    instanceID: "Cefaculty3",
    image: "Allstaffphoto/IT/FAC/itfac003.jpeg",
    width: "50%",
    name: <a href="http://117.239.154.84:8000/profile/FacultyProfileWeb/58/itfac003.jpeg" target="_blank" rel="noopener noreferrer">Mrs. Juliet A Murali</a>,
    content: "Assistant Professor"
  };
  Cefaculty4 = {
    instanceID: "Cefaculty4",
    image: "Allstaffphoto/IT/FAC/itfac002.jpg",
    width: "50%",
    name: <a href="http://117.239.154.84:8000/profile/FacultyProfileWeb/59/itfac002.jpg" target="_blank" rel="noopener noreferrer">Mrs. Ann Preetha Jose</a>,
    content: "Assistant Professor"
  };
  Cefaculty5 = {
    instanceID: "Cefaculty5",
    image: "Allstaffphoto/IT/FAC/itfac006.jpg",
    width: "50%",
    name: <a href="http://117.239.154.84:8000/profile/FacultyProfileWeb/60/itfac006.jpg" target="_blank" rel="noopener noreferrer">Mrs. Tiny Molly V</a>,
    content: "Assistant Professor"
  };
  Cefaculty6 = {
    instanceID: "Cefaculty6",
    image: "Allstaffphoto/IT/FAC/186.jpg",
    width: "50%",
    name: <a href="http://117.239.154.84:8000/profile/FacultyProfileWeb/61/186.jpg" target="_blank" rel="noopener noreferrer">Mr. Prince Kurian</a>,
    content: "Assistant Professor"
  };
  Cefaculty7 = {
    instanceID: "Cefaculty7",
    image: "Allstaffphoto/IT/FAC/itfac005.jpg",
    width: "50%",
    name: <a href="http://117.239.154.84:8000/profile/FacultyProfileWeb/62/itfac005.jpg" target="_blank" rel="noopener noreferrer">Mrs. Salini Dev P V</a>,
    content: "Assistant Professor"
  };
  Cefaculty8 = {
    instanceID: "Cefaculty8",
    image: "Allstaffphoto/IT/FAC/188.jpg",
    width: "50%",
    name: <a href="http://117.239.154.84:8000/profile/FacultyProfileWeb/63/188.jpg" target="_blank" rel="noopener noreferrer">Mr. Santhanu P Mohan</a>,
    content: "Assistant Professor"
  };
  Cefaculty9 = {
    instanceID: "Cefaculty",
    image: "Allstaffphoto/IT/FAC/189.jpg",
    width: "50%",
    name: <a href="http://117.239.154.84:8000/profile/FacultyProfileWeb/64/189.jpg" target="_blank" rel="noopener noreferrer">Mrs. Diana Baby</a>,
    content: "Assistant Professor"
  };
  Cefaculty10 = {
    instanceID: "Cefaculty10",
    image: "Allstaffphoto/IT/FAC/354.jpg",
    width: "50%",
    name: <a href="http://117.239.154.84:8000/profile/FacultyProfileWeb/65/354.jpg" target="_blank" rel="noopener noreferrer">Dr. Sheela V.K.</a>,
    content: "Assistant Professor"
  };
  Cefaculty11 = {
    instanceID: "Cefaculty10",
    image: "Allstaffphoto/IT/FAC/Sr.RecyVarghese.jpg",
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
