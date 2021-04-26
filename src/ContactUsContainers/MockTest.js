import "./mocktest.css";
import React from "react";
import HeadingOne from "../Components/Texts/HeadingOne";
import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";

class mocktest extends React.Component {
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

  ReachUsHeading = {
    instanceID: "ReachUsHeading",
    title: "KEAM Mock Test 2021"
  };
  EnquiryHeading = {
    instanceID: "EnquiryHeading",
    title: "Reach Us"
  };

  render() {
    return (
      <React.Fragment>
        <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />
        <div classNameName="bgg" id="contactUsListing">
          <div className="root">
            <div>
              <div className="child">
                <HeadingOne data={this.ReachUsHeading} />
                <h3 className="add"> Level 1</h3>
                <p><a href=" https://forms.gle/fuoRWBMs1gQnNASj7" target="_blank" rel="noopener noreferrer"><b>Paper 1 - Physics & Chemistry</b></a></p>
                <p><a href="https://forms.gle/Ez6tRswMSidn4nYt5" target="_blank" rel="noopener noreferrer"><b>Paper 2 - Mathematics</b></a></p>               
                {/*<h3 className="Reach1">
                  Viswajyothi College of Engineering & Technology Vazhakulam,
                  <br />
                  Muvattupuzha,
                  <br />
                  Ernakulam,Kerala,
                  <br />
                  India-686670
                </h3>*/}
              </div>
             </div>
            {/*<div className="child">
              {/* <h1 className="Heading">Enquiry</h1> 
              <HeadingOne data={this.EnquiryHeading} />
              <h3 className="Reach1">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d125752.05890978406!2d76.5889803!3d9.9545934!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07dd2f387bbce7%3A0x33c9780276b797b6!2sViswajyothi+College+of+Engineering+and+Technology!5e0!3m2!1sen!2sin!4v1555349832912!5m2!1sen!2sin"
                  width="450"
                  height="450"
                  frameborder="0"
                  title="google-map"
                />
              </h3>
            </div>*/}
          </div>
        </div>
        <Footer data={this.HomePageFooter} />
        {this.state.showMenu ? (
          <MenuOverlay closeMenuFunction={this.closeMenu} />
        ) : (
            ""
          )}
      </React.Fragment>
    );
  }
}

export default mocktest;
