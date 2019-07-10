import React, { Component } from "react";
import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";
// import ImageOne from "../Components/Images/ImageOne";
import HeadingOne from "../Components/Texts/HeadingOne";
import BodyThree from "../Components/Texts/BodyThree";
import BodyOneJustified from "../Components/Texts/BodyOneJustified";
import "./Research.css"
import ButtonTwo from "../Components/Buttons/ButtonTwo";
import "../Components/Tables/tableformat.css";

class Reserch extends Component {
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
    ResearchHeading = {
        instanceID: "ResearchHeading",
        title: "Research and Development"
    }
    ReserchBody1 = {
        instanceID: "ReserchBody1",
        title: "The Centre for Research & Development was established in 2010 with Prof. Dr. K Babu Joseph formerly Vice Chancellor Cochin University of Science And Technology (CUSAT) as it’s Dean. He has initiated new ideas to kindle the research interest of the staff and students. Dr. K.T. Mathew, Emeritus Professor and former Principal of the college had taken the charge of the Centre in 2014.Presently it’s headed by Dr. Anishin Raj M. M, Associate Professor, CSEDept along with a dedicated and hard working team."
    }
    ReserchBody2 = {
        instanceID: "ReserchBody2",
        title: "Some major initiatives taken by CRD are :"
    }
    ReserchWork1 = {
        instanceID: "ReserchWork1",
        title: "A research project on “Development  of Level Sensor  For  Lead Lithium Loop System” was obtained from  Board  of Research in Nuclear Sciences(BRNS), Department of Atomic  Energy, Government  of India for the year 2017 to 2019. This Research project  worth   Rs 33.08 lakhs  is  sanctioned   under Dr. K.K.Rajan , Dean IIC as  Principal  Investigator. Research Project Work is in progress in collaboration with  Institute for  Plasma Research,  Ahmadabad."
    }
    ReserchWork2 = {
        instanceID: "ReserchWork2",
        title: "Research project   titled  “Development of Lead - Lithium to Helium Heat Exchanger and Circulation Type Electrical heater for Heat exchanger Test Facility  (Phase-1)”  was formulated,  got    clearance  from Institute for  Plasma Research,  Ahemdabad  and  accepted by  BRNS   of Rs.29.48 lakhs for the year 2018-2020.Dr. B Aruna is the Principal  Investigator,  Mr.Vinoj  and Dr. K K RAJAN are the Co Investigators."
    }
    ReserchWork3 = {
        instanceID: "ReserchWork3",
        title: "R&D will arrange Summer Internship programme for the interested students (S5-S6) at IITG during the month of April/May, so that they are capable of writing excellent project proposals in the coming year- which is a part of their curriculum under the initiative of Dr. Lovely Mathew."
    }
    ReserchWork4 = {
        instanceID: "ReserchWork4",
        title: "A National Conference on Security, Parallel Processing , Image Processing &Networking(SPIN2K17) has been conducted by R&D cell of VJCET , in association with  Department of CSE, ISTE & CSI student chapter on 8th December 2018."
    }
    ReserchWork5 = {
        instanceID: "ReserchWork5",
        title: "2 week ISTE-STTP on Control systems from 15th -19th, September, 2014 conducted by IIT Kharagpur."
    }
    MoreInfo = {
        instanceID: "MoreInfo",
        title: "For more information:"
    }
    render() {
        return (
            <div className="HomePage">
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />
                <HeadingOne data={this.ResearchHeading}></HeadingOne>
                {/* <ImageOne data={this.ResearchImg}></ImageOne> */}
                <BodyThree data={this.ReserchBody1} /><br />
                <p>
                    <BodyThree data={this.ReserchBody2} />
                </p>
                <div className="inner-para">
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
                    <table id="publicationtable">
                        <tr><th>List of Publications</th></tr>
                            <tr>Dr.Anoop C .K, Princy N Paul, Maria James,Nihal Noor & R.Harikrishnan published a Manuscript on the topic entitled “Technological & Green solutions for Rural House Construction-A review” in International Research Journal of Engineering & Technology(IRJET),ISSN(2395-0056),Volume 5,Issue 4,April2018.</tr>
                            <tr>Tina Jose, Cimyona Vinbi, Farza Salim, Johns Mathew & Sreekutty Raghavu published a paper on “A Study of Variation in PPV through Different Types of Soil Using Geo-phones during Blast Loading”, in International Research Journal of Engineering and Technology(IRJET),, e-ISSN:2395-0056, p-ISSN:2395-0072, Volume 5, Issue 2, February 2018.</tr>
                            <tr>Bijimol Joseph, Rishiraj P Moni, Dangy George & Jithin Jose , published a paper on “Design and analysis of anchor block and penstock pipe of a hydroelectric project”, in International Research Journal of Engineering and Technology (IRJET) , Volume: 05 ,Issue: 03 , (pp 1063- 1065) , March 2018.</tr>
                            <tr>Neena M Joseph, Basil Jolly, Gayathry N. P, Harikrishnan S, Joseph Roy & Salini P.N, published a paper on “Link Volume And Capacity Utilisation Of Roads in Kondotty Town”, in International Research Journal of Engineering and Technology (IRJET), Volume: 05 Issue: 02,ISSN: 2395-0056, Feb-2018</tr>
                            <tr>Minu C Joy, Anjana T C, Anusree S, Giya Risa Sebastian & Merin Mariya Paul, published a paper on “Water Supply Scheme for Kakkalampara, Marady Panchayath in Ernakulam District, Kerala”, in International Journal for Research in Applied Science & Engineering Technology (IJRASET), Volume 6 Issue III, March 2018.</tr>
                            <tr>Bilu Baby ,Devina Vipinan, Blessy Treesa Baby , Jelita P Xavier &  Muhammed Hafis, published a paper on “Effect of coir fibre on stone matrix asphalt(SMA) with marble waste as filler”, in International Research Journal of Engineering and Technology(IRJET),e-ISSN No 2395-0056, Volume 05, Issue 02, pp 1899-1902,Feb 2018.</tr>
                            <tr>Appu John, Aswathy Warrier D, Hanna Mini Sabu, Mariamol Mathew& Sneha George, published a paper on “Estimation of a Reinforced Building: A Review”,in International Research Journal of Engineering and Technology (IRJET), Vol.05, Issue 02, Page No. 1680-1682, February 2018.</tr>
                            <tr>Soorya R, Ashwin Alias, Nazneen Nazeer, Reshma Jose & Sritha Ravi, published a paper on “Study on Design of Water Treatment Plant at Paingottoor”, in International Research Journal of Engineering and Technology (IRJET), Volume: 05 Issue: 02 page: 1144-1147| Feb-2018.</tr>
                            <tr>Lins Paul Kuriakose, A Madheeha, Amal Francis, Basil Joseph Baby & Mowshmi Subramannyan, published a paper on "Comparative Study on Performances of Clay - Bentonite and Bentonite - Quarry Dust Mixture as Landfill Liner ",in International Journal of Engineering Research and Application(IRJET),, Vol.8,Issue 3, PageNo:49-52,March 2018.</tr>
                            <tr>Stephy Jacqueline George,Aju Joan George,Deni Treesa Dominic,Nimisha Sunny & Nirmal Antony published a paper on the topic” Permeable Concrete- An Innovative Solution for Groundwater Replenishment”,in International Journal of Innovative Research in Science, Engineering and Technology(IJIRSET),Volume  7,Issue 2,February 2018.</tr>
                            <tr>Tintu Shine A.L, Nikhil Roy & Joyal Jose published a Research Paper on the topic titled “Comparitive Experimental Investigation on Strength Characteristics of Concrete mixed with Magnetized water” in International Journal of Innovative Research in Science ,Engineering & Technology(IJIRSET),ISSN(Online:2319-8753),Volume 7,Issue 2,February 2108.</tr>
                            <tr>Hannah S. Mattam, Raunac K. Paulose, Sherin Robert & Vijay Mathew, published a paper on” A Study on Flow and Strength Characteristics of Superplasticized Concrete”, in International Research Journal of Engineering and Technology (IRJET), Volume 5, Number 2, ISSN NO: 2395-0056, pp. 2192-2195, February 2018.</tr>
                            <tr>Nivya Mary Abraham, Jerald Baby Joseph, Jinu John, Manu Biju & Sharon Philip, published a paper on "Groundwater Quality Assessment Near Municipal Solid Waste Dumping Site at Mudavoor, Muvattupuzha", in International Research Journal of Engineering and Technology (IRJET), Volume: 05 Issue: 02, Feb 2018.</tr>
                            <tr>Anu Paul, Gifty George, Iylin Joshy, Sreelekha C & Theresa Sajna Sojan published  a Research Paper on the topic titled “Study on the Filter Media for Constructed Wetlands” in International Journal of Innovative Research in Science ,Engineering & Technology(IJIRSET),ISSN(Online:2319-8753),Volume 7,Issue 3,March 2018.</tr>
                            <tr>Soumya Rani P Thomas, Abhijith R, Aditya Joseph , & Vishnu Unnikrishnan, published a paper on “Improvement in Shear Strength of Soil Reinforced with Pineapple Fibre”, in International Research Journal of Engineering and Technology(IRJET),, Volume: 05 Issue: 02 Feb-2018,March 2018.</tr>
                            <tr>Vineetha Thanakchan, Anand Ramesh, Anandhu K J, Anly Saju & Jerin K Jain  published a paper on the title”Coconut Shell as Partial Replacement of Coarse Aggregate in Concrete” in International Research Journal of Engineering and Technology(IRJET),,ISSN:2395-0056, February 2018.</tr>
                            <tr>Vineetha Thankachan, Ashwin Alias, published a paper on “Review on Applications of Smart Glass in Green Buildings, Presented in " International Conference on Green Buildings and Sustainable Engineering" , in conference proceedings, Rajagiri School of Engineering and Technology, January 2018.</tr>
                            <tr>Vishnu Krishnan, Alishaban Nazar, Ashily Sunny, Mariene Annu Philip & Marshal Tomy, published a paper on "Geotechnical Characterization of Dredged Marine Clay From Cochin",in International Research Journal of Engineering and Technology (IRJET), Volume: 05 Issue: 03, e-ISSN: 2395-0056, march-2018. </tr>
                            <tr>Basil Baby,Daniel A V , Albin S Vayattattil,Aleena Jacob,Rijo Johny & Sangeetha P Mundackal, published a paper on “Crack Assessment In Structural Members: A Review On Recent Paradigms”, in International Research Journal of Engineering and Technology (IRJET), Volume: 05, Issue: 03, Mar-2018.</tr>
                            <tr>Nisa Ann Mathew, Asha Mathew, Bala Murali Krishna, Deaphan T Thengumpallil,  & Meera Haridas, published a paper on “Capacity Utilisation of Koothattukulam - North Palakkuzha stretch In Kerala, India”,in International Research Journal of Engineering & Technology(IRJET), Volume 5, Issue 3, March 2018.</tr>
                            <tr>Finu John,Elsa Maria Jose, Manu Varghese, Megha Antu & Megha Joy, published a paper on “Experimental Study on Improvement of Soil Subgrade Reinforced with Banana and Coir Fibers”, in International Research Journal of Engineering and Technology(IRJET),Volume 5, Issue 3, pp.743-744, March 2018.</tr>
                            <tr>Rose Mary Xavier,Bista Martin,Leo Avira Babu , Liya Elizabeth Jose & Liya Roy published a paper on “A Review on Fiber Modified Stone Matrix Asphalt”,in International Research Journal of Engineering and Technology(IRJET),Volume 5,Issue 03,March 2018.</tr>
                            <tr>Jerin Jose,Ashika Jose,Jaise Mary Kurian,K Jose Francis & Sanju K James ,published a paper on “Stabilization of Expansive soil using Fly ash”,in International Research Journal of Engineering & Technology(IRJET),Volume 05,Issue 03,March 2018.</tr>
                            <tr>Abhijith R, Ajay Balan,Amal John,Shyson sunny & Tom Kachapilly,published a paper on”Integrated Coastal Zone Management of Cochin Coast using Remote sensing and GIS”,in International Journal of Innovative Research in Science, Engineering and Technology(IJIRSET),Volume 7,Issue 6,June 2018.</tr>
                            <tr>Dr. Anoop C .K, Abhishek Baby, Sneha Elsa Cheriyan, Tina Maria Jacob published a Manuscript on the topic “Design of Sanitary Landfill at Brahmapuram Solid Waste Treatment Plant” in in International Journal of Scientific Research and Review, Volume 8, Issue 6, June 2019.</tr>
                            <tr>Nisa Ann Mathew, Abin Silven, Emin Eldho, Savitha Dominic, Tobin Joy  published a paper on “Identification of Accident Blackspots along NH-85”, in International Journal of Scientific Research and Review, Volume 8, Issue 6, June 2019.</tr>
                            <tr>Rose Mary Xavier, Ashna P Salim, Bsil M Babu, Fathima Muhammed PM published a paper on “Identification of Suitable Site and Design Proposal of Water Storage Structure at VJCET” in International Research Journal of Engineering Science and Computing, Volume 9, Issue 6, June 2019.</tr>
                            <tr>Jerin Jose, Kiran S Chirayath, M.A Muhammed Riswan, Megha Shankar, Rose Mariya George published a paper on “Feasibility Study and Analysis of Pedestrian Subway at Vyttila Junction, Kochi, Kerala” in International Journal of Scientific Research and Review, Volume 8, Issue 6, June 2019.</tr>
                            <tr>Jerin Jose, Kiran S Chirayath, M.A Muhammed Riswan, Megha Shankar, Rose Mariya George published a paper on “Design of Box Culvert using Limit State Method” in International Journal of Scientific Research and Review, Volume 8, Issue 6, June 2019.</tr>
                            <tr>Two project groups from Civil Department have presented their work in the International Conference – FEAST 2019 organized by FISAT and are awaiting their works to be published in Springer Proceedings.</tr>
                            <tr>Amel Austine, “A study on device discovery for D2D  Communication”, IJRASET ,Volume 7,Issue 6,June 2019. </tr>
                            <tr>Dr Anishin Raj M.M, et.al, “A Hybrid Approach for Video Steganography by Stretching the secret Data”, ICICCT 2019 International Conference, -Springer indexed, Springer Lecture Notes proceedings, SCOPUS, Tamil Nadu, March 2019 ISSSN: 2367-3370.</tr>
                            <tr>Dr.Anishin Raj M.M, et.al, paper accepted for presentation “Comparison of various Image Segmentation Techniques”, IETE-Springer Journal Proceedings,2019, ISSN: 2524-5740.</tr>
                            <tr>Dr.Anishin Raj M.M, et.al,  “A survey on various Segmentation Techniques in Image processing”, International Journal of research and Analytical Reviews, ISSN:2349-5138 Vol 6, Issue 2, April 2019.</tr>
                            <tr>Dr.Anishin Raj M.M, et.al, “Evaluation of various Segmentation Techniques in Digital Image processing”, International Journal of research and Analytical Reviews, ISSN:2349-5138, Vol 6, Issue 2, April 2019.</tr>
                            <tr>Basil Baby et.al, “Survey on analysis of energy optimization in MANET routing”, International Journal of Engineering and Technology.</tr>
                            <tr>Mrs.Neenu Daniel, “Deep Learning Techniques for Face Recognition: A Review” , IJRASET ,Volume 7,Issue 6,June 2019.</tr>
                            <tr>Mr.Andrews Jose, “Recent advances and investigation of efficient Computer Aided Diagnosis systems for CT images in Liver cancer detection”, ICCIDT 2019, Mangalam College, Ettumanoor, Kerala April 2019.</tr>
                            <tr>Mr.Andrews Jose, “Assessment of Course Outcomes in an Engineering Laboratory Course Using Excel VBA Macros”, World Summit on Accreditation – WOSA 2018,  NBA, New Delhi September 2018</tr>
                            <tr>Mr.Andrews Jose, “A Survey Paper on Fingerprint Recognition and Cross Matching”, International Journal for Research in Applied Science Engineering Technology (IJRASET), Volume 7,    Issue 5, May 2019.</tr>
                            <tr>Mrs.Dona Jose, “A Fog Based Security Model For Electronic Medical Records In the Cloud Database”, International Journal of Innovative Technology and Exploring Engineering, Volume-8 Issue-7, May 2019.</tr>
                            <tr>Mrs.Dona Jose, “Assessment of Course Outcomes in an Engineering Laboratory Course Using Excel VBA Macros”, World Summit on Accreditation – WOSA 2018, NBA at New Delhi September 2018.</tr>
                            <tr>Vinoj K.  et.al, Friction Stir Welding on Dissimilar Alloys - A Critical Review" International Journal of Mechanical Engineering & Technology pp 1406-1413 ISSN:0976-6359</tr>
                            <tr>Shunmugesh, K. et.al, Multi-objective optimization of milling process parameters in glass fibre reinforced polymer via grey relational analysis and desirability function. Materials Today: Proceedings, 11, , 2019. pp.1015-1023.</tr>
                            <tr>Shunmugesh, K,  Optimization of Glass Fiber Reinforced Polymer (GFRP) using Multi Objective Taguchi function and TOPSIS. Materials Today: Proceedings, 11., 2019. pp.952-960.</tr>
                            <tr>Shunmugesh, K. and Panneerselvam, K., Multi-performance optimization of micro-drilling using Taguchi technique based on membership function. Indian Journal of Engineering and Materials Sciences (IJEMS) IJEMS Vol.25 [October 2018] 383 - 390</tr>
                            <tr>Shunmugesh K, Panneerselvam K,  Multi-performance Optimization of Drilling Carbon Fiber Reinforced Polymer Using Taguchi: Membership Function. Transactions of the Indian Institute of Metals. 2018 Jul 1;71(7):, 1615-1627.</tr>
                            <tr>Shunmugesh K. et.al, Experimental Investigation on Electro-codeposition Nickel-Weld Slag Composite Coating. Transactions of the Indian Institute of Metals. 2018 Jul 1;71(7): 1771-1779.</tr>
                            <tr>Optimization in Turning of 11sMn30 Through Process Capability Index. Materials Today: Proceedings, 11,Joy, B., Shunmugesh, K., Kumar, M.P. and Arun, K., 2019.  pp.961-970.</tr>
                            <tr>Unnikrishnan T G “Effect of Ni and Cr Content on the Hardness of Brass Alloys” International Journal for Scientific Research & Development, 6(05), (2018), 599-601</tr>
                            <tr>Unnikrishnan T. G, Akhil K. T, Rakesh Jose, and Pramod Kumar M “High Entropy Alloys – A Review” International Journal for Scientific Research & Development, 6(05), (2018), 591-594. </tr>
                            <tr>Mr. Nibin B, Dr. Easwaran N, Mr. Rijo J. “Thermodynamic Analysis of an Integrated Gas turbine Power Plant Utilising cold Exergy of LNG" Journal of Mechanical Engineering and Sciences, Volume 12, Issue 3, September 2018.</tr>
                            <tr>Mr. Jerry Varghese, Mr. RamuMurugan “Influence of orientation of extrusion direction and strain rate on the mechanical behaviour of extruded thermoplastic sheets” ISSN NO: 2214-7853.</tr>
                            <tr>AjoIssacJohn , Lovin Varghese , Eldhose Paul, Analysis of flue gas from plastic waste International Journal of innovative research in science engineering and technology, Vol 7 Issue 6,  ISSN No 2319-8753.</tr>
                            <tr>Anju Susan George , “CLOUD DATA INTEGRITY CHECKING METHODS: A SURVEY”, International Journal of Engineering & Technology (UAE).</tr>
                            <tr>Anju Susan George, “SMART SHOPPING TROLLEY USING NFC”, Selected to the Department journal of CSE&IT of VJCET.</tr>
                            <tr>Juliet . A Murali, “SCHEDULING LAGORITHM IN CLOUD ENVIRONMENT: COMPARTIVE STUDY”, International Journal of Engineering & Technology (UAE).</tr>
                            <tr>Juliet . A Murali, “ANALYSIS OF SCHEDULING ALGORITHMS IN HADOOP.”, Springer International Conference on Soft Computing Systems ICSCS-2018 : Singapore.</tr>
                            <tr>Dr. Sheela V.K, “LEGATO-A MUSIC RETRIEVAL SYSTEM” , Selected to the Department journal of CSE&IT of VJCET.</tr>
                            <tr>Tiny Molly V, “SURVEY ON DISEASE PREDICTION BASED ON DATA MINING AND IMAGE PROCESSING TECHNIQUES” , Conference Proceedings – ITD of VJCET.</tr>
                            <tr>Jesline Joseph, “ANDROID BASED SMART GREENHOUSE”, Conference Proceedings – ITD of VJCET.</tr>
                            <tr>Salini Dev P.V, “SMART STREET LIGHT SYSTEM”, Conference Proceedings – ITD of VJCET</tr>
                            <tr>Mr.Santhanu P Mohan, “SURVEY ON DIFFERENT TECHNIQUES  FOR BROKEN SCREEN DETECTION”, Selected to the Department journal of CSE&IT of VJCET.</tr>
                            <tr>Prince Kurian, “D-RIDE”, ”, Conference Proceedings – ITD of VJCET.</tr>
                            <tr>Ann Preetha Jose , “SENTIMENT DATA ANALYSIS ON TWITTER”, Conference Proceedings –ITD of VJCET.</tr>
                            <tr>Diana Baby, “FEATURE EXTRACTION TECHNIQUES FOR LEUKOCYTE CLASSIFICATION USING DIGITAL IMAGE PROCESSING ; A REVIEW”. International Journal of Engineering & Technology (UAE)</tr>
                            <tr>Diana Baby, “SURVEY ON DISEASE PREDICTION” , Conference Proceedings – ITD of VJCET.</tr>
                            <tr>Simi Zerene Sleeba, “ReDC: Reduced Deflection Chipper”,International Symposium on Embedded Computing and System Design (ISED), December 2018.</tr>
                            <tr>Athira Thambi and Merlin Thomas “Stochastic Implementation of Sauvola Local Image Thresholding Algorithm”, International Journal of Innovative Research in Science, Engineering and  Technology, Vol. 7, Issue no. 5, May 2018.</tr>
                            <tr>Anmanta Abraham, Rose Maria Jose, Square Root Calculator, “National Conference on VLSI, Signal Processing and Communication, June, 2018.</tr>
                            <tr>Emy Joy, Smitha Cyriac, Implementation of Binary Floating Point Adder, “National Conference on VLSI, Signal Processing and Communication, June, 2018.</tr>
                            <tr>Shermin Sainudheen, Minu George, Vedic Multiplier using Mux based Adder, “National Conference on VLSI, Signal Processing and Communication, June, 2018.</tr>
                            <tr>Anna Kurian, Rose Mary Kuruvithadam, Carry Speculative Adder, “National Conference on VLSI, Signal Processing and Communication, June, 2018.</tr>
                         
                        </table>
                </div>
                
                
                
                <div>
                    <a href="https://vjcetwebadmin.github.io/downloads/research.pdf" target="_blank" rel="noopener noreferrer" ><BodyThree data={this.MoreInfo} /><ButtonTwo /></a>
                </div>
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

export default Reserch;