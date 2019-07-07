import React, { Component } from "react";
import HomePage from "./Pages/HomePage";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import DepartmentPage from "./Pages/Departmentpage";
import CampusLifePage from "./Pages/CampusLifePage";
import collegecounsil from "./CampusLifePageContainers/collegecouncil";
import artsfest from "./CampusLifePageContainers/artsfest";
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
import SyllabusPage from "./Pages/SyllabusPage";
import Research from "./Pages/Research"
import Mtech from "./Pages/Mtech"
import Phd from "./Pages/Phd"
import Syllabusplan from "./Pages/Syllabusplan";
import Blockchain from "./Pages/Blockchain";
import Newsone from "./Pages/NewsContainers/Newsone";


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
              <Route exact path="/academics/courses-offered" component={Academics} />
              <Route exact path="/academics/syllabus" component={SyllabusPage} />
              <Route exact path="/academics/honors" component={HonorsPage} />
              <Route exact path="/departments" component={DepartmentPage} />
              <Route exact path="/facilities" component={FacilitiesPage} />
              <Route exact path="/campus-life" component={CampusLifePage} />
              <Route exact path="/collegecouncil" component={collegecounsil} />
              <Route exact path="/artsfest" component={artsfest} />
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
                
              } />
            </Switch>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
