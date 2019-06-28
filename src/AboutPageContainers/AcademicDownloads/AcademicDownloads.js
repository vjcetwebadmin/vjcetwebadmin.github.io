import React, { Component } from "react";
import "./ResourcesGroup.css";
import ResourcesList from "./LocalContainers/ResourcesList";
import HeadingOne from "../../Components/Texts/HeadingOne";

class ResourcesGroup extends Component {
  ResourcesGroupTitle = {
    instanceID: "ResourcesGroupTitle",
    title: "Syllabus and Curriculum Plan"
  };

  ResourceListTwo = {
    instanceID: "ResourceListTwo",
    listID: "One",
    title: "First Year",
    icon: "Icons/firstyearsyllabuslogo.svg",
    filePath: "https://vjcetwebadmin.github.io/downloads/firstyearsyllabus.zip"
  };

  ResourceListThree = {
    instanceID: "ResourceListThree",
    listID: "Two",
    title: "Civil Engineering",
    icon: "Icons/civilsyllabuslogo.png",
    filePath: "https://vjcetwebadmin.github.io/downloads/cesyllabus.zip"

  };

  ResourceListFour = {
    instanceID: "ResourceListFour",
    listID: "Three",
    title: "Computer Science & Engineering",
    icon: "Icons/csesyllabuslogo.svg",
    filePath: "https://vjcetwebadmin.github.io/downloads/csesyllabus.zip"

  };

  ResourceListFive = {
    instanceID: "ResourceListFive",
    listID: "Four",
    title: "Electronics & Communications Engineering",
    icon: "Icons/ecesyllabuslogo.svg",
    filePath: "https://vjcetwebadmin.github.io/downloads/ecesyllabus.zip"
  };

  ResourceListSix = {
    instanceID: "ResourceListSix",
    listID: "Five",
    title: "Electrical & Electronics Engineering",
    icon: "Icons/eeesyllabuslogo.svg",
    filePath: "https://vjcetwebadmin.github.io/downloads/eeesyllabus.zip"
  };

  ResourceListSeven = {
    instanceID: "ResourceListSeven",
    listID: "Five",
    title: "Information Technology",
    icon: "Icons/itsyllabuslogo.png",
    filePath: "https://vjcetwebadmin.github.io/downloads/itsyllabus.zip"

  };
  ResourceListEight = {
    instanceID: "ResourceListEight",
    listID: "Five",
    title: "Mechanical Engineering",
    icon: "Icons/mesyllabuslogo.svg",
    filePath: "https://vjcetwebadmin.github.io/downloads/mesyllabus.zip"

  };
  ResourceListOne = {
    instanceID: "ResourceListOne",
    listID: "Five",
    title: "Curriculum Plan",
    icon: "Icons/calender.svg",
    filePath: "https://vjcetwebadmin.github.io/downloads/Academic_Calander_even_19.pdf"

  };

  render() {
    return (
      <div className="ResourcesGroup">
        <HeadingOne data={this.ResourcesGroupTitle} />
        <div className="ResourcesContainer" id="AboutPageResourcesContainer">
          <ResourcesList data={this.ResourceListOne} />
          <ResourcesList data={this.ResourceListTwo} />
          <ResourcesList data={this.ResourceListThree} />
          <ResourcesList data={this.ResourceListFour} />
          <ResourcesList data={this.ResourceListFive} />
          <ResourcesList data={this.ResourceListSix} />
          <ResourcesList data={this.ResourceListSeven} />
          <ResourcesList data={this.ResourceListEight} />
        </div>
      </div>
    );
  }
}

export default ResourcesGroup;
