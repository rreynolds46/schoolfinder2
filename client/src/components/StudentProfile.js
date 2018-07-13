import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions';

import StudentProfileIndex from './StudentProfile/profileIndex';
import StudentProfileIndexEdit from './StudentProfileEdit/profileEditIndex';

class StudentProfile extends Component {
    componentDidMount = () => {
        const userID = this.props.match.params.userID;
        this.props.getUserProfile(userID);
    }

    renderProfile() {

      switch(this.props.auth) {
        case null:
            return '';
        case false:
            return(
              <h1>not allowed</h1>
            );
        default:
            const studentProf = this.props.auth._id;
            if(studentProf === this.props.match.params.userID) {
                return (
                      <StudentProfileIndexEdit {...this.props} />
                    );      
            } else {
              if(this.props.auth.grouping === 'student') {
                return (
                  <h1>not allowed</h1>
                );         
              } else {
                return(
                  <StudentProfileIndex {...this.props} />
                )
              }
        }
      }
    }

    render() {
      return(
        <div>
          <div>{this.renderProfile()}</div>
        </div>  
    
      )}   
  }
  
  StudentProfile.propTypes = {
    getUserProfile: PropTypes.func.isRequired,
    getStudentSurvey: PropTypes.func.isRequired,
    getStudentTest: PropTypes.func.isRequired
  }
  
  function mapStateToProps(state) {
    return state;
  }
  
  export default connect(mapStateToProps, actions)(StudentProfile);
  