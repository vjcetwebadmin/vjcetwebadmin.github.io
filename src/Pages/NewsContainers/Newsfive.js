import React from "react";
//import HeadingTwo from "../../Components/Texts/HeadingTwo";
//import ImageOne from "../../Components/Images/ImageOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
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

class Newsfive extends React.Component {
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
        title: " Coursera MOOC registrations"
    };
    Newscontent = {
        instanceID: "Newscontent",
        title: " Coursera is an American online learning platform founded in 2012 by Stanford professors Andrew Ng and Daphne Koller that offers massive open online courses (MOOC), specializations, and degrees.  Coursera provides free access to over 3,800 courses from leading universities and companies. VJCET has acquired 1500 licenses for our students and faculties to choose from content covering business, technology, data science, and more."
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
                   <BodyOneJustified data={this.Newscontent}/>  
                   <table id="tableformat">
                        <tr><th >Access Links</th></tr>
                            <tr><td><a href="https://www.coursera.org/programs/viswajyothi-college-of-engineering-technology-vd54m" target="_blank" rel="noopener noreferrer">Coursera MOOC-VJCET</a> </td></tr>
                            <tr><td><a href="https://forms.gle/mqXqnZCpNLZw59NX7" target="_blank" rel="noopener noreferrer">Faculty Registration</a></td></tr>
                            <tr><td><a href="https://forms.gle/tBrUqL18N8gnp6Zk7" target="_blank" rel="noopener noreferrer">Student Registration</a></td></tr>
                    </table>
                  
                                
                    <br />                 

                    
                </div>
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default Newsfive;