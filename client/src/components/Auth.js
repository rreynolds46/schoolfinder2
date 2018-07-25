import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


import './header.css';


import Login from './Login';
import Register from './Register';

class AuthMain extends Component {


    render() {
      return (
        <div>
          <div className='tab-whole'>
              <Tabs>
              
                <TabList>
                  <Tab>Login</Tab>
                  <Tab>Register</Tab>
                </TabList>
                <div className='panels'>
                  <TabPanel>
                    <Login {...this.props} />
                  </TabPanel>
                  <TabPanel>
                    <Register {...this.props} />
                  </TabPanel>
              </div>
            </Tabs>
          </div>
         </div>
      );
    }
  }
  
  AuthMain.propTypes = {
    getUserProfile: PropTypes.func.isRequired,
  }
  
  function mapStateToProps(state) {
    return state;
  }
  
  export default connect(mapStateToProps, actions)(AuthMain);
  