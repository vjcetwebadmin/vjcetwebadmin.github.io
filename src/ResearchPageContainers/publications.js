import React, { Component } from "react";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";
// import ImageOne from "../Components/Images/ImageOne";
import HeadingOne from "../Components/Texts/HeadingOne";
import "./Research.css"
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
        title: "Publications"
    }
    
    render() {
        return (
            <div className="HomePage">
                
                <HeadingOne data={this.ResearchHeading}></HeadingOne>
                {/* <ImageOne data={this.ResearchImg}></ImageOne> */}
                
                                  
                    <table id="publicationtable">
                        <tr><th>List of Publications</th></tr>
                            <tr><td>Dr.Anoop C .K, Princy N Paul, Maria James,Nihal Noor & R.Harikrishnan published a Manuscript on the topic entitled “Technological & Green solutions for Rural House Construction-A review” in International Research Journal of Engineering & Technology(IRJET),ISSN(2395-0056),Volume 5,Issue 4,April2018.</td></tr>
                            <tr><td>Tina Jose, Cimyona Vinbi, Farza Salim, Johns Mathew & Sreekutty Raghavu published a paper on “A Study of Variation in PPV through Different Types of Soil Using Geo-phones during Blast Loading”, in International Research Journal of Engineering and Technology(IRJET),, e-ISSN:2395-0056, p-ISSN:2395-0072, Volume 5, Issue 2, February 2018.</td></tr>
                            <tr><td>Bijimol Joseph, Rishiraj P Moni, Dangy George & Jithin Jose , published a paper on “Design and analysis of anchor block and penstock pipe of a hydroelectric project”, in International Research Journal of Engineering and Technology (IRJET) , Volume: 05 ,Issue: 03 , (pp 1063- 1065) , March 2018.</td></tr>
                            <tr><td>Neena M Joseph, Basil Jolly, Gayathry N. P, Harikrishnan S, Joseph Roy & Salini P.N, published a paper on “Link Volume And Capacity Utilisation Of Roads in Kondotty Town”, in International Research Journal of Engineering and Technology (IRJET), Volume: 05 Issue: 02,ISSN: 2395-0056, Feb-2018</td></tr>
                            <tr><td>Minu C Joy, Anjana T C, Anusree S, Giya Risa Sebastian & Merin Mariya Paul, published a paper on “Water Supply Scheme for Kakkalampara, Marady Panchayath in Ernakulam District, Kerala”, in International Journal for Research in Applied Science & Engineering Technology (IJRASET), Volume 6 Issue III, March 2018.</td></tr>
                            <tr><td>Bilu Baby ,Devina Vipinan, Blessy Treesa Baby , Jelita P Xavier &  Muhammed Hafis, published a paper on “Effect of coir fibre on stone matrix asphalt(SMA) with marble waste as filler”, in International Research Journal of Engineering and Technology(IRJET),e-ISSN No 2395-0056, Volume 05, Issue 02, pp 1899-1902,Feb 2018.</td></tr>
                            <tr><td>Appu John, Aswathy Warrier D, Hanna Mini Sabu, Mariamol Mathew& Sneha George, published a paper on “Estimation of a Reinforced Building: A Review”,in International Research Journal of Engineering and Technology (IRJET), Vol.05, Issue 02, Page No. 1680-1682, February 2018.</td></tr>
                            <tr><td>Soorya R, Ashwin Alias, Nazneen Nazeer, Reshma Jose & Sritha Ravi, published a paper on “Study on Design of Water Treatment Plant at Paingottoor”, in International Research Journal of Engineering and Technology (IRJET), Volume: 05 Issue: 02 page: 1144-1147| Feb-2018.</td></tr>
                            <tr><td>Lins Paul Kuriakose, A Madheeha, Amal Francis, Basil Joseph Baby & Mowshmi Subramannyan, published a paper on "Comparative Study on Performances of Clay - Bentonite and Bentonite - Quarry Dust Mixture as Landfill Liner ",in International Journal of Engineering Research and Application(IRJET),, Vol.8,Issue 3, PageNo:49-52,March 2018.</td></tr>
                            <tr><td>Stephy Jacqueline George,Aju Joan George,Deni Treesa Dominic,Nimisha Sunny & Nirmal Antony published a paper on the topic” Permeable Concrete- An Innovative Solution for Groundwater Replenishment”,in International Journal of Innovative Research in Science, Engineering and Technology(IJIRSET),Volume  7,Issue 2,February 2018.</td></tr>
                            <tr><td>Tintu Shine A.L, Nikhil Roy & Joyal Jose published a Research Paper on the topic titled “Comparitive Experimental Investigation on Strength Characteristics of Concrete mixed with Magnetized water” in International Journal of Innovative Research in Science ,Engineering & Technology(IJIRSET),ISSN(Online:2319-8753),Volume 7,Issue 2,February 2108.</td></tr>
                            <tr><td>Hannah S. Mattam, Raunac K. Paulose, Sherin Robert & Vijay Mathew, published a paper on” A Study on Flow and Strength Characteristics of Superplasticized Concrete”, in International Research Journal of Engineering and Technology (IRJET), Volume 5, Number 2, ISSN NO: 2395-0056, pp. 2192-2195, February 2018.</td></tr>
                            <tr><td>Nivya Mary Abraham, Jerald Baby Joseph, Jinu John, Manu Biju & Sharon Philip, published a paper on "Groundwater Quality Assessment Near Municipal Solid Waste Dumping Site at Mudavoor, Muvattupuzha", in International Research Journal of Engineering and Technology (IRJET), Volume: 05 Issue: 02, Feb 2018.</td></tr>
                            <tr><td>Anu Paul, Gifty George, Iylin Joshy, Sreelekha C & Theresa Sajna Sojan published  a Research Paper on the topic titled “Study on the Filter Media for Constructed Wetlands” in International Journal of Innovative Research in Science ,Engineering & Technology(IJIRSET),ISSN(Online:2319-8753),Volume 7,Issue 3,March 2018.</td></tr>
                            <tr><td>Soumya Rani P Thomas, Abhijith R, Aditya Joseph , & Vishnu Unnikrishnan, published a paper on “Improvement in Shear Strength of Soil Reinforced with Pineapple Fibre”, in International Research Journal of Engineering and Technology(IRJET),, Volume: 05 Issue: 02 Feb-2018,March 2018.</td></tr>
                            <tr><td>Vineetha Thanakchan, Anand Ramesh, Anandhu K J, Anly Saju & Jerin K Jain  published a paper on the title”Coconut Shell as Partial Replacement of Coarse Aggregate in Concrete” in International Research Journal of Engineering and Technology(IRJET),,ISSN:2395-0056, February 2018.</td></tr>
                            <tr><td>Vineetha Thankachan, Ashwin Alias, published a paper on “Review on Applications of Smart Glass in Green Buildings, Presented in " International Conference on Green Buildings and Sustainable Engineering" , in conference proceedings, Rajagiri School of Engineering and Technology, January 2018.</td></tr>
                            <tr><td>Vishnu Krishnan, Alishaban Nazar, Ashily Sunny, Mariene Annu Philip & Marshal Tomy, published a paper on "Geotechnical Characterization of Dredged Marine Clay From Cochin",in International Research Journal of Engineering and Technology (IRJET), Volume: 05 Issue: 03, e-ISSN: 2395-0056, march-2018. </td></tr>
                            <tr><td>Basil Baby,Daniel A V , Albin S Vayattattil,Aleena Jacob,Rijo Johny & Sangeetha P Mundackal, published a paper on “Crack Assessment In Structural Members: A Review On Recent Paradigms”, in International Research Journal of Engineering and Technology (IRJET), Volume: 05, Issue: 03, Mar-2018.</td></tr>
                            <tr><td>Nisa Ann Mathew, Asha Mathew, Bala Murali Krishna, Deaphan T Thengumpallil,  & Meera Haridas, published a paper on “Capacity Utilisation of Koothattukulam - North Palakkuzha stretch In Kerala, India”,in International Research Journal of Engineering & Technology(IRJET), Volume 5, Issue 3, March 2018.</td></tr>
                            <tr><td>Finu John,Elsa Maria Jose, Manu Varghese, Megha Antu & Megha Joy, published a paper on “Experimental Study on Improvement of Soil Subgrade Reinforced with Banana and Coir Fibers”, in International Research Journal of Engineering and Technology(IRJET),Volume 5, Issue 3, pp.743-744, March 2018.</td></tr>
                            <tr><td>Rose Mary Xavier,Bista Martin,Leo Avira Babu , Liya Elizabeth Jose & Liya Roy published a paper on “A Review on Fiber Modified Stone Matrix Asphalt”,in International Research Journal of Engineering and Technology(IRJET),Volume 5,Issue 03,March 2018.</td></tr>
                            <tr><td>Jerin Jose,Ashika Jose,Jaise Mary Kurian,K Jose Francis & Sanju K James ,published a paper on “Stabilization of Expansive soil using Fly ash”,in International Research Journal of Engineering & Technology(IRJET),Volume 05,Issue 03,March 2018.</td></tr>
                            <tr><td>Abhijith R, Ajay Balan,Amal John,Shyson sunny & Tom Kachapilly,published a paper on”Integrated Coastal Zone Management of Cochin Coast using Remote sensing and GIS”,in International Journal of Innovative Research in Science, Engineering and Technology(IJIRSET),Volume 7,Issue 6,June 2018.</td></tr>
                            <tr><td>Dr. Anoop C .K, Abhishek Baby, Sneha Elsa Cheriyan, Tina Maria Jacob published a Manuscript on the topic “Design of Sanitary Landfill at Brahmapuram Solid Waste Treatment Plant” in in International Journal of Scientific Research and Review, Volume 8, Issue 6, June 2019.</td></tr>
                            <tr><td>Nisa Ann Mathew, Abin Silven, Emin Eldho, Savitha Dominic, Tobin Joy  published a paper on “Identification of Accident Blackspots along NH-85”, in International Journal of Scientific Research and Review, Volume 8, Issue 6, June 2019.</td></tr>
                            <tr><td>Rose Mary Xavier, Ashna P Salim, Bsil M Babu, Fathima Muhammed PM published a paper on “Identification of Suitable Site and Design Proposal of Water Storage Structure at VJCET” in International Research Journal of Engineering Science and Computing, Volume 9, Issue 6, June 2019.</td></tr>
                            <tr><td>Jerin Jose, Kiran S Chirayath, M.A Muhammed Riswan, Megha Shankar, Rose Mariya George published a paper on “Feasibility Study and Analysis of Pedestrian Subway at Vyttila Junction, Kochi, Kerala” in International Journal of Scientific Research and Review, Volume 8, Issue 6, June 2019.</td></tr>
                            <tr><td>Jerin Jose, Kiran S Chirayath, M.A Muhammed Riswan, Megha Shankar, Rose Mariya George published a paper on “Design of Box Culvert using Limit State Method” in International Journal of Scientific Research and Review, Volume 8, Issue 6, June 2019.</td></tr>
                            <tr><td>Two project groups from Civil Department have presented their work in the International Conference – FEAST 2019 organized by FISAT and are awaiting their works to be published in Springer Proceedings.</td></tr>
                            <tr><td>Amel Austine, “A study on device discovery for D2D  Communication”, IJRASET ,Volume 7,Issue 6,June 2019. </td></tr>
                            <tr><td>Dr Anishin Raj M.M, et.al, “A Hybrid Approach for Video Steganography by Stretching the secret Data”, ICICCT 2019 International Conference, -Springer indexed, Springer Lecture Notes proceedings, SCOPUS, Tamil Nadu, March 2019 ISSSN: 2367-3370.</td></tr>
                            <tr><td>Dr.Anishin Raj M.M, et.al, paper accepted for presentation “Comparison of various Image Segmentation Techniques”, IETE-Springer Journal Proceedings,2019, ISSN: 2524-5740.</td></tr>
                            <tr><td>Dr.Anishin Raj M.M, et.al,  “A survey on various Segmentation Techniques in Image processing”, International Journal of research and Analytical Reviews, ISSN:2349-5138 Vol 6, Issue 2, April 2019.</td></tr>
                            <tr><td>Dr.Anishin Raj M.M, et.al, “Evaluation of various Segmentation Techniques in Digital Image processing”, International Journal of research and Analytical Reviews, ISSN:2349-5138, Vol 6, Issue 2, April 2019.</td></tr>
                            <tr><td>Basil Baby et.al, “Survey on analysis of energy optimization in MANET routing”, International Journal of Engineering and Technology.</td></tr>
                            <tr><td>Mrs.Neenu Daniel, “Deep Learning Techniques for Face Recognition: A Review” , IJRASET ,Volume 7,Issue 6,June 2019.</td></tr>
                            <tr><td>Mr.Andrews Jose, “Recent advances and investigation of efficient Computer Aided Diagnosis systems for CT images in Liver cancer detection”, ICCIDT 2019, Mangalam College, Ettumanoor, Kerala April 2019.</td></tr>
                            <tr><td>Mr.Andrews Jose, “Assessment of Course Outcomes in an Engineering Laboratory Course Using Excel VBA Macros”, World Summit on Accreditation – WOSA 2018,  NBA, New Delhi September 2018</td></tr>
                            <tr><td>Mr.Andrews Jose, “A Survey Paper on Fingerprint Recognition and Cross Matching”, International Journal for Research in Applied Science Engineering Technology (IJRASET), Volume 7,    Issue 5, May 2019.</td></tr>
                            <tr><td>Mrs.Dona Jose, “A Fog Based Security Model For Electronic Medical Records In the Cloud Database”, International Journal of Innovative Technology and Exploring Engineering, Volume-8 Issue-7, May 2019.</td></tr>
                            <tr><td>Mrs.Dona Jose, “Assessment of Course Outcomes in an Engineering Laboratory Course Using Excel VBA Macros”, World Summit on Accreditation – WOSA 2018, NBA at New Delhi September 2018.</td></tr>
                            <tr><td>Vinoj K.  et.al, Friction Stir Welding on Dissimilar Alloys - A Critical Review" International Journal of Mechanical Engineering & Technology pp 1406-1413 ISSN:0976-6359</td></tr>
                            <tr><td>Shunmugesh, K. et.al, Multi-objective optimization of milling process parameters in glass fibre reinforced polymer via grey relational analysis and desirability function. Materials Today: Proceedings, 11, , 2019. pp.1015-1023.</td></tr>
                            <tr><td>Shunmugesh, K,  Optimization of Glass Fiber Reinforced Polymer (GFRP) using Multi Objective Taguchi function and TOPSIS. Materials Today: Proceedings, 11., 2019. pp.952-960.</td></tr>
                            <tr><td>Shunmugesh, K. and Panneerselvam, K., Multi-performance optimization of micro-drilling using Taguchi technique based on membership function. Indian Journal of Engineering and Materials Sciences (IJEMS) IJEMS Vol.25 [October 2018] 383 - 390</td></tr>
                            <tr><td>Shunmugesh K, Panneerselvam K,  Multi-performance Optimization of Drilling Carbon Fiber Reinforced Polymer Using Taguchi: Membership Function. Transactions of the Indian Institute of Metals. 2018 Jul 1;71(7):, 1615-1627.</td></tr>
                            <tr><td>Shunmugesh K. et.al, Experimental Investigation on Electro-codeposition Nickel-Weld Slag Composite Coating. Transactions of the Indian Institute of Metals. 2018 Jul 1;71(7): 1771-1779.</td></tr>
                            <tr><td>Optimization in Turning of 11sMn30 Through Process Capability Index. Materials Today: Proceedings, 11,Joy, B., Shunmugesh, K., Kumar, M.P. and Arun, K., 2019.  pp.961-970.</td></tr>
                            <tr><td>Unnikrishnan T G “Effect of Ni and Cr Content on the Hardness of Brass Alloys” International Journal for Scientific Research & Development, 6(05), (2018), 599-601</td></tr>
                            <tr><td>Unnikrishnan T. G, Akhil K. T, Rakesh Jose, and Pramod Kumar M “High Entropy Alloys – A Review” International Journal for Scientific Research & Development, 6(05), (2018), 591-594. </td></tr>
                            <tr><td>Mr. Nibin B, Dr. Easwaran N, Mr. Rijo J. “Thermodynamic Analysis of an Integrated Gas turbine Power Plant Utilising cold Exergy of LNG" Journal of Mechanical Engineering and Sciences, Volume 12, Issue 3, September 2018.</td></tr>
                            <tr><td>Mr. Jerry Varghese, Mr. RamuMurugan “Influence of orientation of extrusion direction and strain rate on the mechanical behaviour of extruded thermoplastic sheets” ISSN NO: 2214-7853.</td></tr>
                            <tr><td>AjoIssacJohn , Lovin Varghese , Eldhose Paul, Analysis of flue gas from plastic waste International Journal of innovative research in science engineering and technology, Vol 7 Issue 6,  ISSN No 2319-8753.</td></tr>
                            <tr><td>Anju Susan George , “CLOUD DATA INTEGRITY CHECKING METHODS: A SURVEY”, International Journal of Engineering & Technology (UAE).</td></tr>
                            <tr><td>Anju Susan George, “SMART SHOPPING TROLLEY USING NFC”, Selected to the Department journal of CSE&IT of VJCET.</td></tr>
                            <tr><td>Juliet . A Murali, “SCHEDULING LAGORITHM IN CLOUD ENVIRONMENT: COMPARTIVE STUDY”, International Journal of Engineering & Technology (UAE).</td></tr>
                            <tr><td>Juliet . A Murali, “ANALYSIS OF SCHEDULING ALGORITHMS IN HADOOP.”, Springer International Conference on Soft Computing Systems ICSCS-2018 : Singapore.</td></tr>
                            <tr><td>Dr. Sheela V.K, “LEGATO-A MUSIC RETRIEVAL SYSTEM” , Selected to the Department journal of CSE&IT of VJCET.</td></tr>
                            <tr><td>Tiny Molly V, “SURVEY ON DISEASE PREDICTION BASED ON DATA MINING AND IMAGE PROCESSING TECHNIQUES” , Conference Proceedings – ITD of VJCET.</td></tr>
                            <tr><td>Jesline Joseph, “ANDROID BASED SMART GREENHOUSE”, Conference Proceedings – ITD of VJCET.</td></tr>
                            <tr><td>Salini Dev P.V, “SMART STREET LIGHT SYSTEM”, Conference Proceedings – ITD of VJCET</td></tr>
                            <tr><td>Mr.Santhanu P Mohan, “SURVEY ON DIFFERENT TECHNIQUES  FOR BROKEN SCREEN DETECTION”, Selected to the Department journal of CSE&IT of VJCET.</td></tr>
                            <tr><td>Prince Kurian, “D-RIDE”, ”, Conference Proceedings – ITD of VJCET.</td></tr>
                            <tr><td>Ann Preetha Jose , “SENTIMENT DATA ANALYSIS ON TWITTER”, Conference Proceedings –ITD of VJCET.</td></tr>
                            <tr><td>Diana Baby, “FEATURE EXTRACTION TECHNIQUES FOR LEUKOCYTE CLASSIFICATION USING DIGITAL IMAGE PROCESSING ; A REVIEW”. International Journal of Engineering & Technology (UAE)</td></tr>
                            <tr><td>Diana Baby, “SURVEY ON DISEASE PREDICTION” , Conference Proceedings – ITD of VJCET.</td></tr>
                            <tr><td>Simi Zerene Sleeba, “ReDC: Reduced Deflection Chipper”,International Symposium on Embedded Computing and System Design (ISED), December 2018.</td></tr>
                            <tr><td>Athira Thambi and Merlin Thomas “Stochastic Implementation of Sauvola Local Image Thresholding Algorithm”, International Journal of Innovative Research in Science, Engineering and  Technology, Vol. 7, Issue no. 5, May 2018.</td></tr>
                            <tr><td>Anmanta Abraham, Rose Maria Jose, Square Root Calculator, “National Conference on VLSI, Signal Processing and Communication, June, 2018.</td></tr>
                            <tr><td>Emy Joy, Smitha Cyriac, Implementation of Binary Floating Point Adder, “National Conference on VLSI, Signal Processing and Communication, June, 2018.</td></tr>
                            <tr><td>Shermin Sainudheen, Minu George, Vedic Multiplier using Mux based Adder, “National Conference on VLSI, Signal Processing and Communication, June, 2018.</td></tr>
                            <tr><td>Anna Kurian, Rose Mary Kuruvithadam, Carry Speculative Adder, “National Conference on VLSI, Signal Processing and Communication, June, 2018.</td></tr>
                            
                            <tr><td>Ranjini Surendran, “Scene Understanding using DeepNeural Networks :Objects, Actions and Events: A Review”, International Conference on Innovative Computing and Communication, ICICC-2019 on 21st & 22nd March 2019, Springer, Organized by Faculty of Electrical Engineering and Computer Science, VŠB -Technical University of Ostrava Czech Republic, Europe.</td></tr>
                            <tr><td>Lisha Tomy, Parvathy S, Reshmi Nath, Somy P Mathew,  “Smart Waste Management System”, International Journal of Trend in Scientific Research and Developmnet, Vol 3, Issue 3, April 2019.</td></tr>
                            <tr><td>Alisha Mariam Chacko, Ann Tesna S Thottupuram, Sneha Tresa Joyson, R Anil Kumar, “Automatic Notification of Sign Board To Aid Drivers”, Proceedings of National Conference  on Security, Parallel Processing, Image Processing and Networking , SPIN, April 2019.</td></tr>
                            <tr><td>Reshma Babu, Sijina Varghese, Unnimaya, Niji Mathews,  “Intelligence Bus Monitoring System”, Proceedings of National Conference  on Security, Parallel Processing, Image Processing and Networking , SPIN, April 2019.</td></tr>
                            <tr><td>Ann Maria Cherian, Arsha Edison, Feby Mathew, Jeena Kuriakose,  Smitha Cyriac, “Wireless Security System for Railway Tracks”, Proceedings of National Conference  on Security, Parallel Processing, Image Processing and Networking , SPIN, April 2019.</td></tr>
                            <tr><td>Asna Sherin MA, Jithina Sunny, Sreelakshmi Raju, Dr. Edgar Ruskin Frank,  “Patient Health Monitoring System”, Proceedings of National Conference  on Security, Parallel Processing, Image Processing and Networking , SPIN, April 2019.</td></tr>
                            <tr><td>Akhishma Stephen, Alitta Liya Manuel, Annmary Sebastian, Manju Thomas T , "Design And Implementation  of Restaurant  Serving Robot" , Proceedings of National Conference  on Security, Parallel Processing, Image Processing and Networking , SPIN, April 2019.</td></tr>
                            <tr><td>Delwyn Joseph, Emel Johns, Johny Joshy, Shejin Joy, Anish M Jose, “So- Clean”, Proceedings of National Conference on VLSI, Signal processing and Communication , VLES'19 , May 2019.</td></tr>
                            <tr><td>Lisha Tomy, Parvathy S, Reshmi Nath, Somy P Mathew,  “Smart Waste Management System”, Proceedings of National Conference on VLSI, Signal processing and Communication , VLES'19 , May 2019.</td></tr>
                            <tr><td>Joshua Shaju, Melbin K Mathai, Melby Seby, Femy John, “Gesture Controlled Wheelchair”, Proceedings of National Conference on VLSI, Signal processing and Communication , VLES'19 , May 2019.</td></tr>
                            <tr><td>Cyril Shabu, Diju A Thomas, Jobin Sunny,  “Arduino Based Gestures to Speech Convertion System”, Proceedings of National Conference on VLSI, Signal processing and Communication , VLES'19 , May 2019.</td></tr>
                            <tr><td>Liya George, Rinsila Salim, Riya Baby,Anitta Thomas, “Cloud based Reader for Blind Using Raspberry Pi”, Proceedings of National Conference on VLSI, Signal processing and Communication , VLES'19 , May 2019.</td></tr>
                            <tr><td>Basil Abraham, Govind K Mohan, Sourav S, Sreehari S, Krishnendu K, “Intelligent Mapping Planning & Executing”, Proceedings of National Conference on Information and Communication Engineering, NCICE ’19, May 2019.</td></tr>
                            <tr><td>Benit Jose, Jipson Simon, Jeesmon Peter, Jibby Peter D’cruz, “Next Generation Head Wear”, Proceedings of National Conference on Information and Communication Engineering, NCICE ’19, May 2019.</td></tr>
                            <tr><td>Krishna Kripa K, Shruthi Mathew, Nimi Elizabeth Johnson,  Lekshmi M S, “Solar Refrigerator”, Proceedings of National Conference on Information and Communication Engineering, NCICE ’19, May 2019.</td></tr>
                            <tr><td>Joshua Shaju, Melbin K Mathai, Melby Seby, Femy John, “Gesture Controlled Wheelchair”, Proceedings of National Conference on Information and Communication Engineering, NCICE ’19, May 2019.</td></tr>
                            <tr><td>Rhithu Shysu, Sajitha Saju, Amrutha Mohan, Arathy B Kurisinkal, Ranjini Surendran,  “Flex Controlled Robotic Arm”, Proceedings of National Conference on Information and Communication Engineering, NCICE ’19, May 2019.</td></tr>
                            <tr><td>Cyril Shabu, Diju A Thomas, Jobin Sunny, Cuckoo Anitha Joseph,  “Arduino Based Gestures to Speech Convertion System”, Proceedings of National Conference on Information and Communication Engineering, NCICE ’19, May 2019.</td></tr>
                            <tr><td>Alin Mathew, Della Paul, Dona Maria George, Vinija Kurian , “Robotic Arm using Brain Computer Interface” , Proceedings of National Conference on Information and Communication Engineering, NCICE ’19, May 2019.</td></tr>
                            <tr><td>Deena Anna Alias, Deva Merlin Mathew, Neha Anil, Simi Zerine Sleeba, "Animatronics Arm", Proceedings of National Conference on Information and Communication Engineering, NCICE ’19, May 2019.</td></tr>
                            <tr><td>Alina Nibu Mathew , Jeena Mariya Kuriakose , Sethulakshmi Haridas, Sani John,  “Study on Alzheimer's detection using image processing ”,  Proceedings of National Conference on Information and Communication Engineering (NCICE ‘19)</td></tr>
                            <tr><td>Aswathy Raju, Jubil Ann Tom, Sandramol Shaji, Priya G L, "Head Motion Controlled Smart Wheelchair",  Proceedings of National Conference on VLSI, Signal processing and Communication , VLES'19 , May 2019.</td></tr>
                            <tr><td>Agna Antony, Mitha Waiben, Thara Thomas, Rose Maria Jose, "Detection & Stage Recognition of Retinopathy in Diabetic patients", Proceedings of National Conference on VLSI, Signal processing and Communication , VLES'19 , May 2019.</td></tr>
                            <tr><td>Merin Joseph,Sradha Thomas, Teena Shaji, Mary Nirmala George,  “Driver Fatique Detection Based on Eye Tracking” , Proceedings of National Conference on VLSI, Signal processing and Communication , VLES'19 , May 2019.</td></tr>
                            <tr><td>Francis Rohan John,Aliaz Biju,Anu Rani Philip, "AI Emergency First Response Drone", Proceedings of National Conference on VLSI, Signal processing and Communication , VLES'19 , May 2019.</td></tr>
                            <tr><td>Amal Vijayan, Aril George, Bichu  Sajeev, Anu C Kunjachan, "Multimedia Transmission using Advanced Li-Fi Technology" , Proceedings of National Conference on VLSI, Signal processing and Communication , VLES'19 , May 2019.</td></tr>
                            <tr><td>Catherine Anto, Jismy T George, Shonima TS, Minu George, “Smart Drug Store”,  Proceedings of National Conference on VLSI, Signal processing and Communication , VLES'19 , May 2019.</td></tr>
                            <tr><td>Alwin Rebellow, Prince Peter, Arath S Kumar, Manu Jose, " Warfield Spying Robot", Proceedings of National Conference on VLSI, Signal processing and Communication , VLES'19 , May 2019.</td></tr>
                            <tr><td>Abil M Joy, Frajo M Methippara, Jose Martin Saji, Mathew Avarachan,  Jibby Peter Dcruz, “Autonomous Delivery Drone”,  Proceedings of National Conference on VLSI, Signal processing and Communication , VLES'19 , May 2019.</td></tr>
                            <tr><td>Aleena Biju, Athila M Shanavas, Doniya Michael, V K Vanitha Rugmoni, “Defense Droid”, Proceedings of National Conference on VLSI, Signal processing and Communication , VLES'19 , May 2019.</td></tr>


                        </table>
               
                
                
                
               
               
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