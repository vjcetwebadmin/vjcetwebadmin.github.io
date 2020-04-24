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
//import ImageOne from "../../Components/Images/ImageOne";
//import ImageTwo from "../../Components/Images/imageTwo";

/* import HeadingTwo from "../../Components/Texts/HeadingTwo";
import ImageOne from "../../Components/Images/ImageOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "../styles.css"

import Header from "../../Components/Header&Footer/Header";
import Footer from "../../Components/Header&Footer/Footer";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay"; 
import HeadingOne from "../../Components/Texts/HeadingOne";*/

class Newsthree extends React.Component {
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
        title: "Circular from AICTE regarding Study from home through NDLI"
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
                   
                  <p align="left"> Greetings from All India Council for Technical Education..!!</p>
                  <p align="left">It is to inform you that to help the student community in the difficult situation arising out of the suspension of physical classes and closure of physical libraries arising out of COVID-19 Lockdown, the National Digital Library of India (NDLI) has initiated specially designed collections of e-resources for a specific group of students. </p>
                  <p align="left">Please visit https://www.ndl.gov.in/ or https://ndl.iitkgp.ac.in/ to access these resources free of cost.</p>
                  <p align="left">NDLI is constantly updating these collections and features. Communication about these enhancements is being sent periodically through NDL India social networking pages. Stay tuned to these channels.</p>
                  <p align="left">Facebook:https://www.facebook.com/NDLIndia</p>
                  <p align="left">Twitter:https://twitter.com/NDLIndia</p>
                  <p align="left">Instagram:https://www.instagram.com/NDLIndia/</p>
                  <p align="left">Linkedin:https://in.linkedin.com/company/ndlindia</p>
                  <p align="left">AICTE requests you to spread this information among your faculty and students to get benefited from NDLI. </p>
                  <p align="left">Stay safe, take care of your near and dear ones and continue your study effectively during this unprecedented challenging time the entire human race is facing. Together, we shall learn, share, grow and get through this as a nation.</p>
                  <p align="left">Best Regards,</p>
                  <p align="left">AICTE </p>
                                
                    <br />                 

                    
                </div>
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default Newsthree;