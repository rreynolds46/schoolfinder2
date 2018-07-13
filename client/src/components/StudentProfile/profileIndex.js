import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Profile from './profile';
import Essay from './essays';
import Tests from './tests';
import Transcript from './transcript';
import Survey from './survey';


class StudentProfileIndex extends Component {
    componentDidMount = () => {
        const userID = this.props.match.params.userID;
        this.props.getUserProfile(userID);
    }

    render() {
      return (
        <div>
          <Tabs>
            <TabList>
              <Tab>Profile</Tab>
              <Tab>Essay</Tab>
              <Tab>Tests</Tab>
              <Tab>Transcript</Tab>
              <Tab>Survey</Tab>
            </TabList>
            
            <TabPanel>
              <Profile {...this.props} />
            </TabPanel>
            <TabPanel>
              <Essay {...this.props} />
            </TabPanel>
            <TabPanel>
              <Tests {...this.props} />
            </TabPanel>
            <TabPanel>
              <Transcript {...this.props} />
            </TabPanel>
          <TabPanel>
              <Survey {...this.props} />
          </TabPanel>
        </Tabs>
        </div>
      );
    }
  }
  
  StudentProfileIndex.propTypes = {
    getUserProfile: PropTypes.func.isRequired,
    getStudentSurvey: PropTypes.func.isRequired,
    getStudentTest: PropTypes.func.isRequired
  }
  
  function mapStateToProps(state) {
    return state;
  }
  
  export default connect(mapStateToProps, actions)(StudentProfileIndex);
  