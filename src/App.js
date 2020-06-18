import React, { Component } from "react";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import DepartmentPage from "./Pages/Departmentpage";
import CampusLifePage from "./Pages/CampusLifePage";
import collegecounsil from "./CampusLifePageContainers/collegecouncil";
import committees from "./CampusLifePageContainers/committees";

import artsfest from "./CampusLifePageContainers/artsfest";
import sportsfest from "./CampusLifePageContainers/sportsfest";
import techfest from "./CampusLifePageContainers/techfest";
import nss from "./CampusLifePageContainers/nss";
import campusmap from "./CampusLifePageContainers/campusmap";
import Publications from "./CampusLifePageContainers/publications";
import professionalbodies from "./CampusLifePageContainers/ProfessionalBodies/csdepartment";
import ieee from "./CampusLifePageContainers/ProfessionalBodies/ieee";
import iste from "./CampusLifePageContainers/ProfessionalBodies/iste";
import csi from "./CampusLifePageContainers/ProfessionalBodies/csi";
import iete from "./CampusLifePageContainers/ProfessionalBodies/iete";
import igbc from "./DeptPageContainers/CeDept/Profbodies";
import sea from "./CampusLifePageContainers/ProfessionalBodies/saeindia";
import CsDepartment from "./Pages/Departments/csdepartment";
import CeDepartment from "./Pages/Departments/cedepartment";
import EeeDepartment from "./Pages/Departments/eeedepartment";
import EcDepartment from "./Pages/Departments/ecdepartment";
import ItDepartment from "./Pages/Departments/itdepartment";
import MeDepartment from "./Pages/Departments/medepartment";
import SHDepartment from "./Pages/Departments/s&hdepartment";
import Admin from "./Pages/Departments/admin";
import HonorsPage from "./Pages/HonorsPage";
import PlacementPage from "./Pages/placementpage";
import FacilitiesPage from "./Pages/FacilitiesPage";
import CCC from "./FacilitiesPageContainers/ComputingTechnology/computing";
import building from "./FacilitiesPageContainers/BuildingArea/building";
import powerandbackup from "./FacilitiesPageContainers/PowerandBackup/powerandbackup";
import Library from "./FacilitiesPageContainers/Library/index";
import Hostel from "./FacilitiesPageContainers/Hostel/index";
import Healthandfitness from "./FacilitiesPageContainers/Healthandfitness/index";
import campusamenities from "./Pages/CoreFacilities";
import transportation from "./FacilitiesPageContainers/Transportation/transportation";
import NBA from "./Pages/NBA";
import KeyFunc from "./Pages/KeyFunc";
import ContactUs from "./ContactUsContainers/ContactUs";
import Academics from "./Pages/Academics";
import VisionPage from "./Pages/VisionPage";
import Affliations from "./Pages/Affliations";
import Mandatorydisclosure from "./Pages/mandatorydisclosure";
import SyllabusPage from "./Pages/SyllabusPage";
import Research from "./ResearchPageContainers/csdepartment";
import Mtech from "./Pages/Mtech"
import Phd from "./Pages/Phd"
import Syllabusplan from "./Pages/Syllabusplan";
import Blockchain from "./Pages/Blockchain";
import Newsone from "./Pages/NewsContainers/Newsone";
import Newstwo from "./Pages/NewsContainers/Newstwo";
import Newsthree from "./Pages/NewsContainers/Newsthree";
import Newsfour from "./Pages/NewsContainers/Newsfour";
import Newsfive from "./Pages/NewsContainers/Newsfive";
import Newssix from "./Pages/NewsContainers/Newssix";
import Newsseven from "./Pages/NewsContainers/Newsseven";
import newseight from "./Pages/NewsContainers/Newseight";
import newsnine from "./Pages/NewsContainers/Newsnine";
import Newsten from "./Pages/NewsContainers/Newsten";
import Newsfee from "./Pages/NewsContainers/Feenews";
import Iedc from "./EdPageContainers/IEDC/csdepartment";
import Vbic from "./EdPageContainers/Vbic";
import Iiic from "./EdPageContainers/IIIC/csdepartment";
import Unai from "./EdPageContainers/Unai";
import iqac from "./iqac/profile";



