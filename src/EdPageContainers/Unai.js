import React, { Component } from "react";
import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";
// import ImageOne from "../Components/Images/ImageOne";
import HeadingOne from "../Components/Texts/HeadingOne";
import BodyThree from "../Components/Texts/BodyThree";
import BodyOneJustified from "../Components/Texts/BodyOneJustified";
import "../Pages/Research.css";
import "../Components/Tables/tableformat.css";
import HeadingThree from "../Components/Texts/HeadingThree";

class Unai extends Component {
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
    HomePageVisionSection = {
        instanceID: "HomePageVisionSection"
    };
    HomePageFacilitiesSection = {
        instanceID: "HomePageFacilitiesSection"
    };
    // ResearchImg = {
    //     instanceID: "ResearchImg",
    //     image: "cover2-1.jpg",
    //     width: "93%"
    // }
    UnaiHeading = {
        instanceID: "UnaiHeading",
        title: "UNAI-ASPIRE - VJCET"
    }
    UnaivisionHeading = {
        instanceID: "UnaivisionHeading",
        title: "UNAI Vision"
    }
    UnaiBody1 = {
        instanceID: "UnaiBody1",
        title: "The United Nations Academic Impact (UNAI)  is a United Nations initiative which was formed on 18th November 2010, to align institutions of higher education, scholarship and research with the United Nations and with each other. The initiative was formally launched on 18 November 2010 by United Nations Secretary-General Mr. Ban Ki-moon at UN Headquarters in New York City."
    }
    UnaiBody2 = {
        instanceID: "UnaiBody2",
        title: "ASPIRE, which stands for Action by Students to Promote Innovation and Reform through Education, is a student –driven initiative uniting to promote United Nation’s Academic Impact’s vision of institutions of higher education and research. ASPIRE embodies UNAI’s ten basic principles within student communities around the globe and brings out the innovative ideas. It also shares its vision of Sharing a Culture of Intellectual Social Responsibility."
    }
    UnaiBody3 = {
        instanceID: "UnaiBody3",
        title: "Brilliance in social activities and research that promotes prosperity and economic opportunity, greater social well-being, and protection of the environment."
    }
    UnaiBody4 = {
        instanceID: "UnaiBody4",
        title: "The participating institutions are expected to support one of the 10 UNAI principles."
    }
    UnaiBody5 = {
        instanceID: "UnaiBody5",
        title: "Operating locally within their communities, the activities of each ASPIRE group contributes to UNAI’s overall message of unity and action to address global challenges. Since 2010, UNAI has created a vibrant and diverse network of students, academics, scientists, researchers, think tanks, institutions of higher education, continuing education and educational associations.  There are over 1000 member institutions in more than 120 countries that reach millions of people in the education and research sectors around the world. Since its inception some thirty international networks of universities and other institutes of higher education and research have endorsed UNAI and encouraged their members to join, representing a global diversity of regions and a thematic wealth of disciplines. ASPIRE personifies the saying, “Sharing a Culture of Intellectual Social Responsibility.” It connects student organizations and individuals to global opportunities through the United Nations, educational and academic institutions, and civil society groups that focus on the UNAI principles. ASPIRE groups are directly affiliated to UNAI, and when their institution is a UNAI member, to it as well. ASPIRE priorities above all else, activism and action by students to promote and support the ten universally accepted UNAI principles."
    }
    
    UnaimissionHeading = {
        instanceID: "UnaimissionHeading",
        title: "UNAI Mission"
    }
    UnaiPrinciples = {
        instanceID: "UnaiPrinciples",
        title: "The Ten Principles"
    }
    UnaiAspire = {
        instanceID: "UnaiAspire",
        title: "ASPIRE"
    }
    InchargesHeading = {
        instanceID: "InchargesHeading",
        title: "V-BIC Team"
      };
    ObjectiveHeading = {
        instanceID: "ObjectiveHeading",
        title: "Objectives"
      };
      ReserchWork1 = {
        instanceID: "ReserchWork1",
        title: "To offer state of art path forward for improving the lives of nearby people. "
    }
      FunctionHeading = {
        instanceID: "FunctionHeading",
        title: "Our Thrust Areas"
      };
    ReserchBody2 = {
        instanceID: "ReserchBody2",
        title: "Some major initiatives taken by CRD are :"
    }
    
