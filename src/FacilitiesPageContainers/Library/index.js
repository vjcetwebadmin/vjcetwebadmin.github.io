import React from "react";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
import HeadingOne from "../../Components/Texts/HeadingOne";
import ImageOne from "../../Components/Images/ImageOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "../styles.css"

import Header from "../../Components/Header&Footer/Header";
import Footer from "../../Components/Header&Footer/Footer";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay";

class Library extends React.Component {
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

    LibraryTitle = {
        instanceID: "LibraryTitle",
        title: "The Central Library"
    };
    LibraryCentralTitle = {
        instanceID: "LibraryCentralTitle",
        title: "The Central Library"
    };
    LibraryDigitalTitle = {
        instanceID: "LibraryDigitalTitle",
        title: "DIGITAL LIBRARY"
    };
    LibraryDigitalResorceTitle = {
        instanceID: "LibraryDigitalResourceTitle",
        title: "E- RESOURCES"
    };
    LibraryContent1 = {
        instanceID: "LibraryContent1",
        title: "Synonymous with abode of knowledge the central library of the college is stocked with a rich collection of Books, National and International journals, Technical and other Magazines, CD ROMs on Engineering, other widely appreciated editions on diverse subjects like Literature, Management, Religion, Competitive exams etc. It is housed in an area of 16400 Sq.ft. spread over two floors.  This library follows an open access system, Barcode based circulation process and OPAC Literature search and Web based Online Public Access Catalogue (WEB OPAC- IP Based Access) system is also incorporated.. Surveillance cameras help to regulate the movement of the users in the library."
    }
    LibraryContent2 = {
        instanceID: "LibraryContent2",
        title: "We arrange access to the world of information whether online, multimedia or in print. In order to effectively capitalize on the opportunities provided by radical changes to technology, pedagogy and research practice, the libraries operate in a number of profound ways and work in partnership with faculty members to enhance students' research skill development, encompassing both information literacy and learning skills. "
    }
    LibraryContent3 = {
        instanceID: "LibraryContent3",
        title: "The collection comprises 42501 printed documents such as books, project reports, Mini project reports, Seminar reports and back volumes of journals and the non-book materials like CD ROMs. Membership of the library is open to Students, Teachers and Non Teaching Staff of this college. Library membership is free to all faculty, staff and students.The library also subscribes 128 printed journals, 16 general magazines and library subscribed full text online database like IEEE Xplore, ASCE, ASME, Springer, EBSCO and E - resources through DELNET and National digital library. NPTEL facility to access video lectures are also available."
    }
    DigitalLibraryContent = {
        instanceID: "DigitalLibraryContent",
        title: "A well- arranged Digital Library with 60 Computers and 25 headphones help the users to view e-facilities and use Audio/video facilities also. Digital Library can also be accessed anywhere on the campus. This library provides uncompromising information and intellectual requirements for its students and faculty with user friendly approach. It offers a fully integrated and dynamic environment for conducting academic study. Multiple copies ensure that resources are easily available in the reference section and stock section as well."
    }
    LibraryServiceTitle = {
        instanceID: "LibraryServiceTitle",
        title: "Library Services"
    };
    LibraryReferanceTitle = {
        instanceID: "LibraryServiceTitle",
        title: "Referance Services"
    };
    LibraryReferanceContent = {
        instanceID: "LibraryReferanceContent",
        title: "The Library maintains a separate reference collection consisting of encyclopedias, dictionaries, directories, handbooks, technical data,  atlases, CD -ROMs. Project Reports and seminar Reports. The question papers of the examinations conducted by the university in previous years and syllabi of courses conducted by this college are also made available in this section."
    }
    LibraryReprographyTitle = {
        instanceID: "LibraryReprographyTitle",
        title: "Reprography Services"
    };
    
    
    LibraryReprographyContent = {
        instanceID: "LibraryReprographyContent",
        title: "The Library provides photocopying facilities allowed within the copyright rules. Question papers of previous year university examinations, articles of journals can also be photocopied. "
    }
    LibraryResourceTitle = {
        instanceID: "LibraryResourceTitle",
        title: "Library Resources"
    };
    LibraryJournalTitle = {
        instanceID: "LibraryResourceTitle",
        title: "Transaction-Journal-Magazine Subscriptions"
    };
    LibraryJournalContent = {
        instanceID: "LibraryJournalContent",
        title: "The Library receives 134 printed journals, technical and news papers. The library provides IP enabled access to a large number of full text on line journal databases from the various publishers."
    }
    
