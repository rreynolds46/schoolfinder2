import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Collapsible from 'react-collapsible';



class Profile extends Component {
    componentDidMount = () => {
        const userID = this.props.match.params.userID;
        this.props.getUserProfile(userID);
    }


    constructor(props) {
        super(props);
        console.log(this.props);

        this.state = {
            _user: this.props.match.params.userID,
            ...props
        }
    }

    renderContent() {
        switch(this.props.student) {
            case null:
                return '';
            case false:
                return '';
            default:
                const profileDone = this.props.student;
                if(profileDone._id) {
                    const { student } = this.props;
                    return (
                        <div className='is-centered container'>
                            <form onSubmit={this.onSubmit}>
                                <div className='columns is-centered'>
                                    <div className="field column is-one-quarter is-centered">
                                        <label className="label">Name</label>
                                        <div className="control">
                                            <input value={student.name} name='name' className="input" type="text"  />
                                        </div>
                                    </div>
                                    <div className="field column is-one-quarter is-centered">
                                        <label className="label">High School</label>
                                        <div className="control">
                                            <input value={student.highSchool} name='highSchool' className="input" type="text"  />
                                        </div>
                                    </div>
                                </div>
                                <div className='columns is-centered'>
                                    <div className="field column is-one-quarter is-centered">
                                        <label className="label">GPA</label>
                                        <div className="control">
                                            <input value={student.gpa} min={0} name='gpa' className="input" step={.01} type="number"  />
                                        </div>
                                    </div>
                                    <div className="field column is-one-quarter is-centered">
                                        <label className="label">Hometown</label>
                                        <div className="control">
                                            <input value={student.hometown} name='hometown' className="input" type="text"  />
                                        </div>
                                    </div>
                                </div>

                                <section className='container column is-three-fifths'> 
                                    <Collapsible trigger="Biography">
                                                <div className='entryDiv container'>
                                                    <textarea value={student.biography} name='biography' className="textarea" rows="10"></textarea>
                                                </div>                 
                                    </Collapsible>
                                    <Collapsible trigger="Extracurriculars">
                                                <div className='entryDiv container'>
                                                    <textarea value={student.extracurricular} name='extracurricular' className="textarea" rows="10"></textarea>
                                                </div>                 
                                    </Collapsible>
                                    <Collapsible trigger="Awards">
                                                <div className='entryDiv container'>
                                                    <textarea value={student.awards} name='awards' className="textarea" rows="10"></textarea>
                                                </div>                 
                                    </Collapsible>
                                </section>
    
                            </form>
                        </div>
                    )
        } else {
            return '';
        }
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

  
  Profile.propTypes = {
    profileEdit: PropTypes.func.isRequired,
    getUserProfile: PropTypes.func.isRequired
}

  
  export default Profile;
  