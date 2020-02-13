import React, { Component } from 'react';
import Recruitment2019 from "./Recruitment2019.jsx";
import Recruitment2018 from "./Recruitment2018.jsx";
import Recruitment2020 from "./Recruitment2020.jsx";
import "./Recruitment.css"
import { Tabs, Tab, Panel } from '@bumaga/tabs' 
class Recruitment extends Component {
    state = {
        
      };
    render() {
        return (
            <div class="facultyNav">
                
            <link rel="stylesheet" href="https://cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css" crossorigin="anonymous"></link>
           
                <Tabs>
                <div>
                <Tab><button class="tab active">2020</button></Tab>
                    <Tab><button class="tab">2019</button></Tab>
                    <Tab><button class="tab">2018</button></Tab>
                </div>
                  
                <Panel>
                    <div class="tab-pane  active"  role="tabpanel">
                        <Recruitment2020 /> 

                    </div>
                </Panel>
                <Panel>
                    <div class="tab-pane" id="kt_tabs_admission_1" role="tabpanel">
                        <Recruitment2019 /> 

                    </div>
                </Panel>
                <Panel>
                    <div class="tab-pane" id="kt_tabs_admission_2" role="tabpanel">
                        <Recruitment2018 /> 

                    </div>
                </Panel>
    
                </Tabs>
                <script src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js" crossorigin="anonymous"></script>
              

        </div>
        );
        
    }
}

export default Recruitment;