import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./dropdown.css";

class DropDownC extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }


  render() {
    return (
      <div class="dropdown">
        <span>Campus Life</span>
        <div class="dropdown-content">
          <p>
            <Link
              to="/campus-life"
              className="patch1"
            >
              Campus
            </Link>
          </p>
          <p>
            <Link
              to="/collegecouncil"
              className="patch1"
            >
              College Council
            </Link>
          </p>
          {/* <p>
            <Link
              to="/artsfest"
              className="patch1"
            >
              Drishya- Arts Fest
            </Link>
          </p>
          <p>
            <Link
              to="/sportsfest"
              className="patch1"
            >
              Drona- Sports Fest
            </Link>
          </p>
          <p>
            <Link
              to="/techfest"
              className="patch1"
            >
              Bodhi- Tech Fest
            </Link>
          </p> */}
           <p>
            <Link
              to="/professionalbodies"
              className="patch1"
            >
              Professional Bodies
            </Link>
          </p>
          <p>
            <Link
              to="/nss"
              className="patch1"
            >
              National Service Scheme
            </Link>
          </p>
          <p>
            <Link
              to="/campusmap"
              className="patch1"
            >
              Campus Map
            </Link>
          </p>
        </div>
      </div>
    );
  }
}
export default DropDownC;
