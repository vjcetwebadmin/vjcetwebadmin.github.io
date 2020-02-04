import React from "react";
//import HeadingTwo from "../../Components/Texts/HeadingTwo";
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
        title: " Fee remittance 2nd and 4th semesters - academic year 2019-20"
    };
    
    NewsContent1={
        instanceID:"NewsContent1",
        title:" Applications are invited for the post of CV Camp Assistant in Viswajyothi College of Engineering and Technology on daily wages of Rs.645/-. Send in CVs to vjcet@vjcet.org on or before 24/12/2019"
    }
    NewsImagedata1 = {
        instanceID: "NewsImagedata1",
        image: "NewsImages/software developer.jpg",
        width: "100%"
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
                    <HeadingOne data={this.NewsTitle} className="Heading" />
                    <iframe src="https://vjcet.org/downloads/news/fee notice.pdf" width="80%" height="500" title="Campus Map" align="center"></iframe>
                   {/*  <a href="https://vjcet.org/downloads/news/CEFDP.pdf"><ImageOne data={this.NewsImagedata3}></ImageOne></a> */}
                  <br/>
                  <br/>
                  <ul>Payment Modes
                  <br/>
                  <br/>
                      <ol><a href="https://vjcet.org/downloads/news/SIBChallan.pdf" target="_blank" rel="noopener noreferrer">Download Chellan</a></ol>
                      <ol><a href="https://southindianbank.in/feepayment" target="_blank" rel="noopener noreferrer">Online Payment</a></ol>
                  </ul>
                   
                    
                </div>
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default Newsone;