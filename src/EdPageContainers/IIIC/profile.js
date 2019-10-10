import React, { Component } from "react";
// import ImageOne from "../Components/Images/ImageOne";
import HeadingOne from "../../Components/Texts/HeadingOne";
import BodyThree from "../../Components/Texts/BodyThree";
import "./Research.css"
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
        title: "Better interaction between Technical Institutions and Industry is the need of the hour. Realizing the relevance and importance of this, Industry Institute Interaction Cell(IIIC)  was formed in VJCET and had intensified its activities. Dr. K. K. Rajan was appointed as Dean, Industry Institute Interaction Cell with effect from 02.05.2016. He had served the Department of Atomic Energy for 36 years in different capacities and had been holding the position of Director, Fast Reactor Technology Group and Distinguished Scientist at Indira Gandhi Centre for Atomic Research (IGCAR), Kalpakkam, till April 2016. He is an expert in Power Generation and Distribution, Instrumentation and Control, Nuclear Engineering, Fast Reactor Technology and Liquid Metal Technology. He had led an R&D team in IGCAR for more than three decades. Currently, he is the Independent Director of Nuclear Power Corporation of India limited. In VJCET, he also holds the post of the Nodal Officer IEDC and Chief Executive Officer Viswajyothi Business Incubation Centre (V-BIC).  "
    }
    ReserchBody2 = {
        instanceID: "ReserchBody1",
        title: "IIIC is looking for effective interaction between the industry, research organizations and reputed institutes so as to improve the quality of the technical education and enhance the employability of engineering graduates. It also helps to meet the needs of the industry. Industry Institute Interaction would provide an input to better teaching-learning processes, create awareness among the students about the environment of industry, provide real practical knowledge and self confidence to students. IIIC of VJCET has organized many activities in VJCET from its inception. "
    }
    
    InchargesHeading = {
        instanceID: "InchargesHeading",
        title: "Industry Institute Interaction Team  "
      };
    
   
    render() {
        return (
            <div className="HomePage">
                
                <p align="left"><HeadingOne data={this.ResearchHeading} /></p>
                {/* <ImageOne data={this.ResearchImg}></ImageOne> */}
                <BodyThree data={this.ReserchBody1} /><br />
                <BodyThree data={this.ReserchBody2} /><br />
                
                <HeadingThree data={this.InchargesHeading}></HeadingThree>
                <table id="tableformat">
                            <tr><th>NAME</th><th>DEP DESIGNATION</th><th>IIIC DESIGNATION</th></tr>
                            <tr><td>Dr K K Rajan</td><td>Convener and Dean, IIIC</td><td>Convener,  IIIC Coordination Committee</td></tr>
                            <tr><td>Mr Jiby Peter D’Cruz</td><td>Assistant Professor,ECE</td><td>Member, IIIC Coordination Committee</td></tr>
                            <tr><td>Ms  Remya  Paul </td><td>Assistant Professor, CSE</td><td>Member, IIIC Coordination Committee</td></tr>
                            <tr><td>Mr Rakesh Jose </td><td>Assistant Professor-ME</td><td>Member, IIIC Coordination Committee</td></tr>
                            <tr><td>Mrs Devina Vipinan </td><td>Assistant Professor, CE</td><td>Member, IIIC Coordination Committee</td></tr>
                            <tr><td>Mr Aneesh Kurian  </td><td>Assistant Professor, EEE</td><td>Member, IIIC Coordination Committee</td></tr>
                            <tr><td>Mrs. Diana Baby </td><td>Assistant Professor, IT</td><td>Member, IIIC Coordination Committee</td></tr>
                            <tr><td>Mr C Mavin</td><td>Placement Officer</td><td>Member, IIIC Coordination Committee</td></tr>
                </table>
                             
                
               
                
            </div>
        );
    }
}

export default Profile;