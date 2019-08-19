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
        title: "Caution Deposit & Refundable Deposit 2015-19 Batch"
    };
    
    NewsContent1={
        instanceID:"NewsContent1",
        title:" Caution Deposit and Refundable Deposit of 2019 passing out students will be returned on the following dates"
    }
    NewsImagedata1 = {
        instanceID: "NewsImagedata1",
        image: "NewsImages/Rank.jpg",
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
                   
                    <div class="absolute">
                         
             </div>
                    <HeadingOne data={this.NewsTitle} className="Heading" />
                    <BodyOneJustified data={this.NewsContent1} />   
                    <br /> 
                    
                    <table border="1" id="tableformat">
                        <tbody>
                        <th>Branch</th><th>Date</th>
                        <tr>
                            <td>CE</td><td>22.08.2019</td>
                        </tr>
                        <tr>
                            <td>CSE</td><td>24..08.2019</td>
                        </tr>
                        <tr>
                            <td>ECE</td><td>26.08.2019</td>
                        </tr>
                        <tr>    
                            <td>EEE</td><td>27..08.2019</td>
                        </tr>
                        <tr>
                            <td>ME</td><td>29.08.2019</td>
                        </tr>
                        <tr>             
                            <td>IT</td><td>30.08.2019</td>
                        </tr>
                       </tbody>
                    </table>  
                                
                    <br />                 

                    
                </div>
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default Newsone;