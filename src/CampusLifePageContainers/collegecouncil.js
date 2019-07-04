import React from "react";

import "../Components/Tables/tableformat.css";

import BodyOneJustified from "../Components/Texts/BodyOneJustified";
import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";
import HeadingOne from "../Components/Texts/HeadingOne";
import HeadingTwo from "../Components/Texts/HeadingTwo";
import HeadingFour from "../Components/Texts/HeadingFour";

class collegecouncil extends React.Component {
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


    CollegecouncilTitle = {
        instanceID: "CollegecouncilTitle",
        title: "College Council 2018-19"
    };
    MajoreventsTitle = {
        instanceID: "MajoreventsTitle",
        title: "Major Events"
    };
    EventTitle1 = {
        instanceID: "EventTitle1",
        title: "1. Election 2016"
    };
    EventTitle2 = {
        instanceID: "EventTitle2",
        title: "2. Students Council Oath taking Ceremony"
    };
    EventTitle3 = {
        instanceID: "EventTitle3",
        title: "3. Student Council Inauguration"
    };
    EventTitle4 = {
        instanceID: "EventTitle4",
        title: "4. Annual Sports- DRONA 2K19"
    };
    EventTitle5 = {
        instanceID: "EventTitle5",
        title: "5. Inter Collegiate Technical Fest – BODHI’19 and College Arts Festival- DRISHYA’19"
    };
    EventTitle6 = {
        instanceID: "EventTitle6",
        title: "6. Basket Ball Tournament-Magnum 2019"
    };
    EventContent1 = {
        instanceID: " EventContent1",
        title: "Students Council Election was held on 10th August 2018. Dr.Anoop CK (Associate Professor Civil Engineering Department) was the election returning officer. Twenty one student council members were elected."
    }
    EventContent2 = {
        instanceID: " EventContent2",
        title: "Oath taking ceremony of student’s council (2018-19) is conducted on 14th August 2018 at PTC seminar Hall in the presence of Principal. "
    }
    EventContent3 = {
        instanceID: " EventContent3",
        title: "Hon’ble Justice Cyriac Joseph inaugurated student’s council (18-19) on 9th October 2018.Students performed various cultural programs as part of the inauguration."
    }
    EventContent4 = {
        instanceID: " EventContent4",
        title: "Annual sports meet is conducted on 15th and 16th February 2019.Mr.Samson (Sub Inspector Muvattupuzha ) was  inaugurated the event in the presence of Manager and Principal."
    }
    EventContent51 = {
        instanceID: " EventContent51",
        title: "National Level Technical Fest (BODHI 2019) was conducted on 20th March and 21st March 2019. Mr. Sreedharan Radhakrishnan Nair (Managing Director,Team Front Line Ltd & Team e-Biz) inaugurated the program. Departments conducted various technical events as part of BODHI’19 and more than 1000 students were participated from other colleges. "
    }
    EventContent52 = {
        instanceID: " EventContent52",
        title: "College arts festival (DRISHYA – 2019) was held on 22nd March and 23rd March 2019.Mr.K.S. Harisankar (Playback Singer) was inaugurated the program. Different cultural competitions were conducted as part of DRISHYA- 2019. Inauguration Ceremony of BODHI’19 and DRISHYA’19 are held on 20th March 2019."
    }
    EventContent6 = {
        instanceID: " EventContent6",
        title: "Inter Collegiate Basket Ball Tournament was conducted on 19th to 21st March 2019.Mr.Sejin Mathew (Indian youth basket ball team caption) inaugurated the event in the presence Principal."
    }
    
   

