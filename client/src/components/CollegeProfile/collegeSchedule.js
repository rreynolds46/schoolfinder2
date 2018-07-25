import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import 'react-datepicker/dist/react-datepicker.css';

import './collegeProfile.css';


class CollegeSchedule extends Component {
    componentDidMount = () => {
        const school = this.props.match.params.school;
        this.props.getSchoolProfile(school);
    }


    constructor(props) {
        super(props);
        console.log(this.props);

        this.state = {
            schoolName: this.props.match.params.school,
            date: moment(),
            ...props
        };
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(date) {
        this.setState({
          date: date
        });
      }


    renderContent() {
                const profileDone = this.props.college;
                const profileStudent = this.props.auth;
                console.log(profileStudent);
                if(profileDone._id) {
                    const { college } = this.props;
                    return (
                        <div>
                            <div className='is-centered container school-information'>
                                <h1 className='is-size-4'><strong>{college.schoolProfile.name}</strong></h1><br />
                                <p>{college.schoolProfile.location}</p>
                            </div>


                            <div className='time-picker'>

                            <p>Please Select Your Ideal Time To Talk</p>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.handleChange}
                                filterDate={this.isWeekday}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={15}
                                dateFormat="LLL"
                                timeCaption="time"
                            />
                            <p>Please Allow Two Weekday's For Someone In Admissions To Respond</p>
                            </div>
                            <form action="https://formspree.io/reynro89@gmail.com"
                                method="POST">
                                <input type="hidden" name='date' value={this.state.date} />
                                <input type="email" placeholder='What is your e-mail' defaultValue={profileStudent.username} name="_replyto" />
                                <input type="submit" value="Send" />
                            </form> 
                            

                        </div>
                    )
        } else {
            return '';
        }
};

    render() {
      return (
        <div>
            {this.renderContent()}
        </div>
      )
    }
  }

  
  CollegeSchedule.propTypes = {
    getSchoolProfile: PropTypes.func.isRequired
}

function mapStateToProps({ auth }) {
    return { auth };
  }
  
export default connect(mapStateToProps, actions)(CollegeSchedule);
  
  
  