class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/about/accreditation" component={NBA} />
              <Route exact path="/about/keyfunctionaries" component={KeyFunc} />
              <Route exact path="/about/vision" component={VisionPage} />
              <Route exact path="/about/affliations" component={Affliations} />
              <Route exact path="/about/mandatorydisclosure" component={Mandatorydisclosure} />
              <Route exact path="/academics/courses-offered" component={Academics} />
              <Route exact path="/academics/syllabus" component={SyllabusPage} />
              <Route exact path="/academics/honors" component={HonorsPage} />
              <Route exact path="/departments" component={DepartmentPage} />
              <Route exact path="/facilities" component={FacilitiesPage} />
              <Route exact path="/campus-life" component={CampusLifePage} />
              <Route exact path="/campus-life/collegecouncil" component={collegecounsil} />
              <Route exact path="/campus-life/committees" component={committees} />
              <Route exact path="/campus-life/artsfest" component={artsfest} />
              <Route exact path="/campus-life/sportsfest" component={sportsfest} />
              <Route exact path="/campus-life/techfest" component={techfest} />
              <Route exact path="/campus-life/nss" component={nss} />
              <Route exact path="/campus-life/campusmap" component={campusmap} />
              <Route exact path="/campus-life/publications" component={Publications} />
              <Route exact path="/campus-life/professionalbodies" component={professionalbodies} />
              <Route exact path="/campus-life/professionalbodies/ieee" component={ieee} />
              <Route exact path="/campus-life/professionalbodies/iste" component={iste} />
              <Route exact path="/campus-life/professionalbodies/csi" component={csi} />
              <Route exact path="/campus-life/professionalbodies/igbc" component={igbc} />
              <Route exact path="/campus-life/professionalbodies/sae" component={sea} />
              <Route exact path="/campus-life/professionalbodies/iete" component={iete} />
              
              
              

              <Route exact path="/departments/cse" component={CsDepartment} />
              <Route exact path="/departments/ce" component={CeDepartment} />
              <Route exact path="/departments/admin" component={Admin} />
              <Route exact path="/departments/eee" component={EeeDepartment} />
              <Route exact path="/departments/ece" component={EcDepartment} />
              <Route exact path="/departments/it" component={ItDepartment} />
              <Route exact path="/departments/me" component={MeDepartment} />
              <Route exact path="/departments/s&h" component={SHDepartment} />
              <Route exact path="/placement" component={PlacementPage} />
              <Route exact path="/facilities/core-facilities" component={FacilitiesPage} />
              <Route exact path="/facilities/ccc" component={CCC} />
              <Route exact path="/facilities/building" component={building} />
              <Route exact path="/facilities/library" component={Library} />
              <Route exact path="/facilities/powerandbackup" component={powerandbackup} />
              <Route exact path="/facilities/hostel" component={Hostel} />
              <Route exact path="/facilities/healthandfitness" component={Healthandfitness} />
              <Route exact path="/facilities/campusamenities" component={campusamenities} />
              <Route exact path="/facilities/transportation" component={transportation} />
              <Route exact path="/contact" component={ContactUs} />
              <Route exact path="/r&d" component={Research} />
              <Route exact path="/admission/mtech" component={Mtech} />
              <Route exact path="/admission/phd" component={Phd} />
              <Route exact path="/academics/Syllabusplan" component={Syllabusplan} />
              <Route exact path="/KBAIC_125" component={Blockchain} />
              <Route exact path="/newsone" component={Newsone} />
              <Route exact path="/newstwo" component={Newstwo} />
              <Route exact path="/newsthree" component={Newsthree} />
              <Route exact path="/newsfour" component={Newsfour} />
              <Route exact path="/newsfive" component={Newsfive} />
              <Route exact path="/newssix" component={Newssix} />
              <Route exact path="/newsseven" component={Newsseven} />
              <Route exact path="/newseight" component={newseight} />
              <Route exact path="/newsnine" component={newsnine} />
              <Route exact path="/newsten" component={Newsten} />
              <Route exact path="/newsfee" component={Newsfee} />              
              <Route exact path="/ed/iedc" component={Iedc} />
              <Route exact path="/ed/v-bic" component={Vbic} />
              <Route exact path="/ed/iiic" component={Iiic} />
              <Route exact path="/ed/unai" component={Unai} />
              <Route exact path="/iqac" component={iqac} />
              
                
              } />
            </Switch>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
