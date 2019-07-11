import React, { Component } from "react";
import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";
// import ImageOne from "../Components/Images/ImageOne";
import HeadingOne from "../Components/Texts/HeadingOne";
import BodyThree from "../Components/Texts/BodyThree";
import BodyOneJustified from "../Components/Texts/BodyOneJustified";
import "./Research.css"
import ButtonTwo from "../Components/Buttons/ButtonTwo";
import "../Components/Tables/tableformat.css";
import HeadingThree from "../Components/Texts/HeadingThree";
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
        title: "Activities"
    }
    ReserchBody1 = {
        instanceID: "ReserchBody1",
        title: "Some major initiatives taken by Center for Research & development(CRD) are"
    }
    ReserchBody2 = {
        instanceID: "ReserchBody2",
        title: "The project “KISSAN_DHO (Pineapple Planter Machine) by Mr. Sanil Cyriac Mathew, Mr. Sachu Sivaram S, Mr. Jemt K Shaju and Mr. Paoulose Benny Students of S8 ME B selected for a financial support of Rs. 20000/- by KSCSTE TECH FEST INNOVATE 2019. Project Guide: Basil Baby, Assistant professor, MED."
    }
    ReserchBody3 = {
      instanceID: "ReserchBody3",
      title: "The project “Fully Automated Weed Control” by Mr. Aldrin Baby, Mr. Ameer E A, Mr. Kevin G A and Mr. Sagar Vincent, Students of S6 ME A selected for a financial support of Rs. 20000/- by KSCSTE TECH FEST INNOVATE 2019. Project Guide: Mr. Unnikrishnan T.G., Assistant professor, MED."
  }
  ReserchBody4 = {
    instanceID: "ReserchBody4",
    title: "The project “V -REX Fork lifter” by Mr. Albin Paul,  Mr. EldhoseRaju, Mr. Harikrishnan A S and Mr. Jipil P Chettoor, Students of S6 ME B selected for a financial support of Rs. 20000/- by KSCSTE TECH FEST INNOVATE 2019. Project Guide: Mr. EldhoseKurian, Assistant professor, MED."
}
ReserchBody5 = {
  instanceID: "ReserchBody5",
  title: "Dr. K . K Rajan and Dr. B Aruna, “Development of level sensor for Lead-Lithium loop system”, Grant Amount: 33 Lakhs,  Funding Agency: Dept. of Atomic Energy, BRNS:"
}
ReserchBody6 = {
  instanceID: "ReserchBody6",
  title: "Dr   K KRajan, Prof. EEE and Dean III &Shri K Vinoj “Development of Lead - Lithium to Helium Heat Exchanger and Circulation Type Electrical Heater for Heat Exchanger Test Facility”, BRNS  Govt. of India , Grant Amount: 23 Lakhs"
}
ReserchBody7 = {
  instanceID: "ReserchBody7",
  title: "Second National conference titled “National Conference on Emerging Vistas of Engineering and Management” is conducted on March 29 and 30, 2019."
}
ReserchBody8 = {
  instanceID: "ReserchBody8",
  title: "Sanction is accorded by KTU to conduct a sponsored FDP titled “Tools, techniques and models for scientific research”. Coordinators: Dr. Joby George, Dr. Sajan T. John."
}
ReserchBody9 = {
  instanceID: "ReserchBody9",
  title: "An expert Talk on Environmental Problems of Today and How to Tackle? for S1 ME students, 23-10-18, Resource person: Dr. Shaju Thomas, Retired Professor and former HOD of the Postgraduate Dept. of Zoology, Nirmala College."
}
ReserchBody10 = {
  instanceID: "ReserchBody10",
  title: "An expert talks on “Cyber Security” for all mechanical engineering students on 7-11-18. Resource person: Mr. Thalhath PM, Cyber cell officer Aluva."
}
ReserchBody11 = {
  instanceID: "ReserchBody11",
  title: "An alumni talk on “Marine Engineering” for S5 & S7 students on 12th November 2018. Resource person was Mr.Mathaikutty Sunny, 3rd Engineer, Anglo Eastern Ship Management Ltd."
}
ReserchBody12 = {
  instanceID: "ReserchBody12",
  title: "Lecture Meet   on ‘AUTOMOTIVE ELECTRONICS 2020’, Date: 22-11-2018, Resource Person: Mr. KasirajaThangapandian Software Project Manager, Visteon Technical and Services Centre Pvt Ltd, Chennai and Joint Secretary of SAEINDIA Southern Section."
}
ReserchBody13 = {
  instanceID: "ReserchBody13",
  title: "Ist INTERNATIONAL SYMPOSIUM ON INNOVATIVE ENGINEERING PARAGDIMS by SES Department of Mechanical engineering and SES jointly organized international symposium on innovative engineering Paragdims on 3rd – 21st December 2018, Resource Person: Mr. RALPH SCHNEIDER."
}
ReserchBody14 = {
  instanceID: "ReserchBody14",
  title: "An expert talk on “Recent Advances in IC Engines and its Testing”, Date: 01-02-19, Resource Person: Mr. JineshVinayaChandran, HOD, and Department of Automotive Engineering, Little Flower Engineering Institute, Kalamassery."
}
ReserchBody15 = {
  instanceID: "ReserchBody15",
  title: "An expert talk on “Modern trends in Coal – fired Thermal power plants, Date: 13-02-19, Resource Person:   Mr. SushilCherian, Co- Founder and Vice President, Kalki Communication Technologies Pvt Ltd, Kochi."
}
ReserchBody16 = {
  instanceID: "ReserchBody16",
  title: "An invited talk on “Applications of Multimedia in Cinema” was conducted for S5 IT students by Mr. Arun Boss, (Cockroach n’ Cocktail, Chennai) on 15/10/2018 ."
}
ReserchBody17 = {
  instanceID: "ReserchBody17",
  title: "An expert talk on “Introduction to MATLAB” was taken for the students of S7 and S5 IT by Dr. Karthikeyan B., Associate professor, IT Department, VJCET on 16/10/2018"
}
ReserchBody18 = {
  instanceID: "ReserchBody18",
  title: "An expert talk on “  Research challenges in MANETS ”was conducted for the students of S7 IT by Mr. Basil Baby, Assistant professor, CSE Department, VJCET on 23/11/2018 in association with R&D and ISTE"
}
ReserchBody19 = {
  instanceID: "ReserchBody19",
  title: "National Conference: National Conference on Latest Trends in Engineering Computational Methods on March 19th. 11 papers published on this conference. Conference is chaired by Dr. Jubilant. J. Kizhakethottam."
}
ReserchBody20 = {
  instanceID: "ReserchBody20",
  title: "National Seminar: - 2 Day National Seminar on Computer Networking: Scopes and Challenges in Engineering & Technology on 14th and 15th of march 2019."
}
ReserchBody21 = {
  instanceID: "ReserchBody21",
  title: " Conducted a Technical Talk on career guidance and counselling support for S6 CS students by Mr.Baazil Thampi, Rubix Academy on 17th January 2018."
}
ReserchBody22 = {
  instanceID: "ReserchBody22",
  title: "Conducted an FDPon“Frontiers of Computer Applications” by Dr.Resmi N G (Faculty, MITS),Mr.Baazil Thampi,Rubix Academy from 16th July –20th July 2018."
}
ReserchBody23 = {
  instanceID: "ReserchBody23",
  title: "SES- International Symposium on Databaseswas conducted for CSE & IT faculty by Mr. Jurgen Gau from 3-10th DECEMBER, 2018."
}
ReserchBody24 = {
  instanceID: "ReserchBody24",
  title: "FDP on “Embedded Systems and Data Mining” for CSE, IT, ECE faculty by Dr. Aji Joy,MACE,Dr.Resmi N.G,MITS from 7 - 11thJanuary 2019."
}
ReserchBody25 = {
  instanceID: "ReserchBody25",
  title: "Conducted a Motivational Talk on What after B.Tech, for S8 CSE by Mr.Baazil Thampy,Research Scholar,CUSAT on 7th February 2019."
}
ReserchBody26 = {
  instanceID: "ReserchBody26",
  title: "Workshop on “Recent Application Developments and Trends in IT Sector” for S6 CSE by Mr.Fayis, CEO, BITSFORGE Technology, Kochi on 8th February 2019."
}
ReserchBody27 = {
  instanceID: "ReserchBody27",
  title: "React Native: Mobile Application Development Framework for S8 CSE by Mr.Georgekutty George, Managing Director, Lookins Soft Pvt Ltd on 23rd February 2019."
}
ReserchBody28 = {
  instanceID: "ReserchBody28",
  title: "Advanced Engineering Concepts for S6 CSA by Baazil Thampy, Rubix Academy on 13th March 2019."
}
ReserchBody29 = {
  instanceID: "ReserchBody29",
  title: "Latest Trends in Networking and System Administration for S8 CSA by Mr.Dayas Baby, Mind curve Technology Solution was conducted on 14th March 2019."
}
ReserchBody30 = {
  instanceID: "ReserchBody30",
  title: "Server side operations and Linux administrations for S2 CSA & CSB by Mr. TonyTomy, System Engineer TCS was conducted on 18th March 2019."
}
ReserchBody31 = {
  instanceID: "ReserchBody31",
  title: "One day “Project Idea Fest” competition coordinated by department of ECE on 15 November 2018."
}
ReserchBody32 = {
  instanceID: "ReserchBody32",
  title: "One day workshop on “IoT based system design” coordinated by department of ECE on 20 November 2018."
}
ReserchBody33 = {
  instanceID: "ReserchBody33",
  title: "One week faculty development programme on “Computer Architecture & Data Communication” from 17-21 December 2018 organized by department of ECE"
}
ReserchBody34 = {
  instanceID: "ReserchBody34",
  title: "One day workshop on “Robotics & FABLAB” for higher secondary students on 2nd March 2019."
}
ReserchBody35 = {
  instanceID: "ReserchBody35",
  title: "Two day “Android Workshop” conducted for S6 ECEA students during 29-30 March 2019 by Rabbitsquare."
}
ReserchBody36 = {
  instanceID: "ReserchBody36",
  title: "Two day “Android Workshop” conducted for S6 ECEB students during 05-06 April 2019 by Rabbitsquare."
}
ReserchBody37 = {
  instanceID: "ReserchBody37",
  title: "Technical Quiz Competition on October 4th 2018 in association with the R&D and ECE Association.  Aleesha Mariam Chacko and Sreehari S were the Quiz Masters."
}

    
    render() {
        return (
            <div className="HomePage">
                
                <HeadingOne data={this.ResearchHeading}></HeadingOne>
                {/* <ImageOne data={this.ResearchImg}></ImageOne> */}
                <BodyThree data={this.ReserchBody1} /><br />
                
                 <div className="inner-para">
                 <ul>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchBody1} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody2} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody3} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody4} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody5} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchBody6} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody7} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody8} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody9} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody10} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchBody11} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody12} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody13} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody14} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody15} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchBody16} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody17} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody18} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody19} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody20} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchBody21} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody22} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody23} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody24} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody25} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchBody26} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody27} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody28} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody29} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody30} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody31} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody32} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody33} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody34} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody35} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody36} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody37} />
                            </p>
                        </li>
                    </ul>

                   </div>                              
            </div>
           
        );
    }
}

export default Profile;