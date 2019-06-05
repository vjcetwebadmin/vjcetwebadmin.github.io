import React, { Component } from "react";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
import "./graph.css";
class Graph10 extends Component {
  state = {};
  Graphheading = {
    instanceID: "GraphHeading",
    title: "Year-wise Placement Statistics"
  };
  render() {
    return (
      <div class="graphbody">
        <HeadingTwo data={this.Graphheading} />
        <ul class="bar-graph">
          <li class="bar-graph-axis">
            {/* <div class="bar-graph-label">100%</div>
            <div class="bar-graph-label">80%</div>
            <div class="bar-graph-label">60%</div>
            <div class="bar-graph-label">40%</div>
            <div class="bar-graph-label">20%</div>
            <div class="bar-graph-label">0%</div> */}
          </li>
          <li class="bar primary" style={{ height: "403px" }} title="2019">
            <div class="percent">
              <span><b>403</b></span>
            </div>
            <div class="description">2019</div>
          </li>
          <li class="bar secondary" style={{ height: "176px" }} title="2018">
            <div class="percent">
              <span><b>176</b></span>
            </div>
            <div class="description">2018</div>
          </li>
          <li class="bar alert" style={{ height: "274px" }} title="2017">
            <div class="percent">
              <span><b>274</b></span>
            </div>
            <div class="description">2017</div>
          </li>
          <li class="bar warning" style={{ height: "267px" }} title="2016">
            <div class="percent">
              <span><b>267</b></span>
            </div>
            <div class="description">2016</div>
          </li>
          <li class="bar success" style={{ height: "266px" }} title="2015">
            <div class="percent">
              <span><b>266</b></span>
            </div>
            <div class="description">2015</div>
          </li>
          <li class="bar secondary" style={{ height: "217px" }} title="2014">
            <div class="percent">
              <span><b>217</b></span>
            </div>
            <div class="description">2014</div>
          </li>
          <li class="bar alert" style={{ height: "138px" }} title="2013">
            <div class="percent">
              <span><b>138</b></span>
            </div>
            <div class="description">2013</div>
          </li>
          <li class="bar warning" style={{ height: "271px" }} title="2012">
            <div class="percent">
              <span><b>271</b></span>
            </div>
            <div class="description">2012</div>
          </li>
          <li class="bar success" style={{ height: "326px" }} title="2011">
            <div class="percent">
              <span><b>326</b></span>
            </div>
            <div class="description">2011</div>
          </li>
          <li class="bar secondary" style={{ height: "152px" }} title="2010">
            <div class="percent">
              <span><b>152</b></span>
            </div>
            <div class="description">2010</div>
          </li>          
        </ul>
      </div>
    );
  }
}

export default Graph10;