    LibraryImagedata = {
        instanceID: "LibraryVjcImage",
        image: "IMG_9928.jpg",
        width: "100%"
    }
    render() {
        return (
            <React.Fragment>
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />

                <div className="contain">
                    <HeadingOne data={this.LibraryTitle} className="Heading" />
                    <ImageOne data={this.LibraryImagedata} />
                    <br />
                    <div className="bodyContainer">
                        <HeadingOne data={this.LibraryCentralTitle} className="Heading" />
                        <BodyOneJustified data={this.LibraryContent1} />
                        <p>
                            <BodyOneJustified data={this.LibraryContent2} />
                        </p>
                        <p>
                            <BodyOneJustified data={this.LibraryContent3} />
                        </p>
                    </div>
                    <div>
                    <HeadingTwo data={this.LibraryResourceTitle} className="Heading" />
                    <table border="1">
                        <tr>
                            <th> <font color="brown"><b>Collection</b></font></th><th><font color="brown"><b>Numbers</b></font></th>
                        </tr>
                        <tr>
                            <th> Books</th><th> 27895</th>
                        </tr>
                        <tr>
                            <th>Journals  (Printed)</th><th>134</th>
                        </tr>
                        <tr>
                            <th>National Journals</th><th>85</th>
                        </tr>
                        <tr>
                            <th>International</th><th>49</th>
                        </tr>
                        <tr>
                            <th>Bound Journals</th><th>333</th>
                        </tr>
                        <tr>
                            <th>Main Project Reports</th><th>296</th>
                        </tr>
                        <tr>
                            <th>Mini Project Reports</th><th>109</th>
                        </tr>
                        <tr>
                            <th>Seminar Reports</th><th>919</th>
                        </tr>
                        <tr>
                            <th>CDs</th><th>1200</th>
                        </tr>
                        
                    </table>
                    </div>
                    
                    <div>
                    <p>
                    <HeadingTwo data={this.LibraryServiceTitle} className="Heading" />
                    </p>
                    <tr><b><font color="Brown">LIBRARY WORKING HOURS & HOLIDAYS</font></b></tr>
                    <table border="1" align="left">
                        
                        <tr>
                            <th>Monday to Friday</th>
                            <th>8.30am to 8.00pm</th>
                        </tr>
                        <tr>
                            <th>Saturday</th>
                            <th>9.30am to 3.00pm</th>
                        </tr>
                    </table>
                    <tr><b><font color="Brown">OVER NIGHT LENDING</font></b></tr>
                    <table border="1" align="left">
                        
                        <tr>
                            <th>Monday to Friday</th>
                            <th>5.00pm</th>
                        </tr>
                        <tr>
                            <th>Saturday</th>
                            <th>3.00pm</th>
                        </tr>
                        
                    </table>
                    </div>
                    
                    
                    
                    <b><font color="Brown">DETAILS OF LIBRARY CARDS & LOAN PERIOD</font></b>
                    <div>
                    <table border="1" align="left">
                        
                        <tr>
                            <th><font color="brown">Category</font></th>
                            <th><font color="brown">Number of cards</font></th>
                            <th><font color="brown">Loan period</font></th>
                        </tr>
                        <tr>
                            <th>STUDENTS</th>
                            <th>FIRST, SECOND & THIRD YEARS- 4. FINAL YEARS-6</th>
                            <th>15 DAYS</th>
                        </tr>
                        <tr>
                            <th>FACULTY</th>
                            <th>6</th>
                            <th>6 MONTHS</th>
                        </tr>
                        <tr>
                            <th>STAFF</th>
                            <th>2</th>
                            <th>6 MONTHS</th>
                        </tr>
                    </table>
                    </div>
                   
                    <div>
                      
                    <HeadingTwo data={this.LibraryReferanceTitle} className="Heading" />
                    <p>
                            <BodyOneJustified data={this.LibraryReferanceContent} />
                        </p>
                    </div>
                    <div>
                      
                    <HeadingTwo data={this.LibraryReprographyTitle} className="Heading" />
                    <p>
                            <BodyOneJustified data={this.LibraryReprographyContent} />
                        </p>
                    </div>
                    
                    <div >
                        <HeadingTwo data={this.LibraryDigitalTitle} className="Heading" />
                        <BodyOneJustified data={this.DigitalLibraryContent} />
                        <HeadingTwo data={this.LibraryDigitalResorceTitle} className="Heading" />
                        <p>
                        The library provides IP enabled access to a large number of full text on line journal databases from the various publishers.
                        </p>
                        <ol>
                            <li>IEEE</li>
                            <li>ASME</li>
                            <li>ASCE</li>
                            <li>ELSEVIRE</li>
                            <li>EBSCO</li>
                            <li>J-GATE</li>
                            <li>MAC GRAW HILL</li>
                            <li>SPRINGER</li>
                            <li>ASTM DIGITAL LIBRARY</li>
                            <li>DIRECTORY OF OPEN ACCESS JOURNALS (DOJA)</li>
                        </ol>
                    </div>
                    <div >
                        <HeadingTwo data={this.LibraryJournalTitle} className="Heading" />
                        <BodyOneJustified data={this.LibraryJournalContent} />
                        <ol>
                            <li>
                                <p><b>Civil Engineering</b></p>
                                <ol>
                                    <li>International Journal of Civil Engineering</li>
                                    <li>ACI Structural journal</li>
                                    <li>ACI Materials journal</li>
                                    <li>International journal of Geotechnics & Environment</li>
                                    <li>Indian Concrete Journal</li>
                                    <li>Journal of Structural Engineering</li>
                                    <li>Water & Energy International</li>
                                    <li>Indian Geotechnical Journal</li>
                                    <li>NICMAR Journal of construction Management</li>
                                    <li>Journal of Hydraulic Engineering</li>
                                    <li>Civil Engineering Magazine</li>
                                    <li>Civil Engineering: JIE</li>
                                    <li>Architectural Engineering : JIE</li>
                                </ol>
                            </li>
                            <li>
                                <p><b>Computer Science & Engineering</b></p>
                                <ol>
                                    <li>SIGARCH Computer Architecture</li>
                                    <li>SIGCSE Computer Science Education</li>
                                    <li>International Journal of Computer Engineering and Software Technology</li>
                                    <li>SIGIR Information Retrieval</li>
                                    <li>ACM Transactions on Computer Systems</li>
                                    <li>ACM Transactions on Database Systems</li>
                                    <li>ACM Transactions on Modeling and computer Simulation</li>
                                    <li>ACM Transactions on Programming Language Systems</li>
                                    <li>SIGOPS Operating Systems</li>
                                    <li>ACM Transactions on Software Engineering and methodology</li>
                                    <li>ACM Transactions on Embedded Computing Systems</li>
                                    <li>International Journal of Computer and Internet Security</li>
                                    <li>International Journal of Multimedia, Computer Vision and Machine Learning</li>
                                    <li>International Journal of Neural Networks and Applications</li>
                                    <li>International Journal of Real-Time Systems</li>
                                    <li>International Journal of Software Engineering and Knowledge Engineering</li>
                                    <li>International Journal of Uncertainty, Fuzziness and Knowledge-Based Systems</li>
                                    <li>International Journal of Computer Science and Information Technology</li>
                                    <li>International Journal of Foundations of Computer Science: IJFCS</li>
                                    <li>International Journal of Computer Speech and Language</li>
                                    <li>International Journal of Data Warehousing</li>
                                    <li>Computer Engineering: JIE</li>
                                    <li>Journal of Digital Information Management (online)</li>
                                    <li> International Journal of Computational intelligence Research and Application</li>
                                    <li>Journal of Intellectual Property Rights</li>
                                    <li>International Journal of Computing and Application</li>
                                    <li>International Journal of Intelligent Information Processing</li>
                                    <li>Journal of Advanced Research in Computer Engineering</li>
                                </ol>
                            </li>
                            <li>
                                <p><b>Electronics & Communications Engineering</b></p>
                                <ol>
                                    <li>International Journal of Wireless Networks and Communication HY II</li>
                                    <li>International Journal of Electronics and communication engineering</li>
                                    <li>International Journal of Electronic and Electrical Engineering</li>
                                    <li>International Journal of Wireless  Communication and Simulation</li>
                                    <li>International Journal of Advances in VLSI Design</li>
                                    <li>International Journal of Analog circuits, VLSI and Bioelectronics</li>
                                    <li>International Journal of Embedded Software and open Source Systems</li>
                                    <li>International Journal of Electrical Engineering and Embedded Systems</li>
                                    <li>Embedded Systems Design</li>
                                    <li>Everyday Practical Electronics</li>
                                    <li>Microwaves and RF</li>
                                    <li>Electrical and Telecommunication :JIE </li>
                                    <li>Indian Journal of Electronic and Electrical Engineering</li>
                                    <li>Advances in Wireless and Mobile Communication</li>
                                    <li>Journal of Microwaves, Science and Technology</li>
                                    <li>Journal of Wavelet Theory and Applications</li>
                                    <li>IUP Journal of Electrical And Electronics Engineering</li>
                                    <li>IUP Journal of Telecommunication</li>
                                    <li>Advances in Electronic and Electrical Engineering</li>
                                    <li>Far East Journal of Electronics and Communication</li>
                                    <li>Industrial Automation + Industrial Electronics Direct</li>
                                    <li>Indian Journal of Electronics, Circuits and Systems</li>
                                    <li>Indian Journal of Mobile Communication and Networking</li>
                                    <li>Indian Journal of Wireless Networks and Communication</li>
                                    <li>Electronics and Telecommunication: JIE</li>
                                    <li>SADHANA: Academy Proceedings Engineering Science</li>
                                    <li>Indian Journal of Radio and Space Physics</li>
                                    <li>Technician’s Journal :JIE</li>
                                </ol>
                            </li>
                            <li>
                                <p><b>Electrical & Electronics Engineering</b></p>
                                <ol>
                                    <li>International Journal of Industrial Electronics and Control</li>
                                    <li>International Journal of Power System and Power Electronics Engineering</li>
                                    <li>Power Engineering International</li>
                                    <li>Indian Journal of Power and River Valley Development</li>
                                    <li>Electrical Engineering: JIE</li>
                                    <li>Environmental Engineering : JIE</li>
                                    <li>Electrical India</li>
                                    <li>Electrical Engineering Update</li>
                                    <li>IEEMA Journal</li>
                                                                      
                                </ol>
                            </li>
                            <li>
                                <p><b>Information Technology</b></p>
                                <ol>
                                    <li>ACM Transactions on Internet Technology</li>
                                    <li>SIGOSOFT : Software Engineering notes</li>
                                    <li>Information Technology and Libraries</li>
                                    <li>International Journal of computer Science and system Analysis </li>
                                    <li>Interdisciplinary: JIE</li>
                                    <li>International Journal of System Simulation</li>
                                    <li>International Journal of Computer Information Technology & Engineering</li>
                                    <li>Journal of Non Linear Analysis & Applied Mathematics</li>
                                    
                                </ol>
                            </li>
                            <li>
                                <p><b>MechanicalEngineering</b></p>
                                <ol>
                                    <li>International Journal of Advances in Mechatronics and Robotics</li>
                                    <li>International Journal of Advances in Mechanical Engineering</li>
                                    <li>International Journal of Advances in Machining and Forming Operations</li>
                                    <li>International Journal of Mechanical Engineering</li>
                                    <li>Aerospace Engineering : JIE</li>
                                    <li>Mechanical Engineering : JIE</li>
                                    <li>Production Engineering : JIE</li>
                                    <li>Journal of Scientific and Industrial Research</li>
                                    <li>Metallurgical & Materials Engineering: JIE</li>
                                    <li>Agricultural Engineering : JIE</li>
                                    <li>Marine Engineering : JIE</li>
                                    <li>Textile Engineering : JIE</li>
                                    <li>Chemical Engineering: JIE</li>
                                    <li>Mining Engineering : JIE</li>
                                    <li>Indian Journal of Engineering and Materials Science</li>
                                </ol>
                            </li>
                            <li>
                                <p><b>Science</b></p>
                                <ol>
                                    <li>Current Science</li>
                                    <li>Pramana: Journal of Physics</li>
                                    <li>Resonance: Journal of Science Education</li>
                                    <li>Indian Journal of Pure & Applied Physics</li>
                                    <li>Indian Journal  of Chemistry Section A</li>
                                    <li>Indian Journal of section B</li>
                                    <li>Indian Journal of Multidisciplinary Research</li>
                                    
                                </ol>
                            </li>
                            <li>
                                <p><b>MBA</b></p>
                                <ol>
                                    <li>International Journal of Environment & Development</li>
                                    <li>Human Resource Development Review</li>
                                    <li>Journal of Law & Economics</li>
                                    <li>Harvard Business Review</li>
                                    <li>International Journal of Business Management Economics & IT</li>
                                    <li>International Journal of Economics</li>
                                    <li>International Journal of Environmental science</li>
                                    <li>International Journal of Information Technology & Management Research</li>
                                    <li>International Journal of Marketing & Trade Policy</li>
                                    <li>International Review of Business & Finance</li>
                                    <li>International Journal of Logistics and Supply Chain Management</li>
                                    <li>Journal of Management</li>
                                    <li>Indian Journal of Finance</li>
                                    <li>South Asian Journal of Management</li>
                                    <li>Journal of Management Research</li>
                                    <li>Vikalpa</li>
                                    <li>Prabandhan: Indian Journal of Management</li>
                                    <li>Indian Journal of Marketing</li>
                                    <li>Journal of Entrepreneurship</li>
                                    <li>World Affairs</li>
                                    <li>Pranjana: Journal of Management Awareness</li>
                                    <li>Indian Journal of Finance & Research</li>
                                    <li>Indian Journal of Accounting & Finance</li>
                                    <li>Journal of Intellectual Property Rights</li>
                                </ol>
                            </li>
                            <li>
                                <p><b>Periodicals</b></p>
                                <ol>
                                    <li>Competition Success Review</li>
                                    <li>General Knowledge Today</li>
                                    <li>India Today</li>
                                    <li>Life Positive</li>
                                    <li>Outlook</li>
                                    <li>Readers Digest</li>
                                    <li>Sportstar</li>
                                    <li>Daivarajyam</li>
                                    <li>Inside Outside</li>
                                    <li>Dhanam</li>
                                    <li>Business India</li>
                                    <li>Thozhilvartha</li>
                                    <li>Thozhilveethi</li>
                                    <li>Electronics for You</li>
                                    <li>Technofirst</li>
                                    <li>PC Quest</li>
                                    <li>Digit</li>
                                    <li>Scientific American India</li>
                                    <li>Destination Kerala</li>

                                    
                                </ol>
                            </li>
                            <li>
                                <p><b>Dailies</b></p>
                                <ol>
                                    <li>The Hindu</li>
                                    <li>The New  Indian Express</li>
                                    <li>The Hindu Business Line</li>
                                    <li>The Times of India</li>
                                    <li>The Economics Times</li>
                                    <li>Malayala Manorama</li>
                                    <li>Deepika</li>
                                    <li>Mathrubhumi</li>
                                    <li>Mangalam</li>
                                    <li>Madhyamam</li>
                                                                      
                                </ol>
                            </li>
                        </ol>
                    </div>
                </div>
                
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default Library;