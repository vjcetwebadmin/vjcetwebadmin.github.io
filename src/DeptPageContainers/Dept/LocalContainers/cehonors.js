import React, { Component } from "react";
import HeadingOne from "../../../Components/Texts/HeadingOne";
import Honors from "../../../Components/honors";
class CeHonors extends Component {
  state = {};
  render() {
    const { heading, honors } = this.props.data;
    return (
      <div className="Honors">
        <HeadingOne data={heading} />
        <div className="photos">
          {honors.map(i => (
            <div>
              <Honors data={i} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CeHonors;