    render() {
        return (
            <React.Fragment>
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />

                <div className="contain">
                    <HeadingTwo data={this.CollegecouncilTitle} className="Heading" />
                    
                    <br />
                   
                        <table id="tableformat">
                            <tr><th>Student Name</th><th>Post</th><th>Branch & Semester</th></tr>
                            <tr><td>CHAIRMAN</td><td>ADARSH MATHEW</td><td>S5 CE A</td></tr>
                            <tr><td>VICE CHAIRMAN</td><td>RAMYA KRISHNA R</td><td>S5 CS A</td></tr>
                            <tr><td>GENERAL SECRETARY</td><td>ANANDHU KRISHNA</td><td>S5 IT</td></tr>
                            <tr><td>UNIVERSITY UNION COUNCILLORS</td><td>REEMA RAJU</td><td>S3 CS B</td></tr>
                            <tr><td>UNIVERSITY UNION COUNCILLORS</td><td>MINNU AUGUSTINE</td><td>S3 EE B</td></tr>
                            <tr><td>EDITOR</td><td>RANI J MARY KURIAN</td><td>S5 CE B</td></tr>
                            <tr><td>ARTS CLUB SECRETARY</td><td>MOHID ANTONY JIMMY</td><td>S5 EC B</td></tr>
                            <tr><td>SPORTS CLUB SECRETARY</td><td>AKSHAY CHACKO</td><td>S5 CS A</td></tr>
                            <tr><td>LADY REPRESENTATIVES</td><td>VANI VAVACHAN</td><td>S5 EC B</td></tr>
                            <tr><td>LADY REPRESENTATIVES</td><td>SHALIN MARY KURIACHEN</td><td>S7 CS B</td></tr>
                            <tr><td>MBA ASSOCIATION SECRETARY</td><td>FRANKLIN GEORGE</td><td>T4 MBA</td></tr>
                            <tr><td>CS ASSOCIATION SECRETARY</td><td>TONY SABU</td><td>S 7 CS A</td></tr>
                            <tr><td>CE ASSOCIATION SECRETARY</td><td>ANTO PAUL</td><td>S5 CE B</td></tr>
                            <tr><td>ME ASSOCIATION SECRETARY</td><td>SAYANTH KUMAR C S</td><td>S5 ME B</td></tr>
                            <tr><td>EC ASSOCIATION SECRETARY</td><td>MEGHA SUKUMAR</td><td>S5 EC A</td></tr>
                            <tr><td>EEE ASSOCIATION SECRETARY</td><td>JISHNU V</td><td>S5 EE A</td></tr>
                            <tr><td>IT ASSOCIATION SECRETARY</td><td>MRUNALSEN P S</td><td>S7 IT</td></tr>
                            <tr><td>PG REPRESENTATIVE</td><td>VYSHAKH M K</td><td>T4 MBA</td></tr>
                            <tr><td>FIRST YEAR REPRESENTATIVE</td><td>ANDREWS SAJI</td><td>S1 EC B</td></tr>
                            <tr><td>SECOND YEAR REPRESENTATIVE</td><td>ARUN SHAJI</td><td>S3 EE A</td></tr>
                            <tr><td>THIRD YEAR REPRESENTATIVE</td><td>ANUSREE R</td><td>S5 EE A</td></tr>
                            <tr><td>FOURTH YEAR REPRESENTATIVE</td><td>AKSHAYA PRASHANTH K</td><td>S7 EE A</td></tr>
                            <tr><td>SCST REPRESENTATIVE</td><td>ATHIRA M BIJU</td><td>S5CEB</td></tr>

                            
                        </table>
                        <HeadingTwo data={this.MajoreventsTitle} className="Heading" />
                        <HeadingFour data={this.EventTitle1} className="Heading" />
                        <BodyOneJustified data={this.EventContent1} />
                        <HeadingFour data={this.EventTitle2} className="Heading" />
                        <BodyOneJustified data={this.EventContent2} />
                        <HeadingFour data={this.EventTitle3} className="Heading" />
                        <BodyOneJustified data={this.EventContent3} />
                        <HeadingFour data={this.EventTitle4} className="Heading" />
                        <BodyOneJustified data={this.EventContent4} />
                        <HeadingFour data={this.EventTitle5} className="Heading" />
                        <BodyOneJustified data={this.EventContent51} />
                        <BodyOneJustified data={this.EventContent52} />
                        <HeadingFour data={this.EventTitle6} className="Heading" />
                        <BodyOneJustified data={this.EventContent6} />
                         
                        
                </div>
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default collegecouncil;