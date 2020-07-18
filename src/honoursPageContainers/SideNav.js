import React, { Component } from "react";
import "./Nav.css";
<<<<<<< HEAD:src/HonorsPageContainers/SideNav.js
import CeHonors from "../DeptPageContainers/CeDept/LocalContainers/cehonors";
import CsHonors from "../DeptPageContainers/CsDept/LocalContainers/cshonors";
import EcHonors from "../DeptPageContainers/EcDept/LocalContainers/echonors";
import EeHonors from "../DeptPageContainers/EeeDept/LocalContainers/eehonors";
import ItHonors from "../DeptPageContainers/ItDept/LocalContainers/ithonors";
import MeHonors from "../DeptPageContainers/MeDept/LocalContainers/mehonors";
=======
import Cehonours from "../DeptPageContainers/CeDept/LocalContainers/cehonours";
import Cshonours from "../DeptPageContainers/CsDept/LocalContainers/cshonours";
import Echonours from "../DeptPageContainers/EcDept/LocalContainers/echonours";
import Eehonours from "../DeptPageContainers/EeeDept/LocalContainers/eehonours";
import Ithonours from "../DeptPageContainers/ItDept/LocalContainers/ithonours";
import Mehonours from "../DeptPageContainers/MeDept/LocalContainers/mehonours";
>>>>>>> dev:src/honoursPageContainers/SideNav.js
import HeadingOne from "../Components/Texts/HeadingOne";
class SideNav extends Component {
  state = {
    showcs: true,
    showec: false,
    showee: false,
    showit: false,
    showme: false
  };
  onClickcs = () => {
    this.setState({
      showcs: true,
      showec: false,
      showee: false,
      showit: false,
      showme: false
    });
  };
  onClickec = () => {
    this.setState({
      showcs: false,
      showec: true,
      showee: false,
      showit: false,
      showme: false
    });
  };

  onClickee = () => {
    this.setState({
      showcs: false,
      showec: false,
      showee: true,
      showit: false,
      showme: false
    });
  };
  onClickit = () => {
    this.setState({
      showcs: false,
      showec: false,
      showee: false,
      showit: true,
      showme: false
    });
  };
  onClickme = () => {
    this.setState({
      showcs: false,
      showec: false,
      showee: false,
      showit: false,
      showme: true
    });
  };
  Heading = {
    instanceID: "Heading",
    title: "Roll of honourS"
  };
  render() {
    return (
      <div >
        <HeadingOne data={this.Heading} />
        <div >
          <Cehonours />
        </div>
        <div >
          <Cshonours />
        </div>
        <div id="ec">
          <Echonours />
        </div>
        <div id="ee">
          <Eehonours />
        </div>
        <div id="it">
          <Ithonours />
        </div>
        <div id="me">
          <Mehonours />
        </div>
      </div>
    );
  }
}

export default SideNav;
