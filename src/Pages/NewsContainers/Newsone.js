import React from "react";
//import HeadingTwo from "../../Components/Texts/HeadingTwo";
//import ImageOne from "../../Components/Images/ImageOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "../../FacilitiesPageContainers/styles.css";

import Header from "../../Components/Header&Footer/Header";
import Footer from "../../Components/Header&Footer/Footer";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay";
import HeadingOne from "../../Components/Texts/HeadingOne";
//import ImageTwo from "../../Components/Images/imageTwo";
//import BodyThree from "../../Components/Texts/BodyThree";
//import ButtonTwo from "../../Components/Buttons/ButtonTwo";
import "./news.css";
/* import HeadingTwo from "../../Components/Texts/HeadingTwo";
import ImageOne from "../../Components/Images/ImageOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
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
        title: "edX MOOC registrations"
    };
    NewsContent1 = {
        instanceID: "NewsContent1",
        title: "Edx provides over 2000+ courses to choose from. Enroll & get started today! Advance your career with top universities across the globe. Learn new skills. Vjcet has acquired 5000 licenses for our students,alumni and faculty members to choose from content covering major areas such as Data analytics, Business management, Engineering and more."
    };
   
    
    NewsImagedata1 = {
        instanceID: "NewsImagedata1",
        image: "NewsImages/ME_fdp_front.jpg",
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
                    
                    <div className="bodyContainer">
                    <HeadingOne data={this.NewsTitle}></HeadingOne>
                    <BodyOneJustified data={this.NewsContent1}/>
                    <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSfblB7oBu2qiaJUkUipB68iI7DYhvd2IQXRp_2vlmIauMxV7Q/viewform" target="_blank" rel="noopener noreferrer">Register here for edX</a></p>
                    <p>Students can complete courses through June 30, 2020 </p>
                </div>
             
                                    
                    <br />                 

                  
            
             
 
             
           
                </div>
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default Newsone;