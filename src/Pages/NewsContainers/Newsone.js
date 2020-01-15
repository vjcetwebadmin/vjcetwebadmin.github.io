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
        title: "Spark AR Program"
    };
    NewsContent1 = {
        instanceID: "NewsContent1",
        title: "Defaulters of tution fee are hereby informed that date of payment is extended up to 07-09-2019 with a fine of Rs. 500/-. Please pay in time, no more extension of date will be permitted"
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
                    
                    <iframe src="https://vjcet.org/downloads/news/Spark AR Open Program - Brochure.pdf" width="90%" height="800" title="Campus Map" align="center"></iframe>
                    <iframe src="https://vjcet.org/downloads/news/Spark AR Open Program - Whatsapp Creative.pdf" width="90%" height="800" title="Campus Map" align="center"></iframe>
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