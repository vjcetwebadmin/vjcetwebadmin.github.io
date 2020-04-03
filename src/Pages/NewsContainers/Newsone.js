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
        title: "MHRD AICTE COVID19 Helpline: Request for your urgent support."
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
                    <HeadingOne data={this.NewsTitle}></HeadingOne>
                    <p>Please fill in the data using mobile :</p>
                    <p>  https://helpline.aicte-india.org/register_mobile.php  so that it will be immediately useful to our students in difficulty</p>
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