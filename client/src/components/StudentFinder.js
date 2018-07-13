import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions';

class StudentSearch extends Component {
    componentDidMount = () => {
        this.props.getStudentList();
    }

    renderContent() {
        switch(this.props.student) {
            case null:
                console.log('NULL');
            case false: 
                console.log('FALSE');
            default:
                const listDone = this.props.studentList;
                if(listDone) {
                    const { studentList } = this.props;
                    var rows = [];
                    studentList.forEach(function(student) {
                        rows.push(
                            <tr>
                                <td><a href={`/users/${student._id}`}>{student.studentprofile.name}</a></td>
                                <td>{student.studentprofile.gpa}</td>
                                <td>{student.studentprofile.hometown}</td>
                                <td>{student.studentprofile.highSchool}</td>
                            </tr>
                        );
                    }.bind(this));
                    return(
                        <tbody>{rows}</tbody>
                    );

                } else {
                    return '';
                }
        }
        
    }

    render() {
      return(
        <div>
            
            <div className='container is-centered'>
            <table className='table is-bordered is-hoverable is-fullwidth'>
                <thead>
                <tr>
                    <th>Student Name</th>
                    <th>GPA</th>
                    <th>Location</th>
                    <th>High School</th>
                </tr>
                </thead>
                {this.renderContent()}
                


            </table>
            </div>
        </div>  
    
      )}   
  }
  
  StudentSearch.propTypes = {
    getStudentList: PropTypes.func.isRequired
  }
  
  function mapStateToProps(state) {
    return state;
  }
  
  export default connect(mapStateToProps, actions)(StudentSearch);
  