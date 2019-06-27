
import React from "react";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
import ImageOne from "../../Components/Images/ImageOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "../styles.css"


import Header from "../../Components/Header&Footer/Header";
import Footer from "../../Components/Header&Footer/Footer";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay";
import HeadingOne from "../../Components/Texts/HeadingOne";
import ImageTwo from "../../Components/Images/imageTwo";

class transportation extends React.Component {
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


    TransportationTitle = {
        instanceID: "TransportationTitle",
        title: "Transportation Facility"
    };
    RoutemapTitle = {
        instanceID: "RoutemapTitle",
        title: "Route Map"
    };
    BusserviceTitle = {
        instanceID: "BusserviceTitle",
        title: "Bus Services"
    };
   
    
    Transportationcontent = {
        instanceID: "Transportationcontent",
        title: "Viswajyothi is providing transportation service for staffs and students. The college has total 19 Bus services to various places in Ernakulam and Idukki Districts. The college buses will reach the campus by 8.30 AM in the morning and leave the campus by 4.30 PM."
    }
   
    CCCImagedata = {
        instanceID: "CCCVjcImage",
        image: "Transportation.JPG",
        width: "100%"
    }
    TransportationImagedata = {
        instanceID: "TransportationImagedata",
        image: "BusRoute.jpg",
        width: "100%"
    }
   

    render() {
        return (
            <React.Fragment>
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />

                <div className="contain">
                    <HeadingOne data={this.TransportationTitle} className="Heading" />
                    
                    <ImageOne data={this.CCCImagedata} />
                    
                    <br />
                    <div className="bodyContainer">
                        <BodyOneJustified data={this.Transportationcontent} />
                        
                        <HeadingTwo data={this.BusserviceTitle} className="Heading" />
                        <table>
                            <tr>
                                <th><font size="3" color="brown"><b>Route</b></font></th> <th><font size="3" color="brown"><b>Starting Time</b></font></th><th><font size="3" color="brown"><b>Capacity</b></font></th>                              
                            </tr>
                            <tr>
                               <th><font size="2">Neriamangalam</font></th> <th><font size="2">7.35am</font></th><th><font size="2">54</font></th>
                            </tr>
                            <tr>
                               <th><font size="2">Palai</font></th> <th><font size="2">7.30am</font></th><th><font size="2">33</font></th>
                            </tr>
                            <tr>
                               <th><font size="2">Thommankuthu</font></th> <th><font size="2">7.35am</font></th><th><font size="2">47</font></th>
                            </tr>
                            <tr>
                               <th><font size="2">Kuravilangadu</font></th> <th><font size="2">7.15am</font></th><th><font size="2">47</font></th>
                            </tr>
                            <tr>
                               <th><font size="2">Oonnukal</font></th> <th><font size="2">7.40am</font></th><th><font size="2">47</font></th>
                            </tr>
                            <tr>
                               <th><font size="2">Puthencruz </font></th> <th><font size="2">7.45am</font></th><th><font size="2">47</font></th>
                            </tr>
                            <tr>
                               <th><font size="2">Moolamattom</font></th> <th><font size="2">7.35am</font></th><th><font size="2">47</font></th>
                            </tr>
                            <tr>
                               <th><font size="2">Thalayolaparambu</font></th> <th><font size="2">7.20am</font></th><th><font size="2">47</font></th>
                            </tr>
                            <tr>
                               <th><font size="2">Kakkanadu</font></th> <th><font size="2">7.15am</font></th><th><font size="2">47</font></th>
                            </tr>
                            <tr>
                               <th><font size="2">Nedungapra</font></th> <th><font size="2">7.45am</font></th><th><font size="2">47</font></th>
                            </tr>
                            <tr>
                               <th><font size="2">Karimannoor</font></th> <th><font size="2">7.30am</font></th><th><font size="2">47</font></th>
                            </tr>
                            <tr>
                               <th><font size="2">Perumbavoor</font></th> <th><font size="2">7.55am</font></th><th><font size="2">47</font></th>
                            </tr>
                            <tr>
                               <th><font size="2">Kuruppampady</font></th> <th><font size="2">7.35am</font></th><th><font size="2">47</font></th>
                            </tr>
                            <tr>
                               <th><font size="2">Vyttila</font></th> <th><font size="2">7.15am</font></th><th><font size="2">47</font></th>
                            </tr>
                            <tr>
                               <th><font size="2">Aluva</font></th> <th><font size="2">7.15am</font></th><th><font size="2">47</font></th>
                            </tr>
                            <tr>
                               <th><font size="2">Thriruvankulam</font></th> <th><font size="2">7.35am</font></th><th><font size="2">47</font></th>
                            </tr>
                            <tr>
                               <th><font size="2">Udumbannoor</font></th> <th><font size="2">7.25am</font></th><th><font size="2">47</font></th>
                            </tr>
                            <tr>
                               <th><font size="2">Angamaly</font></th> <th><font size="2">7.25am</font></th><th><font size="2">47</font></th>
                            </tr>
                            <tr>
                               <th><font size="2">Kuttampuzha</font></th> <th><font size="2">7.25am</font></th><th><font size="2">47</font></th>
                            </tr>
             </table>
             <HeadingTwo data={this.RoutemapTitle} className="Heading" />
                        <ImageOne data={this.TransportationImagedata} />     
                      
                    </div>
                </div>
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default transportation;