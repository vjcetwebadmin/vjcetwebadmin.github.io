import React, { Component } from "react";
import Header from "../../Components/Header&Footer/Header";
import Footer from "../../Components/Header&Footer/Footer";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay";
// import ImageOne from "../Components/Images/ImageOne";
import HeadingOne from "../../Components/Texts/HeadingOne";
import BodyThree from "../../Components/Texts/BodyThree";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "./Research.css"
import ButtonTwo from "../../Components/Buttons/ButtonTwo";
import "../../Components/Tables/tableformat.css";
import HeadingThree from "../../Components/Texts/HeadingThree";
//import Profile from "./csi";

class Profile extends Component {
    state = { showMenu: false };
    openMenu = () => {
        console.log("opening Menu");
        this.setState({ showMenu: true });
    };
    closeMenu = () => {
        this.setState({ showMenu: false });
    };

    HomePageHeader = {
        instanceID: "HomePageHeader"
    };
    HomePageFooter = {
        instanceID: "HomePageFooter"
    };
    HomePageVisionSection = {
        instanceID: "HomePageVisionSection"
    };
    HomePageFacilitiesSection = {
        instanceID: "HomePageFacilitiesSection"
    };
    // ResearchImg = {
    //     instanceID: "ResearchImg",
    //     image: "cover2-1.jpg",
    //     width: "93%"
    // }
    ResearchHeading = {
        instanceID: "ResearchHeading",
        title: "Profile"
    }
    ReserchBody1 = {
        instanceID: "ReserchBody1",
        title: "Better interaction between Technical Institutions and Industry is the need of the hour. Realizing the relevance and importance of Industry Institute Interaction (III)  Cell has been formed in 2016 in VJCET and intensified the activities.   Dr KK Rajan was appointed as Dean Industry Institute Interaction Cell with effect from 02.05.2016. Dr Rajan has served Department of Atomic Energy for 36 years in different capacities and was holding the position of Director, Fast Reactor Technology Group and Distinguished Scientist at Indira Gandhi Centre for Atomic Research Kalpakkam till April 2016. He is an expert in Instrumentation and control, Fast Reactor Technology, Liquid metal technology and led an R&D team for more than three decades. IIIC was looking for interaction between industry, research organizations and institute so as to improve the quality of technical education to meet the needs of the industry and enhance the employability of engineering graduates. Industry Institute Interaction would provide input to better teaching-learning processes, create awareness among the students about the environment of industry, provide real practical knowledge and self confidence to students. IIIC of VJCET has organized many activities in VJCET from its inception. "
    }
    
    InchargesHeading = {
        instanceID: "InchargesHeading",
        title: "Office-Bearers "
      };
    
   
    render() {
        return (
            <div className="HomePage">
                
                <HeadingOne data={this.ResearchHeading}></HeadingOne>
                {/* <ImageOne data={this.ResearchImg}></ImageOne> */}
                <BodyThree data={this.ReserchBody1} /><br />
                
                <HeadingThree data={this.InchargesHeading}></HeadingThree>
                <table id="tableformat">
                            <tr><th>NAME</th><th>DESIGNATION</th></tr>
                            <tr><td>Dr K K Rajan</td><td>Convener and Dean, IIIC</td></tr>
                            <tr><td>Mr Jiby Peter D’Cruz</td><td>Assistant Professor,ECE</td></tr>
                            <tr><td>Ms  Remya  Paul </td><td>Assistant Professor, CSE</td></tr>
                            <tr><td>Mr Rakesh Jose </td><td>Assistant Professor-ME</td></tr>
                            <tr><td>Mr Daniel A V</td><td>Assistant Professor, CE</td></tr>
                            <tr><td>Mr C Mavin</td><td>Placement Officer</td></tr>
                </table>
                             
                
               
                
            </div>
        );
    }
}

export default Profile;