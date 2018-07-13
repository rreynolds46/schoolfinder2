import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


import '../header.css';


import EditProfile from './profileEdit';
import Essays from './essaysEdit';
import EditTest from './testsEdit';
import Transcript from './transcriptEdit';
import EditSurvey from './surveyEdit';



class StudentProfileIndexEdit extends Component {
    componentDidMount = () => {
        const userID = this.props.match.params.userID;
        this.props.getUserProfile(userID);
    }

    render() {
      return (
        <div>
          <div className='tab-whole'>
              <Tabs>
              
                <TabList>
                  <Tab>Profile</Tab>
                  <Tab>Essays</Tab>
                  <Tab>Tests</Tab>
                  <Tab>Transcript</Tab>
                  <Tab>Survey</Tab>
                </TabList>
                <div className='panels'>
                  <TabPanel>
                    <EditProfile {...this.props} />
                  </TabPanel>
                  <TabPanel>
                    <Essays {...this.props} />
                  </TabPanel>
                  <TabPanel>
                    <EditTest {...this.props} />
                  </TabPanel>
                  <TabPanel>
                    <Transcript {...this.props} />
                  </TabPanel>
                <TabPanel>
                    <EditSurvey {...this.props} />
                </TabPanel>
              </div>
            </Tabs>
          </div>
         </div>
      );
    }
  }
  
  StudentProfileIndexEdit.propTypes = {
    getUserProfile: PropTypes.func.isRequired,
  }
  
  function mapStateToProps(state) {
    return state;
  }
  
  export default connect(mapStateToProps, actions)(StudentProfileIndexEdit);
  