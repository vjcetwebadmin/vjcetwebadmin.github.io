
import React from "react";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
import ImageOne from "../../Components/Images/ImageOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "../styles.css"
import "../../Components/Tables/tableformat.css";

import Header from "../../Components/Header&Footer/Header";
import Footer from "../../Components/Header&Footer/Footer";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay";
import HeadingOne from "../../Components/Texts/HeadingOne";
/* import ImageTwo from "../../Components/Images/imageTwo"; */

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
                        <table id="tableformat">
                            <tr>
                                <th>Route</th> <th>Starting Time</th><th>Capacity</th>                              
                            </tr>
                            <tr>
                               <td>Neriamangalam</td> <td>7.35am</td><td>54</td>
                            </tr>
                            <tr>
                               <td>Palai</td> <td>7.30am</td><td>33</td>
                            </tr>
                            <tr>
                               <td>Thommankuthu</td> <td>7.35am</td><td>47</td>
                            </tr>
                            <tr>
                               <td>Kuravilangadu</td> <td>7.15am</td><td>47</td>
                            </tr>
                            <tr>
                               <td>Oonnukal</td> <td>7.40am</td><td>47</td>
                            </tr>
                            <tr>
                               <td>Puthencruz </td> <td>7.45am</td><td>47</td>
                            </tr>
                            <tr>
                               <td>Moolamattom</td> <td>7.35am</td><td>47</td>
                            </tr>
                            <tr>
                               <td>Thalayolaparambu</td> <td>7.20am</td><td>47</td>
                            </tr>
                            <tr>
                               <td>Kakkanadu</td> <td>7.15am</td><td>47</td>
                            </tr>
                            <tr>
                               <td>Nedungapra</td> <td>7.45am</td><td>47</td>
                            </tr>
                            <tr>
                               <td>Karimannoor</td> <td>7.30am</td><td>47</td>
                            </tr>
                            <tr>
                               <td>Perumbavoor</td> <td>7.55am</td><td>47</td>
                            </tr>
                            <tr>
                               <td>Kuruppampady</td> <td>7.35am</td><td>47</td>
                            </tr>
                            <tr>
                               <td>Vyttila</td> <td>7.15am</td><td>47</td>
                            </tr>
                            <tr>
                               <td>Aluva</td> <td>7.15am</td><td>47</td>
                            </tr>
                            <tr>
                               <td>Thriruvankulam</td> <td>7.35am</td><td>47</td>
                            </tr>
                            <tr>
                               <td>Udumbannoor</td> <td>7.25am</td><td>47</td>
                            </tr>
                            <tr>
                               <td>Angamaly</td> <td>7.25am</td><td>47</td>
                            </tr>
                            <tr>
                               <td>Kuttampuzha</td> <td>7.25am</td><td>47</td>
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