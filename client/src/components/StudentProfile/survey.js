import React, { Component } from 'react';
import CustomizedSlider from '../StyleComponents/sliderFixed';


class Survey extends Component {
  componentDidMount = () => {
    const userID = this.props.match.params.userID;
    this.props.getStudentSurvey(userID);
}

    render() {
      const { survey } = this.props;
      console.log(survey);
      return (
        <div>
            <CustomizedSlider result={ survey.campusSetting } title='Ideal Campus Setting' minMark='Rural' midMark='Suburban' highMark='Urban' />
            <br/>
            <CustomizedSlider result={ survey.schoolSize }  title='Ideal Campus Size' minMark='Very Small (<2000)' midMark='Average (10,000)' highMark='Very Large (>30,000)' />
            <br/>
            <CustomizedSlider result={ survey.reputation } title='Ideal School Reputation' minMark='Not prestigious' midMark='Prestigious' highMark='Extremely Prestigious' />
            <br/>   
            <CustomizedSlider result={ survey.diversity } title='Ideal School Diversity' minMark='Not Diverse' midMark='Diverse' highMark='Extremely Diverse' />
            <br/>       
            <CustomizedSlider result={ survey.classSize } title='Ideal Class Size' minMark='Very Small (<10 Students)' midMark='Average (30 Students)' highMark='Very Large (>60 Students)' />
            <br/>
            <CustomizedSlider result={ survey.homework } title='Ideal Academic Program' minMark='Not Rigorous' midMark='Rigorous' highMark='Extremely Rigorous' />
            <br/>   
            <CustomizedSlider result={ survey.courseRequirements } title='Ideal Course Schedule' minMark='Very Flexible' midMark='Somewhat Structured' highMark='Extremely Structured' />
            <br/>  
            <CustomizedSlider result={ survey.studyAbroad } title='Ideal Study Abroad Program' minMark='Not Encouraged' midMark='Encouraged' highMark='Extremely Encouraged' />
            <br/>  
            <CustomizedSlider result={ survey.campusHousing } title='Ideal Campus Housing' minMark='Mostly Off-Campus' midMark='Mix of On and Off-Campus' highMark='Mostly On-Campus' />
            <br/>
            <CustomizedSlider result={ survey.greekLife } title='Ideal Campus Greek Life' minMark='Nonexistent' midMark='Average' highMark='Large Part of Culture' />
            <br/> 
            <CustomizedSlider result={ survey.sports } title='Ideal School Sports' minMark='Nonexistent' midMark='Average' highMark='Large Part of Culture' />
            <br/>  
            <CustomizedSlider result={ survey.arts } title='Ideal School Arts' minMark='Nonexistent' midMark='Average' highMark='Large Part of Culture' />
            <br/>               
            <br />
        </div>
      );
    }
  }

  
  export default Survey;
  