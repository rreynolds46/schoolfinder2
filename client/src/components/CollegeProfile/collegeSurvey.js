import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CustomizedSlider from '../StyleComponents/slider';
import '../header.css';



class CollegeSurvey extends Component {
    componentDidMount = () => {
        const school = this.props.match.params.school;
        this.props.getSchoolProfile(school);
    }


    renderContent() {
        const profileDone = this.props.college;
        if(profileDone._id) {
            const { college } = this.props;
        return (
        
            <div className='container is-centered'>
                <form>
                    <CustomizedSlider value={college.surveys.campusSetting} name='surveys.campusSetting' title='Campus Setting' minMark='Rural' midMark='Suburban' highMark='Urban' />
                    <br/>
                    <CustomizedSlider value={college.surveys.schoolSize} name='surveys.schoolSize' title='Campus Size' minMark='Very Small (<2000)' midMark='Average (10,000)' highMark='Very Large (>30,000)' />
                    <br/>
                    <CustomizedSlider value={college.surveys.reputation} name='surveys.reputation' title='School Reputation' minMark='Not prestigious' midMark='Prestigious' highMark='Extremely Prestigious' />
                    <br/>   
                    <CustomizedSlider value={college.surveys.diversity} name='surveys.diversity' title='School Diversity' minMark='Not Diverse' midMark='Diverse' highMark='Extremely Diverse' />
                    <br/>       
                    <CustomizedSlider value={college.surveys.classSize} name='surveys.classSize' title='Class Size' minMark='Very Small (<10 Students)' midMark='Average (30 Students)' highMark='Very Large (>60 Students)' />
                    <br/>
                    <CustomizedSlider value={college.surveys.homework} name='surveys.homework' title='Academic Program' minMark='Not Rigorous' midMark='Rigorous' highMark='Extremely Rigorous' />
                    <br/>   
                    <CustomizedSlider value={college.surveys.courseRequirements} name='surveys.courseRequirements' title='Course Schedule' minMark='Very Flexible' midMark='Somewhat Structured' highMark='Extremely Structured' />
                    <br/>  
                    <CustomizedSlider value={college.surveys.studyAbroad} name='surveys.studyAbroad' title='Study Abroad Program' minMark='Not Encouraged' midMark='Encouraged' highMark='Extremely Encouraged' />
                    <br/>  
                    <CustomizedSlider value={college.surveys.campusHousing} name='surveys.campusHousing' title='Campus Housing' minMark='Mostly Off-Campus' midMark='Mix of On and Off-Campus' highMark='Mostly On-Campus' />
                    <br/>
                    <CustomizedSlider value={college.surveys.greekLife} name='surveys.greekLife' title='Campus Greek Life' minMark='Nonexistent' midMark='Average' highMark='Large Part of Culture' />
                    <br/> 
                    <CustomizedSlider value={college.surveys.sports} name='surveys.sports' title='School Sports' minMark='Nonexistent' midMark='Average' highMark='Large Part of Culture' />
                    <br/>  
                    <CustomizedSlider value={college.surveys.arts} name='surveys.arts' title='School Arts' minMark='Nonexistent' midMark='Average' highMark='Large Part of Culture' />
                    <br/>      
                    <div className="control">
                        <button type='submit' className="button is-primary">Submit</button>
                    </div>
                </form>
            </div>
            
                );
            }else {
                return '';
            }
            }
    

    
    render() {
        return(
        <div>
            {this.renderContent()}
        </div>
        )
    }
  }

  CollegeSurvey.propTypes = {
    getSchoolProfile: PropTypes.func.isRequired,
  }
  
  export default CollegeSurvey;
  