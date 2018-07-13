import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


import './header.css';



import CollegeChat from './CollegeProfile/collegeChat';
import CollegeSurvey from './CollegeProfile/collegeSurvey';
import CollegeVideo from './CollegeProfile/collegeVideo';
import CollegeSchedule from './CollegeProfile/collegeSchedule';
import Profile from './CollegeProfile/profile';




class CollegeProfile extends Component {
    componentDidMount = () => {
        const school = this.props.match.params.school;
        this.props.getSchoolProfile(school);
    }

    render() {
      return (
        <div>
          <div className='tab-whole'>
              <Tabs>
              
                <TabList>
                  <Tab>Profile</Tab>
                  <Tab>Schedule a Call</Tab>
                  <Tab>Chat</Tab>
                  <Tab>Video</Tab>
                  <Tab>Survey</Tab>
                </TabList>
                <div className='panels'>
                  <TabPanel>
                    <Profile {...this.props} />
                  </TabPanel>
                  <TabPanel>
                    <CollegeSchedule {...this.props} />
                  </TabPanel>
                  <TabPanel>
                    <CollegeChat {...this.props} />
                  </TabPanel>
                  <TabPanel>
                    <CollegeVideo {...this.props} />
                  </TabPanel>
                <TabPanel>
                    <CollegeSurvey {...this.props} />
                </TabPanel>
              </div>
            </Tabs>
          </div>
         </div>
      );
    }
  }
  
  CollegeProfile.propTypes = {
    getSchoolProfile: PropTypes.func.isRequired,
  }
  
  function mapStateToProps(state) {
    return state;
  }
  
  export default connect(mapStateToProps, actions)(CollegeProfile);
  