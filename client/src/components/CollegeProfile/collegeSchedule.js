import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';

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
                            <p>Please Give Two Weekday's For Someone In Admissions To Respond</p>
                            </div>
                            

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

  
  export default CollegeSchedule;
  