    ReserchWork2 = {
        instanceID: "ReserchWork2",
        title: "To undertake collaborative projects with government for the welfare of the society. "
    }
    ReserchWork3 = {
        instanceID: "ReserchWork3",
        title: "To instill ethical, social and environmental perspectives for the sustainable development of the community. "
    }
    ReserchWork4 = {
        instanceID: "ReserchWork4",
        title: "To nurture imagination, Intellectual social responsibility and interpersonal skills among students"
    }
    ReserchWork5 = {
        instanceID: "ReserchWork5",
        title: "To promote technical knowledge sharing culture and coordinate humanitarian relief operations "
    }
    ReserchWork6 = {
        instanceID: "ReserchWork1",
        title: "A commitment to the principles inherent in the United Nations Charter as values that education seeks to promote and help fulfill; "
    }
    ReserchWork7 = {
        instanceID: "ReserchWork2",
        title: "A commitment to human rights, among them freedom of inquiry, opinion, and speech; "
    }
    ReserchWork8 = {
        instanceID: "ReserchWork3",
        title: "A commitment to educational opportunity for all people regardless of gender, race, religion or ethnicity; "
    }
    ReserchWork9 = {
        instanceID: "ReserchWork4",
        title: "A commitment to the opportunity for every interested individual to acquire the skills and knowledge necessary for the pursuit of higher education;"
    }
    ReserchWork10 = {
        instanceID: "ReserchWork10",
        title: "A commitment to building capacity in higher education systems across the world;"
    }
    ReserchWork11 = {
        instanceID: "ReserchWork11",
        title: "A commitment to encouraging global citizenship through education;"
    }
    ReserchWork12 = {
        instanceID: "ReserchWork12",
        title: "A commitment to advancing peace and conflict resolution through education;"
    }
    ReserchWork13 = {
        instanceID: "ReserchWork13",
        title: "A commitment to addressing issues of poverty through education;"
    }
    ReserchWork14 = {
        instanceID: "ReserchWork14",
        title: "A commitment to promoting sustainability through education;"
    }
    ReserchWork15 = {
        instanceID: "ReserchWork15",
        title: "A commitment to promoting inter-cultural dialogue and understanding, and the unlearning of intolerance, through education."
    }
    ReserchWork16 = {
        instanceID: "ReserchWork16",
        title: "Automation of traditional systems through technology upgradation is the only way to uplift the rural people. Development of interdisciplinary technologies is essential way for overall development of the common people.   To realise the inspiration and enthusiasm of our student community into marketable products, it was essential to scale up the IEDC to the level of  an incubation centre. "
    }
    ReserchWork17 = {
        instanceID: "ReserchWork17",
        title: "The TBI will also be the beginning of a stronger industry-academia-consumer linkage where ideas can flow to and fro through the three stakeholder groups so that everyone benefits. The industry will benefit from technological developments initiated by the TBI as well as qualified students who have an innovative mind to join their workforce. Academia will stand to gain from its constant interaction with industry, and consumers will gain from the innovations that are rolled out through the association."
    }
   
    render() {
        return (
            <div className="HomePage">
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />
                <HeadingOne data={this.UnaiHeading} />
                {/* <ImageOne data={this.ResearchImg}></ImageOne> */}
                <BodyThree data={this.UnaiBody1} /><br />
                <BodyThree data={this.UnaiBody2} /><br />
                <HeadingThree data={this.UnaivisionHeading} />
                <BodyThree data={this.UnaiBody3} /><br />
                <HeadingThree data={this.UnaimissionHeading} />
                <ul>
                        
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchWork1} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork2} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork3} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork4} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork5} />
                            </p>
                        </li>
                        
                    </ul>
                 <BodyThree data={this.UnaiBody4} /><br />
                 <HeadingThree data={this.UnaiPrinciples} />
                 <ol>
                        
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchWork6} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork7} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork8} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork9} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork10} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork11} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork12} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork13} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork14} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork15} />
                            </p>
                        </li>
                        
                    </ol>
                    <HeadingThree data={this.UnaiAspire} />
                    <BodyThree data={this.UnaiBody5} /><br />

               
                
                
                
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (
                    <MenuOverlay closeMenuFunction={this.closeMenu} />
                ) : (
                        ""
                    )}
            </div>
        );
    }
}

export default Unai;