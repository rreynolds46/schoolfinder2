import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './collegeProfile.css';


class CollegeChat extends Component {
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
                            <div className='chat-component'>
                                <iframe className='chat-box' src='https://app.purechat.com/w/pgprc'></iframe>
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

  
  CollegeChat.propTypes = {
    getSchoolProfile: PropTypes.func.isRequired
}

  
  export default CollegeChat;
  