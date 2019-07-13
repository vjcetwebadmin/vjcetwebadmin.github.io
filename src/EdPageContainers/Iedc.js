import React, { Component } from "react";
import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";
// import ImageOne from "../Components/Images/ImageOne";
import HeadingOne from "../Components/Texts/HeadingOne";
import BodyThree from "../Components/Texts/BodyThree";
import BodyOneJustified from "../Components/Texts/BodyOneJustified";
import "../Pages/Research.css";
import "../Components/Tables/tableformat.css";
import HeadingThree from "../Components/Texts/HeadingThree";

class Iedc extends Component {
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
    IedcHeading = {
        instanceID: "IedcHeading",
        title: "Innovation and Entrepreneurship Development Centrer"
    }
    IedcBody1 = {
        instanceID: "IedcBody1",
        title: "Innovation and Entrepreneurship Development Centre (IEDC) was established and effectively functioning    in  Viswajyothi College  of  Engineering and  Technology (VJCET)  for the last three cadmic years.  IEDC is being promoted in educational institutions to develop institutional mechanism to create entrepreneurial culture in Science &Technology ( S&T)  academic institutions and to foster techno-entrepreneurship for generation of wealth and employment by S&T persons.  The mission of the IEDCs is to develop institutional mechanism to create entrepreneurial culture in academic institutions to foster growth of innovation and entrepreneurship amongst the faculty and students . In VJCET Dr K K Rajan, Professor EEE  and Dean Industry Institute Interaction was appointed as the nodal officer for IEDC activities. Shri Robin Augstine  Assistant professor  department S & H is the  assistant Nodal officer. An  IEDC executive Committee is constituted      with  participation of students and faculty members  from  all the  departments.   Following are the members of the  IEDC  executive committee  for the year 2018-19. The  IEDC   of  VJCET is  recognised    by Kerala Start-up Mission(KSU)   and  all activities are carried out   with   the  guidance  and  support of  them."
    }
    InchargesHeading = {
        instanceID: "InchargesHeading",
        title: "IEDC Team"
      };
    ObjectiveHeading = {
        instanceID: "ObjectiveHeading",
        title: "Objectives"
      };
      FunctionHeading = {
        instanceID: "FunctionHeading",
        title: "Functions of IEDC"
      };
    ReserchBody2 = {
        instanceID: "ReserchBody2",
        title: "Some major initiatives taken by CRD are :"
    }
    ReserchWork1 = {
        instanceID: "ReserchWork1",
        title: "To act as an institutional mechanism for providing various services including information on all aspects of enterprise building to budding S&T entrepreneurs. "
    }
    ReserchWork2 = {
        instanceID: "ReserchWork2",
        title: "To create Entrepreneurial culture in the Parent Institution and other institutions in the region and to promote the objectives of NSTEDB, including programmes related to women and weaker sections of the society."
    }
    ReserchWork3 = {
        instanceID: "ReserchWork3",
        title: "To inculcate a culture of innovation driven entrepreneurship through student projects. "
    }
    ReserchWork4 = {
        instanceID: "ReserchWork4",
        title: "To catalyse and promote development of S&T knowledge-based enterprises and promote employment opportunities in the innovative areas. "
    }
    ReserchWork5 = {
        instanceID: "ReserchWork5",
        title: "To respond effectively to the emerging challenges and opportunities both at national and international level relating to SMEs and micro enterprises. "
    }
    ReserchWork6 = {
        instanceID: "ReserchWork1",
        title: "To organise Entrepreneurship Awareness Camps, Entrepreneurship Development Programmes, Faculty Development Programmes and Skill Development Programmes in the college/institution for the benefit of S&T persons. "
    }
    ReserchWork7 = {
        instanceID: "ReserchWork2",
        title: "To initiate   innovative student projects each year for new innovative product development. "
    }
    ReserchWork8 = {
        instanceID: "ReserchWork3",
        title: "To organize Business Plan Competitions every year. "
    }
    ReserchWork9 = {
        instanceID: "ReserchWork4",
        title: "To guide and assist prospective entrepreneurs on various aspects such as preparing project reports, obtaining project approvals, loans and facilities from agencies of support system, information on technologies, etc. "
    }
    ReserchWork10 = {
        instanceID: "ReserchWork5",
        title: "To arrange interaction with entrepreneurs and create a mentorship scheme for student entrepreneurs. "
    }
    ReserchWork11 = {
        instanceID: "ReserchWork11",
        title: "In VJCET every  year   college level idea fest is conducted and  this year   25 teams were participated in the   contest.  A panel  of experts evaluated   the  ideas  during idea presentation by students and  six projects were selected for  prototype development and financial support.   Financial support  to the maximum extent of Rs. 5000 were given to selected teams.      For  KSU  idea fest  2019  there   were   63 applicants from VJCET and  8  teams were selected for final presentation.  Five teams selected for  financial and technical  support in  2018  idea fest and had   received the KSU grant this year for prototype development.  In addition IEDC has  conducted few  work shops, technical talks and  Industry  interaction programmes during this academic year. Students  and faculty members   participated   in  IEDC summit and  other  programmes organised by Kerala start-up mission at  various  places. "
    }
    render() {
        return (
            <div className="HomePage">
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />
                <HeadingOne data={this.IedcHeading} />
                {/* <ImageOne data={this.ResearchImg}></ImageOne> */}
                <BodyThree data={this.IedcBody1} /><br />
                <HeadingThree data={this.InchargesHeading} /> 
                
                <div className="inner-para">
                <table id="tableformat">
                            <tr><th>Name</th><th>Dept. Designation </th><th>IEDC Designation</th></tr>
                            <tr><td>Dr.K K Rajan</td><td>Prof. EEE and Dean IIIC</td><td>Nodal officer, IEDC</td></tr>
                            <tr><td>Mr. Robin  Augustine</td><td>Asst. Professor, S & H</td><td>Assistant Nodal officer, IEDC</td></tr>
                            <tr><td>Mrs. Nisa Ann Mathew</td><td>Asst. Professor, CE</td><td>CE  Dept. Coordinator, IEDC </td></tr>
                            <tr><td>Mrs. Rini Simon</td><td>Asst. Professor, CSE</td><td>CSE Dept. Coordinator, IEDC </td></tr>
                            <tr><td>Mrs. Anu Rani Philip</td><td>Asst. Professor, ECE</td><td>ECE Dept. Coordinator,IEDC</td></tr>
                            <tr><td>Mr. Jomu  M George </td><td>Asst. Professor, EEE</td><td>EEE Dept. Coordinator, IEDC</td></tr>
                            <tr><td>Dr. Sheela V K</td><td>Asst. Professor, IT</td><td>IT  Dept. Coordinator,IEDC</td></tr>
                            <tr><td>Mr. Basil Baby </td><td>Asst. Professor, ME</td><td>ME  Dept. Coordinator,IEDC</td></tr>
                            <tr><td>Mr. Mavin C</td><td>Placement officer</td><td>Placement and Training Cell</td></tr>
                            <tr><td>Shri. Leo Cherian</td><td>Student S7 CSE B</td><td>Chief Executive officer</td></tr>
                            <tr><td>Shri. Akhil Biju</td><td>Student S5 EEE A</td><td>Chief Operating officer</td></tr>
                            <tr><td>Shri. Basil Varghese</td><td>Student S5 CE A</td><td>Chief Marketing officer</td></tr>
                            <tr><td>Kum. Vani Vavachan</td><td>Student S5 ECE A</td><td>Chief Finance officer</td></tr>
                            <tr><td>Shri. Dipu Jo George</td><td>Student S7 IT</td><td>Chief Technical officer</td></tr>
                            <tr><td>Shri. Eldhose Raju </td><td>Student S5 ME B</td><td>Chief Creative Officer </td></tr>
                            <tr><td>Shri. Sanil Cyriac Mathew</td><td>Student S7 ME B</td><td>Chief Social Officer</td></tr>
                </table> 
                <HeadingThree data={this.ObjectiveHeading} /> 
                    <ul>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork1} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork2} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork3} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork4} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork5} />
                            </p>
                        </li>
                    </ul>
                    <HeadingThree data={this.FunctionHeading} /> 
                    <ul>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork6} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork7} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork8} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork9} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork10} />
                            </p>
                        </li>
                    </ul>
                    <p>
                                <BodyOneJustified data={this.ReserchWork11} />
                            </p>
                </div>
                
                
                
                
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (
                    <MenuOverlay closeMenuFunction={this.closeMenu} />
                ) : (
                        ""
                    )}
            </div>
        );
    }
}

export default Iedc;