import React, { Component } from "react";
import Profile from "./profile";
import Vision from "./vision";
import Faculty from "./PlacementTeam";
import Recruitment from "./Recruitment";
class SideNav extends Component {
  state = {
    showProfile: false,
    showVision: false,
    showfac: false,
    showRecurit: true
  };
  onClickP = () => {
    this.setState({
      showProfile: true,
      showVision: false,
      showfac: false,
      showRecurit: false
    });
  };
  onClickV = () => {
    this.setState({
      showProfile: false,
      showVision: true,
      showfac: false,
      showRecurit: false
    });
  };
  onClickFac = () => {
    this.setState({
      showProfile: false,
      showVision: false,
      showfac: true,
      showRecurit: false
    });
  };
  onClickRec = () => {
    this.setState({
      showProfile: false,
      showVision: false,
      showfac: false,
      showRecurit: true
    });
  };
  render() {
    return (
      <React.Fragment>

        <div className="Deptcontent">
          <div class="sidenav">
          <input
              value="Recruitments"
              class="button"
              onClick={this.onClickRec}
            />
            <input
              value="About"
              class="button"
              onClick={this.onClickP}
            />
            <input
              value="Vision & Mission"
              class="button"
              onClick={this.onClickV}
            />
            
            <input
              value="Our Team"
              class="button"
              onClick={this.onClickFac}
            />
            
          </div>
          <div className="content">
            {this.state.showRecurit ? <Recruitment /> : null}
            {this.state.showProfile ? <Profile /> : null}
            {this.state.showVision ? <Vision /> : null}
            {this.state.showfac ? <Faculty /> : null}
            

          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SideNav;
