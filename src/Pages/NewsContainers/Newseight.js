import React from "react";
//import HeadingTwo from "../../Components/Texts/HeadingTwo";
import ImageOne from "../../Components/Images/ImageOne";
//import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "../../FacilitiesPageContainers/styles.css";
import "../../Components/News/gallery.css";
import Header from "../../Components/Header&Footer/Header";
import Footer from "../../Components/Header&Footer/Footer";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay";
import HeadingOne from "../../Components/Texts/HeadingOne";
//import ImageOne from "../../Components/Images/ImageOne";
import ImageTwo from "../../Components/Images/imageTwo";

/* import HeadingTwo from "../../Components/Texts/HeadingTwo";
import ImageOne from "../../Components/Images/ImageOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "../styles.css"

import Header from "../../Components/Header&Footer/Header";
import Footer from "../../Components/Header&Footer/Footer";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay"; 
import HeadingOne from "../../Components/Texts/HeadingOne";*/

class Newseight extends React.Component {
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
        title: " KTU - Siemens Webinar | Details"
    };
    Newscontent = {
        instanceID: "Newscontent",
        title: " The 1st batch of KTU(2015-19) secured 91.82% pass"
    };
    
    NewsImagedata1 = {
        instanceID: "NewsImagedata1",
        image: "NewsImages/Mock_Test_Banner.jpg",
        width: "80%"
    }
    NewsImagedata2 = {
        instanceID: "NewsImagedata2",
        image: "NewsImages/ME_fdp_back.jpg",
        width: "80%"
    }
    NewsImagedata3 = {
        instanceID: "NewsImagedata3",
        image: "NewsImages/attend_exam.png",
        width: "5%"
    }
    

    render() {
        return (
            <React.Fragment>
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />

                <div className="contain">
                   <ImageOne data={this.NewsImagedata1}/>
                   <br/>
            
                   <table id="tableformat">
                        <tr><th colspan="2">Level 1</th></tr>
                            <tr><td>Paper I-Physics & Chemistry</td><td><a href="https://forms.gle/hViAEs6GohkFEfbaA" data-toggle="tooltip" title="Attend Now!" target="_blank" rel="noopener noreferrer"><ImageTwo data={this.NewsImagedata3}/></a></td></tr>
                            <tr><td>Paper II-Mathematics</td><td><a href="https://forms.gle/5BEsZXFe73yTpTrR7" data-toggle="tooltip" title="Attend Now!" target="_blank" rel="noopener noreferrer"><ImageTwo data={this.NewsImagedata3}/></a></td></tr>
                            
                    </table>
                    <br/>
                    <table id="tableformat">
                        <tr><th colspan="2">Level 2</th></tr>
                            <tr><td>Paper I-Physics & Chemistry</td><td><a href="https://forms.gle/6PrSpLiZ7gxn6uWj7" data-toggle="tooltip" title="Attend Now!" target="_blank" rel="noopener noreferrer"><ImageTwo data={this.NewsImagedata3}/></a></td></tr>
                            <tr><td>Paper II-Mathematics</td><td><a href="https://forms.gle/Nnsza2iY3Cr5N7Vq6" data-toggle="tooltip" title="Attend Now!" target="_blank" rel="noopener noreferrer"><ImageTwo data={this.NewsImagedata3}/></a></td></tr>
                    </table>
                    <br/>
                    <table id="tableformat">
                        <tr><th colspan="2">Level 3</th></tr>
                            <tr><td>Paper I-Physics & Chemistry</td><td><a href="https://forms.gle/iu6m3hLRLX9pFuHd9" data-toggle="tooltip" title="Attend Now!" target="_blank" rel="noopener noreferrer"><ImageTwo data={this.NewsImagedata3}/></a></td></tr>
                            <tr><td>Paper II-Mathematics</td><td><a href="https://forms.gle/3GTLJ5xZs6U7UcVw5" data-toggle="tooltip" title="Attend Now!" target="_blank" rel="noopener noreferrer"><ImageTwo data={this.NewsImagedata3}/></a></td></tr>
                    </table>
                    <br/>
                    <table id="tableformat">
                        <tr><th colspan="2">Level 4</th></tr>
                            <tr><td>Paper I-Physics & Chemistry</td><td>Scheduled on Fourth Week of May</td></tr>
                            <tr><td>Paper II-Mathematics</td><td>Scheduled on Fourth Week of May</td></tr>
                    </table>

                    
                </div>
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default Newseight;