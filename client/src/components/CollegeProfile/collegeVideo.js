import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './collegeProfile.css';


class CollegeVideo extends Component {
    componentDidMount = () => {
        const school = this.props.match.params.school;
        this.props.getSchoolProfile(school);
    }


    constructor(props) {
        super(props);
        console.log(this.props);

        this.state = {
            schoolName: this.props.match.params.school,
            ...props
        }
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
                            
                            <div className='is-centered container card-container'>
                                
                                <section className='columns'>
                                        <div className='column is-one-third'>
                                            <div className="card">
                                                <div className="card-content">
                                                    <p className="title">
                                                        {college.schoolProfile.enrollment}
                                                    </p>
                                                </div>
                                                <footer className="card-footer">
                                                    <p className="card-footer-item">
                                                        Students
                                                    </p>
                                                </footer>
                                            </div>
                                        </div>
                                        <div className='column is-one-third'>
                                            <div className="card">
                                                <div className="card-content">
                                                    <p className="title">
                                                        ${college.schoolProfile.financialAid}
                                                    </p>
                                                </div>
                                                <footer className="card-footer">
                                                    <p className="card-footer-item">
                                                        Average Financial Aid
                                                    </p>
                                                </footer>
                                            </div>
                                        </div>
                                        <div className='column is-one-third'>
                                            <div className="card">
                                                <div className="card-content">
                                                    <p className="title">
                                                        {college.schoolProfile.sixYear}%
                                                    </p>
                                                </div>
                                                <footer className="card-footer">
                                                    <p className="card-footer-item">
                                                        Graduate in Six Years
                                                    </p>
                                                </footer>
                                            </div>
                                        </div>
                                </section>
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

  
  CollegeVideo.propTypes = {
    getSchoolProfile: PropTypes.func.isRequired
}

  
  export default CollegeVideo;
  