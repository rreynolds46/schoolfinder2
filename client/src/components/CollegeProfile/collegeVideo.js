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
                        <div className='video-container'>
                            <iframe src='https://morning-escarpment-67980.herokuapp.com/' className='video' />
                            

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
  