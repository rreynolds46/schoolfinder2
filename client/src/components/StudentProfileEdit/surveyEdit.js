import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CustomizedSlider from '../StyleComponents/slider';
import '../header.css';



class EditSurvey extends Component {
    componentDidMount = () => {
        const userID = this.props.match.params.userID;
        this.props.getUserProfile(userID);
    }

    constructor(props) {
        super(props);
        this.state = {
            _user: this.props.match.params.userID,
            ...props
        }
        this.onSubmit = this.onSubmit.bind(this);
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
                    
                        <div className='container is-centered'>
                            <form onSubmit={this.onSubmit}>
                                <div className="control form-button">
                                    <button type='submit' className="button save">Save</button>
                                </div>
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={student.surveys.campusSetting} name='surveys.campusSetting' title='Ideal Campus Setting' minMark='Rural' midMark='Suburban' highMark='Urban' />
                                <br/>
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={student.surveys.schoolSize} name='surveys.schoolSize' title='Ideal Campus Size' minMark='Very Small (<2000)' midMark='Average (10,000)' highMark='Very Large (>30,000)' />
                                <br/>
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={student.surveys.reputation} name='surveys.reputation' title='Ideal School Reputation' minMark='Not prestigious' midMark='Prestigious' highMark='Extremely Prestigious' />
                                <br/>   
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={student.surveys.diversity} name='surveys.diversity' title='Ideal School Diversity' minMark='Not Diverse' midMark='Diverse' highMark='Extremely Diverse' />
                                <br/>       
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={student.surveys.classSize} name='surveys.classSize' title='Ideal Class Size' minMark='Very Small (<10 Students)' midMark='Average (30 Students)' highMark='Very Large (>60 Students)' />
                                <br/>
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={student.surveys.homework} name='surveys.homework' title='Ideal Academic Program' minMark='Not Rigorous' midMark='Rigorous' highMark='Extremely Rigorous' />
                                <br/>   
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={student.surveys.courseRequirements} name='surveys.courseRequirements' title='Ideal Course Schedule' minMark='Very Flexible' midMark='Somewhat Structured' highMark='Extremely Structured' />
                                <br/>  
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={student.surveys.studyAbroad} name='surveys.studyAbroad' title='Ideal Study Abroad Program' minMark='Not Encouraged' midMark='Encouraged' highMark='Extremely Encouraged' />
                                <br/>  
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={student.surveys.campusHousing} name='surveys.campusHousing' title='Ideal Campus Housing' minMark='Mostly Off-Campus' midMark='Mix of On and Off-Campus' highMark='Mostly On-Campus' />
                                <br/>
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={student.surveys.greekLife} name='surveys.greekLife' title='Ideal Campus Greek Life' minMark='Nonexistent' midMark='Average' highMark='Large Part of Culture' />
                                <br/> 
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={student.surveys.sports} name='surveys.sports' title='Ideal School Sports' minMark='Nonexistent' midMark='Average' highMark='Large Part of Culture' />
                                <br/>  
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={student.surveys.arts} name='surveys.arts' title='Ideal School Arts' minMark='Nonexistent' midMark='Average' highMark='Large Part of Culture' />
                                <br/>      
                                <div className="control">
                                    <button type='submit' className="button is-primary">Submit</button>
                                </div>
                            </form>
                        </div>
            
                );
                } else {
                    return (
                    
                        <div className='container is-centered'>
                            <form onSubmit={this.onSubmit}>
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={5} name='surveys.campusSetting' title='Ideal Campus Setting' minMark='Rural' midMark='Suburban' highMark='Urban' />
                                <br/>
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={5} name='surveys.schoolSize' title='Ideal Campus Size' minMark='Very Small (<2000)' midMark='Average (10,000)' highMark='Very Large (>30,000)' />
                                <br/>
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={5} name='surveys.reputation' title='Ideal School Reputation' minMark='Not prestigious' midMark='Prestigious' highMark='Extremely Prestigious' />
                                <br/>   
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={5} name='surveys.diversity' title='Ideal School Diversity' minMark='Not Diverse' midMark='Diverse' highMark='Extremely Diverse' />
                                <br/>       
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={5} name='surveys.classSize' title='Ideal Class Size' minMark='Very Small (<10 Students)' midMark='Average (30 Students)' highMark='Very Large (>60 Students)' />
                                <br/>
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={5} name='surveys.homework' title='Ideal Academic Program' minMark='Not Rigorous' midMark='Rigorous' highMark='Extremely Rigorous' />
                                <br/>   
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={5} name='surveys.courseRequirements' title='Ideal Course Schedule' minMark='Very Flexible' midMark='Somewhat Structured' highMark='Extremely Structured' />
                                <br/>  
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={5} name='surveys.studyAbroad' title='Ideal Study Abroad Program' minMark='Not Encouraged' midMark='Encouraged' highMark='Extremely Encouraged' />
                                <br/>  
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={5} name='surveys.campusHousing' title='Ideal Campus Housing' minMark='Mostly Off-Campus' midMark='Mix of On and Off-Campus' highMark='Mostly On-Campus' />
                                <br/>
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={5} name='surveys.greekLife' title='Ideal Campus Greek Life' minMark='Nonexistent' midMark='Average' highMark='Large Part of Culture' />
                                <br/> 
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={5} name='surveys.sports' title='Ideal School Sports' minMark='Nonexistent' midMark='Average' highMark='Large Part of Culture' />
                                <br/>  
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={5} name='surveys.arts' title='Ideal School Arts' minMark='Nonexistent' midMark='Average' highMark='Large Part of Culture' />
                                <br/>      

                            </form>
                        </div>
            
                );
                }
                
        }
    }


    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
      }

    onSubmit(e) {
        const userID = this.props.match.params.userID;
        e.preventDefault();
        this.props.surveyEdit(this.state, userID);
        const userURL = `/users/${userID}`;
        const { history } = this.props;
        history.push(userURL);    }

    render() {
        return(
        <div>
            {this.renderContent()}
        </div>
        )
    }
  }

  EditSurvey.propTypes = {
      surveyEdit: PropTypes.func.isRequired,
      getUserProfile: PropTypes.func.isRequired,
      getStudentSurvey: PropTypes.func.isRequired
  }
  
  export default EditSurvey;
  