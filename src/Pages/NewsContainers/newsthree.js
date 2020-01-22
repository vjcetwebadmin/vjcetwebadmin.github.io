import React from "react";
//import HeadingTwo from "../../Components/Texts/HeadingTwo";
//import ImageOne from "../../Components/Images/ImageOne";
//import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "../../FacilitiesPageContainers/styles.css";
import "../../Components/News/gallery.css";
import Header from "../../Components/Header&Footer/Header";
import Footer from "../../Components/Header&Footer/Footer";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay";
import HeadingOne from "../../Components/Texts/HeadingOne";
import ImageOne from "../../Components/Images/ImageOne";
//import ImageTwo from "../../Components/Images/imageTwo";

/* import HeadingTwo from "../../Components/Texts/HeadingTwo";
import ImageOne from "../../Components/Images/ImageOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "../styles.css"

import Header from "../../Components/Header&Footer/Header";
import Footer from "../../Components/Header&Footer/Footer";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay"; 
import HeadingOne from "../../Components/Texts/HeadingOne";*/

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
        title: "University CSI STUDENT BRANCH RECIEVES “BEST ACCREDITED STUDENT BRANCH AWARD"
    };
    Newscontent = {
        instanceID: "Newscontent",
        title: " The 1st batch of KTU(2015-19) secured 91.82% pass"
    };
    
    NewsImagedata1 = {
        instanceID: "NewsImagedata1",
        image: "NewsImages/csi.jpg",
        width: "80%"
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
                   
                   <HeadingOne data={this.NewsTitle} />
                   <ImageOne data={this.NewsImagedata1} />
                  <p align="left"> The CSI Student Branch of Viswajyothi College of Engineering and Technology, one of the most vibrant branches of CSI Cochin Chapter was selected to receive the prestigious “Best Accredited Student Branch Award” in the year 2017-2018 and 2018-2019 by the Computer Society of India which has 73 chapters all over India, over 500 student branches, and more than 200000 members. The student branch receives “ The Best Accredited Student Branch” consecutively for 5 years is a noticeable achievement. The award was received by Head of Computer Science and Engineering Department Prof. Amel Austine from  Prof  Mike Hinchy, President of IFIP and Dr. R.K Vyas, Vicepresident CSI in the CSI Annual Convention 2020 at Kalinga Instituite of Industrial Technology, Bhuvaneswar on 18th January 2020.</p>
                   
                                
                    <br />                 

                    
                </div>
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default Newsone;