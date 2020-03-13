import React from "react";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
import ImageOne from "../../Components/Images/ImageOne";
//import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "../../FacilitiesPageContainers/styles.css";
import "../../Components/News/gallery.css";
import Header from "../../Components/Header&Footer/Header";
import Footer from "../../Components/Header&Footer/Footer";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay";
import HeadingOne from "../../Components/Texts/HeadingOne";
import "../../Components/Tables/tableformat.css";
//import ImageTwo from "../../Components/Images/imageTwo";
import "../../Components/tooltip.css";

/* import HeadingTwo from "../../Components/Texts/HeadingTwo";
import ImageOne from "../../Components/Images/ImageOne";

import "../styles.css"

import Header from "../../Components/Header&Footer/Header";
import Footer from "../../Components/Header&Footer/Footer";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay";
import HeadingOne from "../../Components/Texts/HeadingOne";
 */
class Newsone extends React.Component {
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


    NewsTitle = {
        instanceID: "NewsTitle",
        title: " CIRCULAR"
    };
    NewsTitle1 = {
        instanceID: "NewsTitle1",
        title: " REVISED ACADEMIC & EXAMINATION SCHEDULE"
    };
    
    NewsContent1={
        instanceID:"NewsContent1",
        title:" In view of the earnest efforts of the Government of Kerala to control the spread of CORONA Virus, it was directed to close down all educational Institutions of our state till 31 st March 2020. In line with the directions of our Government, the University has issued a circular to this effect. As a result, our students are losing three weeks of academic working days. Since many of our final year students are already campus placed, they are expected to report in the selected organizations before the end of August 2020. In view of these persisting emergency situation and considering the best academic interest of our students, the University would like to propose the following:"
    }
    NewsContent2={
        instanceID:"NewsContent2",
        title:" The University is trying to publish the final year B.Tech results before 20 th July 2020. In view ofthis tight schedule, all stakeholders are requested to fully cooperate with the University to tideover this situation."
    }
    NewsImagedata1 = {
        instanceID: "NewsImagedata1",
        image: "NewsImages/download.png",
        width: "5%"
    }
    NewsImagedata2 = {
        instanceID: "NewsImagedata2",
        image: "NewsImages/ME_fdp_back.jpg",
        width: "80%"
    }
    NewsImagedata3 = {
        instanceID: "NewsImagedata3",
        image: "NewsImages/Registernow.jpg",
        width: "20%"
    }
    

    render() {
        return (
            <React.Fragment>
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />

                <div className="contain">
                   
                    <div class="absolute">
                         
             </div>
                   
                    <p align='right'><a href="https://vjcet.org/downloads/news/KTU_Revised_schedule.pdf" target="_blank" rel="noopener noreferrer"><ImageOne data={this.NewsImagedata1} /></a></p>
                    
                    
                    <HeadingOne data={this.NewsTitle} className="Heading" />
                    <BodyOneJustified data={this.NewsContent1} />
                    {/* <iframe src="https://vjcet.org/downloads/news/fee notice.pdf" width="80%" height="500" title="Campus Map" align="center"></iframe> */}
                   {/*  <a href="https://vjcet.org/downloads/news/CEFDP.pdf"><ImageOne data={this.NewsImagedata3}></ImageOne></a> */}
                  <br/>
                  <br/>
                  
                  <br/>
                      <ol>
                          <li><p align='justify'>The period from 12.03.2020 to 31.03.2020 may be treated as study leave for the Universityexaminations as we are unable to allocate extra study period for the students thereafter.Hence, all students are requested to make use of this study period (12.03.2020 to31.03.2020) effectively.</p></li>
                          <li><p align='justify'>The examination calendar for this semester is slightly modified considering the emergencyof the prevailing situation.</p></li>
                          <li><p align='justify'>Faculty members are requested to rely on video lectures/online resources etc. during thisstudy period. Please carry out continuous evaluation/internal assessment through theavailable online platforms to substitute classroom instructions planned during the days ofclosure.</p></li>
                          <li><p align='justify'>Project seminars/viva voce/jury/presentation/evaluations etc. may be carried out throughdigital platforms, as far as possible. Students are to be encouraged to make videopresentations of their project works.</p></li>
                          <li><p align='justify'>Heads of Institutions are given the special privilege in this semester in adoptingappropriate measures to compensate the lost working days in consultation with faculty andtaking the students into confidence.</p></li>
                          <li><p align='justify'>Heads of Institutions are entitled to take appropriate actions in the conduct of internalexaminations, portions to be included in the internal examinations, attendance, duty leavesetc. as a special case in this semester.</p></li>
                          <li><p align='justify'>The results of the last odd semester examinations will be declared latest by 20.03.2020.Students are requested to effectively utilize this study period till 31 st March 2020 to cleartheir pending arrears.</p></li>
                          
                      </ol>
                        <br/>
                        <HeadingTwo data={this.NewsTitle1} className="Heading" />
                        <ul>
                            <li><p align='justify'>The last working day for the even semester will be 05.05.2020.</p></li>
                            <li><p align='justify'>Internal Marks/Attendance for B.Tech programmes is to be uploaded in the KTU portal onor before 13.05.2020. To avoid last minute rush, Institutions are requested to strictlycomply with the timeline for uploading as</p>
                                <ol>S2: 08.05.2020; S8: 11.05.2020; S6: 12.05.2020; S4: 13.05.2020.No extension will begiven if these dates are not complied with.</ol>
                                
                            </li>
                            <li><p align='justify'>The examination calendar already published will be shifted as such by seven days toenable the completion of the academic requirements. Accordingly, the date ofcommencement of examinations is shifted from 11.05.2020 to 18.05.2020. For details,please refer the revised examination schedule, which will be announced shortly.</p></li>
                            <li><p align='justify'>Any items, not mentioned in this circular, related with the academic activities of thissemester, are left to the discretion of the Heads of Institutions.</p></li>
                           
                        </ul>
                        <BodyOneJustified data={this.NewsContent2} />
                   
                    
                </div>
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default Newsone;